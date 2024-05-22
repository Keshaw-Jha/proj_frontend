import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Row from "./components/table-bodyrow";
import TableHeaders from "./components/table-head";
import useAdminTable from "./hooks/useAdminTable";
import { HomeFormData } from "../../model/HomeformData";

export default function AdminTable() {
  const { ticketsData } = useAdminTable();
  const rows: HomeFormData[] = ticketsData as HomeFormData[];
  return (
    <TableContainer className="rounded-lg  bg-[#ffc9af]  bg-opacity-60 p-3 ">
      <Table aria-label="collapsible table">
        <TableHeaders />
        <TableBody>
          {rows.map((row) => (
            <Row key={row.ticketId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
