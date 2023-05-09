import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const AvatarGroup = ({ avatars }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {avatars.map(({ name, image }) => (
        <Avatar alt={name} src={image} />
      ))}
    </div>
  );
};

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf({ name: PropTypes.string, image: PropTypes.string }),
};

AvatarGroup.defaultProps = {
  avatars: [{
    image: 'https://uxpin.s3.amazonaws.com/faces/44.png',
    name: 'Remy Sharp',
  },{
    image: '',
    name: 'John Doe',
  }],
};
