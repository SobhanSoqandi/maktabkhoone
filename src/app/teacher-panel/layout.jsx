import { Sidebar } from "./(components)/Sidebar";


export default function PanelLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f5f6f7]">
      <Sidebar />

      {/* بخش dynamic: هر صفحه‌ای که باز بشه اینجا رندر می‌شه، سایدبار re-mount نمی‌شه */}
      <main className="min-w-0 flex-1 p-6 md:p-8">{children}</main>
    </div>
  );
}
