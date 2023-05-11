import React from 'react';
import MaterialStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from "prop-types";

export function Stepper({ activeStep, steps, orientation }) {

  return (
    <MaterialStepper orientation={orientation} activeStep={activeStep}>
      {steps.map((label, _index) => {
        const stepProps = {};
        if (activeStep < label) {
          stepProps.completed = true;
        }

        return (
          <Step key={label} {...stepProps}>
            <StepLabel >{label}</StepLabel>
          </Step>
        );
      })}
    </MaterialStepper>
  );
}

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};
