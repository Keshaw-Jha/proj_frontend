import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeadLabels: {
  label: string;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
}[] = [
  {
    label: "Name",
    align: "left",
  },
  {
    label: "Phone",
    align: "right",
  },
  {
    label: "Entry",
    align: "right",
  },
  {
    label: "Exit",
    align: "right",
  },
];

function TableHeaders() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {TableHeadLabels.map((item, index) => (
          <TableCell
            key={index}
            align={item.align}
            className="!text-gray-200 !font-extrabold !text-xl">
            {item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeaders;
