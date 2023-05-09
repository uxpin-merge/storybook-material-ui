import React from 'react';
import PropTypes from 'prop-types';
import MaterialBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function Breadcrumbs({ items }) {
  const lastIndex = items.length - 1;

  return (
    <MaterialBreadcrumbs aria-label="breadcrumb">
      {items.map((item, i) => {
        if (i === lastIndex) {
          return (
            <Typography color='textPrimary' >
              {item}
            </Typography>
          )
        } else {
          return (
            <Link color='inherit' href="/" onClick={handleClick} >
              {item}
            </Link>
          )
        }
      })}
    </MaterialBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}

Breadcrumbs.defaultProps = {
  items: ['Page 1', 'Page 2', 'Page 3'],
}
