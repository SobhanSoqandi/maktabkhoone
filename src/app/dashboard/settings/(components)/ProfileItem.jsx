"use client";
import { FiEdit2 } from "react-icons/fi";
import Modal, { useModal } from "@/app/(components)/modal";

export default function ProfileItem({ title, value, window }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 border rounded-xl grow">
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm">{title}</span>

        <span className="font-medium">{value}</span>
      </div>

      <Modal>
        <Modal.Open name={"edit-profile"}>
          <button className="p-2">
            <FiEdit2 />
          </button>
        </Modal.Open>
        <Modal.Window name="edit-profile">
          <div className="">
            <Modal.Close />
            {window}
          </div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
