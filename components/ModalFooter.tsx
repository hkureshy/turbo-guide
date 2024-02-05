import React from "react";
import Button from "./Button";

const ModalFooter = ({ onContinue, onCancel }: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-5 text-primary font-bold text-xl">
        Data in the import file is correct. Please press Continue to import.
      </p>
      <div className="flex mb-5 items-center gap-x-3">
        <Button
          btnStyle="h-12 w-48"
          type={"submit"}
          label={"Continue Import"}
          variant={"primary"}
          onClick={onContinue}
        />
        <Button
          onClick={onCancel}
          btnStyle="h-12 w-48"
          type={"submit"}
          label={"Cancel"}
          variant={"outline"}
        />
      </div>
    </div>
  );
};

export default ModalFooter;
