import React, { useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "./Dropdown";
import { RiTimer2Line } from "react-icons/ri";

import RadioButtons from "./RadioButton";
import Dropzone from "./AddMedia";
import ModalFooter from "./ModalFooter";
import SelectedFileDetail from "./SelectedFileDetail";

const UploadDocumentModal: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState("yes");
  const [selectedClient, setSelectedClient] = useState("yes");
  const [selectedFile, setSelectedFile] = useState<any>();
  const [selectedClientLabels, setSelectedClientLabels] = useState<any>({});
  const cancelButtonRef = useRef(null);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const dropdownOptions = [
    { label: "Name 1", value: "Name 1" },
    { label: "Name 2", value: "Name 2" },
  ];

  const testCenterOptions = [
    { label: "Client 1", value: "Client 1" },
    { label: "Client 2", value: "Client 2" },
  ];

  const options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const clientOptions = [
    { value: "no", label: "Single" },
    { value: "yes", label: "Multiple" },
  ];

  const testingCenters = [
    { label: "Testing Center 1", id: "importName1" },
    { label: "Testing Center 2", id: "importName2" },
    { label: "Testing Center 3", id: "importName3" },
    { label: "Testing Center 4", id: "importName4" },
  ];

  const handleDropdownChange = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedLabel(label);
  };

  const handleClientDropdownChange = ({
    label,
    value,
    id,
  }: {
    label: string;
    value: string;
    id: string;
  }) => {
    setSelectedClientLabels((prevLabels: any) => ({
      ...prevLabels,
      [id]: label,
    }));
  };

  const handleFileDrop = (file: File) => {
    setSelectedFile(file);
  };

  const handleContinue = () => { };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={handleCloseModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-16 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className=" px-4 py-5 sm:px-6">
                <RxCross2
                  className="bg-primary hover:bg-primary/90 cursor-pointer h-8 w-8 p-1 absolute left-10 top-10 rounded-lg text-white"
                  onClick={() => setOpen(false)}
                />
                <div className="flex items-center justify-center">
                  <p className="text-3xl mt-8 font-semibold text-[#0D2F4F] pb-5 border-b border-gray-300">
                    Document Upload
                  </p>
                </div>
                <div className="flex gap-x-10">
                  <div className="w-8/12 p-5">
                    <Dropdown
                      id="importName"
                      name="importName"
                      placeholder="Select Import Name:"
                      placeholderColor="text-primary font-bold"
                      selectedLabel={selectedLabel}
                      setSelectedLabel={setSelectedLabel}
                      options={dropdownOptions}
                      onChange={handleDropdownChange}
                    />
                    <hr className="border border-gray-300 my-4 w-1/2" />
                    <div className="flex flex-col items-start">
                      <label className="font-bold text-primary text-sm">
                        Select a manifest that you&apos;d like to import
                      </label>
                      <div className=" rounded-lg w-full mt-2">
                        <Dropzone onFileDrop={handleFileDrop} />
                      </div>
                      <SelectedFileDetail selectedFile={selectedFile} />
                      <hr className="border border-gray-300 my-3 w-1/2" />
                      <div className="flex flex-col py-1 gap-y-1">
                        <p className="font-bold text-primary text-sm">
                          Elapse Data Checking:
                        </p>
                        <p className="text-[#3AAD57] font-semibold">
                          No Elaped Dates!
                        </p>
                      </div>
                      <hr className="border border-gray-300 my-3 w-1/2" />
                      <p className="font-bold text-primary text-sm">
                        Tolerance Window:
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                          <span className="ms-3 text-sm font-medium text-gray-500">
                            Toggle ON
                          </span>
                        </label>
                        <div className="border-l h-8 border-gray-500 mx-4"></div>
                        <div className="flex items-center gap-x-2 text-gray-500">
                          <RiTimer2Line className=" h-6 w-6" />
                          <p>Select Tolerance Level</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-4/12">
                    <div className="flex flex-col gap-y-2">
                      <RadioButtons
                        label={"Split schedule using social distancing?"}
                        selectedOption={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        options={options}
                      />
                    </div>
                    <div className="flex flex-col mt-5 border-y border-gray-300 py-3 gap-y-1">
                      <p className="font-bold text-primary text-sm">
                        Location Checking:
                      </p>
                      <p className="text-[#3AAD57] font-semibold">
                        All Available!
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-2 mt-5">
                      <RadioButtons
                        label={"Client"}
                        selectedOption={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                        options={clientOptions}
                      />
                    </div>
                    {testingCenters.map((center, index) => (
                      <div
                        key={index}
                        className="flex flex-nowrap items-center gap-x-2 gap-y-2 mt-5"
                      >
                        <label className="text-gray-600 w-1/2 text-xs">
                          {center.label}
                        </label>
                        <div className="w-full flex items-center gap-x-1">
                          <Dropdown
                            id={center.id}
                            name={center.id}
                            placeholder="Select Client"
                            placeholderColor="text-gray-500"
                            selectedLabel={
                              selectedClientLabels[center.id]?.label || ""
                            }
                            options={testCenterOptions}
                            onChange={(value: any) =>
                              handleClientDropdownChange({
                                label: value,
                                value,
                                id: center.id,
                              })
                            }
                          />
                          <RiTimer2Line className="h-6 w-6" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <ModalFooter
                  onContinue={handleContinue}
                  onCancel={() => setOpen(false)}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UploadDocumentModal;
