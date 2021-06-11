import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from "prop-types";


export function Tabs({ centered, indicatorType, textType, tabs, textColor }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MaterialTabs
      value={value}
      onChange={handleChange}
      indicatorColor={indicatorType}
      textColor={textType}
      centered={centered}
    >
      {tabs.map((tab) => (
        <Tab label={tab} />
      ))}
    </MaterialTabs>
  );
}

Tabs.propTypes = {
  centered: PropTypes.bool,
  indicatorType: PropTypes.oneOf(['primary', 'secondary', 'default']),
  textType: PropTypes.oneOf(['primary', 'secondary', 'default']),
  tabs: PropTypes.arrayOf(PropTypes.string),
};

Tabs.defaultProps = {
  centered: true,
  indicatorType: 'primary',
  textType: 'primary',
  tabs: ['Item One', 'Item Two', 'Item Three']
};

