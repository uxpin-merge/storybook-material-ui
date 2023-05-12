import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MaterialList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export function List({ items, disabled, divider }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Fragment>
      <MaterialList component="nav" aria-label="main mailbox folders">
        {items.map((item, index) => (
          <ListItem key={index} divider={divider} onClick={() => handleListItemClick(index)}>
            <ListItemButton disabled={disabled} selected={selectedIndex === index}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </MaterialList>
    </Fragment>
  );
}

List.propTypes = {
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string),
  divider: PropTypes.bool,
};
