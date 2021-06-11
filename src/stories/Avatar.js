import React from 'react';
import MaterialAvatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";

export function Avatar({ name, image }) {
  return (<MaterialAvatar alt={name} src={image} />);
}

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

Avatar.defaultProps = {
  image: 'https://uxpin.s3.amazonaws.com/faces/44.png',
  name: 'Remy Sharp',
};
