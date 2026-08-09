"use client";

import { useState } from "react";
import SessionFilesList from "./SessionFilesList";

const TABS = [{ id: "files", label: "فایل‌های جلسه" }];

export default function SessionTabs({ downloadUrl }) {
  const [activeTab, setActiveTab] = useState("files");

  return (
    <div className="px-6 py-4">
      <div className="flex gap-6 border-b border-gray-100">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-sm transition-colors ${
              activeTab === tab.id
                ? "text-gray-900 border-b-2 border-gray-900 font-medium"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-4">
        {activeTab === "files" && <SessionFilesList downloadUrl={downloadUrl} />}
      </div>
    </div>
  );
}
