"use client";
import { FiEdit2 } from "react-icons/fi";
import Modal from "@/app/(components)/modal";

export default function ProfileItem({ icon: Icon, title, value, window }) {
  return (
    <div className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
      {Icon && (
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
          <Icon />
        </span>
      )}

      <div className="min-w-0 flex-1">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        <p className="mt-1 truncate text-lg font-extrabold text-slate-900">{value}</p>
      </div>

      <Modal>
        <Modal.Open name={"edit-profile"}>
          <button
            aria-label="ویرایش"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
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
