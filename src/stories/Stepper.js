import React from 'react';
import MaterialStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PropTypes from "prop-types";

export function Stepper({ activeStep, steps }) {

  return (
    <MaterialStepper activeStep={activeStep}>
      {steps.map((label, index) => {
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
};

Stepper.defaultProps = {
  activeStep: 0,
  steps: ['Step 1', 'Step 2', 'Step 3']
};
