type DashboardCardProps = {
  icon?: JSX.Element;
  title: string;
  value: string | number;
};

// Reusable SidebarItem component
function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    <div className=" h-[150px] bg-[#ffc9af] rounded-lg p-6 grid grid-cols-3 text-[#FF204E]">
      <div className="grid grid-rows-2 col-span-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-5xl font-bold">{value}</div>
      </div>
      <div className="flex justify-center items-center">{icon}</div>
    </div>
  );
}

export default DashboardCard;
