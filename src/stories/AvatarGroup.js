import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import AvatarGroupM from '@mui/material/AvatarGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const AvatarGroup = ({ avatars, spacing, variant }) => {
  const classes = useStyles();

  return (
    <AvatarGroupM variant={variant} spacing={spacing} className={classes.root}>
      {avatars.map(({ name, image }, index) => (
        <Avatar key={index} alt={name} src={image} />
      ))}
    </AvatarGroupM>
  );
};

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, image: PropTypes.string })),
  spacing: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
};
