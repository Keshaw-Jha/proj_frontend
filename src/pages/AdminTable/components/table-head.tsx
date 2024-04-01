import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeadLabels: {
  label: string;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
}[] = [
  {
    label: "Dessert (100g serving)",
    align: "left",
  },
  {
    label: "Calories",
    align: "right",
  },
  {
    label: "Fat (g)",
    align: "right",
  },
  {
    label: "Carbs (g)",
    align: "right",
  },
  {
    label: "Protein (g)",
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
