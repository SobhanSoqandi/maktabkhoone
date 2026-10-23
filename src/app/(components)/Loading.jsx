"use client";

import { SyncLoader } from "react-spinners";


export default function Loading({lable}) {
    return (<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-white">
        <SyncLoader color="#006fff" size={15} />
        <p className="text-xs font-medium text-slate-500">
            {lable ?? "درحال بارگزاری . . ."}
        </p>
    </div>
    );
}


