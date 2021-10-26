import React from 'react';
import Step from '@material-ui/core/Step';
import { WorkoutTimer } from '../../configs';
import Connector from './components/Connector';
import Stepper from '@material-ui/core/Stepper';
import CustomIcon from './components/CustomIcon';
import StepLabel from '@material-ui/core/StepLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

export default function CustomStepper({
  activeStep,
  timers,
}: CustomStepperProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {timers.map((timer: WorkoutTimer, index: number) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomIcon}>
              {timer.stepperTitle}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export interface CustomStepperProps {
  timers: WorkoutTimer[];
  activeStep: number;
}
