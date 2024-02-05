import Image from 'next/image'
import React from 'react'
import uploadedImg from "../public/assets/uploadedImage.png";

const SelectedFileDetail = ({ selectedFile }: { selectedFile: File }) => {
  return (
    <div className="h-16 flex items-center px-3 gap-x-3 border-t border-b border-gray-300 w-full mt-10">
      {selectedFile && (
        <div className="w-full">
          <div className="flex gap-x-3 items-center">
            <Image
              className="h-5 w-5"
              src={uploadedImg}
              alt="uploadedImg"
            />
            <div className="flex w-full justify-between">
              <p>{selectedFile?.name}</p>
              <p>
                {(
                  selectedFile?.size /
                  (1024 * 1024)
                ).toFixed(2)}{" "}
                MB
              </p>
            </div>
          </div>
          <hr className="border border-[#FA9D26]" />
        </div>
      )}
      {!selectedFile && <p>No File Uploaded!</p>}
    </div>
  )
}

export default SelectedFileDetail