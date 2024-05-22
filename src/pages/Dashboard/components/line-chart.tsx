import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DaysData {
  name: string;
  bookings: number;
}

const LineChartComponent = () => {
  const data = [
    { name: "Sunday", bookings: 27 },
    { name: "Monday", bookings: 18 },
    { name: "Tuesday", bookings: 23 },
    { name: "Wednesday", bookings: 34 },
    { name: "Thursday", bookings: 45 },
    { name: "Friday", bookings: 56 },
    { name: "Saturday", bookings: 67 },
  ];

  function getPreviousDaysData(data: DaysData[], numDays = 4) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();

    const previousDays = [];
    for (let i = 1; i <= numDays; i++) {
      const dayIndex = (today - i + 7) % 7; // Use modulo to wrap around the week
      previousDays.push(daysOfWeek[dayIndex]);
    }

    // Filter the data to include only the previous days
    const previousDaysData = previousDays.map((day) => {
      return data.find((d) => d.name === day);
    });

    return previousDaysData.reverse();
  }

  return (
    <div className="h-full">
      <div className="flex flex-row  items-center h-[100%]">
        <div className="h-[100%] w-[100%]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getPreviousDaysData(data)}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="name" />
              <YAxis />
              <Legend />
              <Bar dataKey="bookings" fill="#ffc658" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LineChartComponent;
