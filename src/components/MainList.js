import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";

function MainList(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <>
      <TableContainer sx={{ maxHeight: 850 }} component={Paper}>
        <Table stickyHeader aria-label="sticky-table">
          <TableHead>
            <TableRow>
              {props.headers.map((header) => (
                <StyledTableCell key={header}>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {item.data.map((row) => (
                  <TableCell key={row.id}>{row}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MainList;
