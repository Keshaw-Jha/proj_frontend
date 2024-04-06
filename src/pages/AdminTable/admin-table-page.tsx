import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Row from "./components/table-bodyrow";
import TableHeaders from "./components/table-head";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    details: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const rows = [
  createData("Ramesh shukla", 3453345345, 6.0, 24),
  createData("john doe", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

export default function AdminTable() {
  return (
    <TableContainer className="rounded-lg  bg-[#ffc9af]  bg-opacity-60 p-3">
      <Table aria-label="collapsible table" className="">
        <TableHeaders />
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
