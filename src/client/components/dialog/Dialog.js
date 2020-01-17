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
      <DialogTitle className="title">
        {title}
      </DialogTitle>
      <DialogContent className="content">
        {content}
      </DialogContent>
      <DialogActions className="actions">
        <Button onClick={close} color="primary">
                Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SimpleDialog;
