import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#8884d8" },
  { name: "Group B", value: 300, fill: "#82ca9d" },
  { name: "Group C", value: 300, fill: "#ffc658" },
  { name: "Group D", value: 200, fill: "#ff7300" },
];

const DoughnutChart = () => {
  return (
    <div className="h-full">
      <div className="flex flex-row  items-center h-[90%]">
        <div className="h-[100%] w-[70%]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={"45%"}
                outerRadius={"65%"}
                paddingAngle={4}
                stroke="none">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-2 bg-stone-200 bg-opacity-20 p-3 rounded-xl">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="flex flex-row  gap-2">
                <div
                  className="w-4 h-4 rounded-full mt-2 border-1 border-gray-300"
                  style={{ backgroundColor: item.fill }}
                />
                <div className="flex flex-col tp:text-[2vh] font-semibold">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[10%] text-[1.5vw] font-bold flex justify-center items-center">
        Activity Status
      </div>
    </div>
  );
};

export default DoughnutChart;
