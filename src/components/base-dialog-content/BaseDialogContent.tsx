import React from 'react';
import { DialogActions, DialogContent } from '@material-ui/core';
import BaseDialogTitle from '../base-dialog-title/BaseDialogTitle';

export default function NightfallDialogContent(
  props: NightfallDialogContentProps
): JSX.Element {
  const { dialogContent, title, closeClickHandler, dialogActions } = props;

  return (
    <>
      <BaseDialogTitle title={title} closeClickHandler={closeClickHandler} />

      <DialogContent dividers>{dialogContent}</DialogContent>

      <DialogActions>{dialogActions}</DialogActions>
    </>
  );
}

interface NightfallDialogContentProps {
  title: string;
  dialogContent: JSX.Element;
  dialogActions: JSX.Element;
  closeClickHandler: () => void;
}
