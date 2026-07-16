import SupportCard from "./SupportCard";


export default function StudentSupport() {
  return (
    <div className="space-y-5">

      <SupportCard
        icon="phone"
        title="تماس با پشتیبانی"
        description="شنبه تا چهارشنبه، ۱۰ تا ۱۸"
        value="۰۲۱-۹۱۰۱۳۱۷۳۱"
      />

      <SupportCard
        icon="chat"
        title="پشتیبانی آنلاین در بله"
        description="۷ روز هفته، ۹ تا ۱۸"
        value="@maktabsupportbot"
      />

    </div>
  );
}