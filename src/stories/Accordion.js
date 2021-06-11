import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAccordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from '@material-ui/core/Icon';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const head  = document.getElementsByTagName('head')[0];
const link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
head.appendChild(link);


export function Accordion({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {data.map(({ title, disabled, description, text }, index) => (
        <MaterialAccordion disabled={!!disabled} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<MaterialIcon>expand_more</MaterialIcon>}
          >
            <Typography className={classes.heading}>{ title }</Typography>
            <Typography className={classes.secondaryHeading}>{ description }</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              { text }
            </Typography>
          </AccordionDetails>
        </MaterialAccordion>
      ))}
    </div>
  );
}


Accordion.propTypes = {
  data: PropTypes.object,
};

Accordion.defaultProps = {
  data: [{
    title: 'General settings',
    description: 'I am an accordion',
    text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
      'maximus est, id dignissim quam.'
  }, {
    title: 'Advanced settings',
    description: 'I am an accordion2',
    text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
      'maximus est, id dignissim quam.'
  },  {
    title: 'Advanced settings2',
    disabled: true,
    description: 'I am an accordion2',
    text: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n' +
      'maximus est, id dignissim quam.'
  }],
};
