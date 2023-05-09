import React from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const exampleRows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const exampleHeaders = [
  { name: 'Dessert (100g serving)', align: '', },
  { name: 'Calories', align: 'right', },
  { name: 'Fat (g)', align: 'right', },
  { name: 'Carbs (g)', align: 'right', },
  { name: 'Protein (g)', align: 'right', }
]

export function Table({ rows, headers }) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable>
        <TableHead>
          <TableRow>
            {headers.map((header) => ( <TableCell align={header.align}>{header.name}</TableCell> ))}
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
};

Table.defaultProps = {
  headers: exampleHeaders,
  rows: exampleRows,
};

