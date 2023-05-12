import React from 'react';
import { Table } from './Table';

export default {
  title: 'MaterialUI/Table',
  component: Table,
};

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

export const Primary = {
  args: {
    headers: exampleHeaders,
    rows: exampleRows,
    padding: 'normal',
    size: 'medium'
  }
}
