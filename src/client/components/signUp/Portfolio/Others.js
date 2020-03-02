import React from 'react';
import { FormGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Others({
  portfolio,
  textFieldChange
}) {
  return (
    <div className="input_area mt30" layout="column">
      <label className="label_txt">Job</label>
      <FormGroup row>
        <TextField id="job" name="job" value={portfolio.job} onChange={textFieldChange} />
      </FormGroup>
      <label className="label_txt mt30">Link</label>
      <FormGroup row>
        <TextField style={{ width: '100%' }} id="link" name="link" value={portfolio.link} onChange={textFieldChange} />
      </FormGroup>
    </div>
  );
}

export default Others;
