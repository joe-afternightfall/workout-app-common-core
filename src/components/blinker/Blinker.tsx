import clsx from 'clsx';
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@keyframes flicker': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0.6,
      },
    },
    flicker: {
      width: '100%',
      animationName: '$flicker',
      animationDuration: '1000ms',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationTimingFunction: 'ease-in-out',
    },
    withAnimation: ({ shouldBlink }: { shouldBlink: boolean }) => ({
      animationPlayState: shouldBlink ? 'running' : 'paused',
    }),
  })
);

const Blinker = (props: BlinkerProps): JSX.Element => {
  const { flicker, withAnimation } = useStyles({
    shouldBlink: props.shouldBlink,
  });

  return <div className={clsx(flicker, withAnimation)}>{props.component}</div>;
};

interface BlinkerProps {
  shouldBlink: boolean;
  component: JSX.Element;
}

export default Blinker;
