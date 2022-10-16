import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { STRING, NUMBERS } from "../../config/index.js";

class LocationTable extends Component {
  render() {
    const { locationList } = this.props;
    return (
      <>
        <Typography variant="h5">{STRING.HISTORY}</Typography>
        <TableContainer component={Paper} style={{ maxHeight: NUMBERS.TABLE_MAXHEIGHT }}>
          <Table sx={{ minWidth: NUMBERS.TABLE_MINWIDTH }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">{STRING.LOCATION}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationList.map((data, i) => (
                <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {++i}
                  </TableCell>
                  <TableCell align="right">{data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
export default LocationTable;
