import { Sidebar } from "./(components)/Sidebar";

export default function PanelLayout({ children }) {
  return (
    <div className="flex bg-[#f5f6f7] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 min-w-0">{children}</main>
    </div>
  );
}
