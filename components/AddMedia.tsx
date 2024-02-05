// components/Dropzone.tsx
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import image from "../public/assets/uploadImage.png";
import Image from "next/image";
import Button from "./Button";

interface DropzoneProps {
  onFileDrop: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileDrop,
}: any) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const fileInputRef = useRef<any>(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    onFileDrop(selectedFile)
    setSelectedFile(selectedFile.name)
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileDrop(acceptedFiles[0]);
        setSelectedFile(acceptedFiles[0].name);
      }
    },
    [onFileDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="border border-gray-300 rounded-lg p-3">
      <div
        {...getRootProps()}
        className="h-28 border-2 flex flex-col items-center justify-center border-gray-300 border-dashed rounded-lg cursor-pointer"
      >
        <input {...getInputProps()} />
        {selectedFile ? (
          selectedFile
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Image src={image} className="h-5 w-5" alt="uploadImage" />
            <p className="text-gray-500">
              Drag & Drop Here Or{" "}
              <span className="font-bold" >
                Browse
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <input onChange={handleFileChange} ref={fileInputRef} type="file" className="hidden" />
        <Button
          btnStyle="w-1/2 mt-2"
          onClick={handleButtonClick}
          type="submit"
          label="Upload Manifest"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default Dropzone;
