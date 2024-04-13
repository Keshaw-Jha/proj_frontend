import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { convertUtcToIst } from "../../../components/common-functions";
import { HomeFormData } from "../../../model/HomeformData";

function custTableCell(value: string | number, param?: boolean) {
  return (
    <TableCell
      align={param ? "left" : "right"}
      className="!text-white !text-lg  !font-semibold">
      {value}
    </TableCell>
  );
}

function Row(props: { row: Omit<HomeFormData, "qr"> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "0" } }}
        className="shadow-xl rounded-lg hover:bg-[#FF204E] hover:bg-opacity-25 ">
        <TableCell className="!text-white">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {custTableCell(row.name, true)}
        {custTableCell(row.phone)}
        {row.entryAt && custTableCell(convertUtcToIst(row.entryAt))}
        {row.exitAt && custTableCell(convertUtcToIst(row.exitAt))}
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: 0 } }}>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: "#A0153E",
            borderRadius: "10px",
            opacity: 0.8,
          }}
          colSpan={Object.keys(row).length + 1}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="text-white !font-semibold">
                Additional Info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-white !text-lg !font-semibold">
                      Email
                    </TableCell>
                    <TableCell className="!text-white !text-lg !font-semibold">
                      Aadhaar
                    </TableCell>
                    <TableCell
                      align="right"
                      className="!text-white !text-lg !font-semibold">
                      Created At
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      className="!text-white !border-b-0 !text-lg !font-semibold">
                      {row.email}
                    </TableCell>
                    <TableCell className="!text-white !border-b-0 !text-lg !font-semibold">
                      {row.adhaar}
                    </TableCell>
                    <TableCell
                      align="right"
                      className="!text-white !border-b-0 !text-lg !font-semibold">
                      {convertUtcToIst(row.createdAt as Date)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
