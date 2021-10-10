import React from 'react';
import { Fade, Tooltip } from '@material-ui/core';

export default function NightfallTooltip({
  component,
  title,
  placement,
}: NightfallTooltipProps): JSX.Element {
  return (
    <Tooltip
      arrow
      interactive
      enterDelay={500}
      leaveDelay={200}
      placement={placement}
      title={title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      {component}
    </Tooltip>
  );
}

export interface NightfallTooltipProps {
  component: JSX.Element;
  title: string;
  placement:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}
