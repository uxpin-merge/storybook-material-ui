import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export function List({ items }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Fragment>
      <MaterialList component="nav" aria-label="main mailbox folders">
        {items.map((item, index) => (
          <ListItem
            button
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </MaterialList>
    </Fragment>
  );
}

List.prototype = {
  items: PropTypes.arrayOf(PropTypes.string)
}

List.defaultProps = {
  items: ['Item 1', 'Item 2', 'Item 3']
}
