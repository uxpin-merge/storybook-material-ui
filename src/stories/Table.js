import React from 'react';
import MaterialTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

export function Table({ rows, headers, padding, size }) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable size={size} padding={padding}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell align={header.align}>{header.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

Table.propTypes = {
  headers: PropTypes.object,
  rows: PropTypes.object,
  padding: PropTypes.oneOf(['none', 'normal']),
  size: PropTypes.oneOf(['small', 'medium']),
};
