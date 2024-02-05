import Button from "@/components/Button";
import { useState } from "react";
import UploadDocumentModal from "@/components/UploadDocument";


export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Button
          type={"submit"}
          label={"Upload Document"}
          variant={"primary"}
          onClick={() => setOpen(true)}
        />
      </div>
      <UploadDocumentModal open={open} setOpen={setOpen} />
    </>
  );
}
