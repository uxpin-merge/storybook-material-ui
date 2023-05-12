import React from 'react';
import MaterialTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from "prop-types";

export function Tabs({ centered, indicatorColor, textColor, tabs, variant, orientation }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <MaterialTabs
      value={value}
      onChange={handleChange}
      indicatorColor={indicatorColor}
      textColor={textColor}
      centered={centered}
      variant={variant}
      orientation={orientation}
    >
      {tabs.map((tab) => (
        <Tab label={tab} />
      ))}
    </MaterialTabs>
  );
}

Tabs.propTypes = {
  centered: PropTypes.bool,
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
  textColor: PropTypes.oneOf(['primary', 'secondary']),
  tabs: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['fullWidth', 'scrollable', 'standard'])
};
