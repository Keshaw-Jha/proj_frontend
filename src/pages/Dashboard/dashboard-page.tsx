import React from "react";

type DashboardCardProps = {
  icon?: JSX.Element;
  title: string;
  value: string;
};

// Reusable SidebarItem component
function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className=" h-[150px] bg-[#ffc9af] rounded-xl p-5 grid grid-rows-2 text-[#FF204E]">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-5xl font-bold">{value}</div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 gap-10">
        <DashboardCard title={"Ticket's Booked"} value={"1.5k"} />
        <DashboardCard title={"Active Count"} value={"250"} />
        <DashboardCard title={"Exited"} value={"750"} />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default DashboardPage;
