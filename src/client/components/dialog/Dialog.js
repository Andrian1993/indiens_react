import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


function SimpleDialog({
  isOpen,
  title,
  content,
  firstAction,
  secondAction,
  close
}) {
  return (
    <Dialog open={isOpen} className="dialog">
      <DialogTitle className="dialog_title">
        {title}
      </DialogTitle>
      <DialogContent className="dialog_content">
        {content}
      </DialogContent>
      <DialogActions className="dialog_actions">
        <Button onClick={close} color="primary">
                Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SimpleDialog;
