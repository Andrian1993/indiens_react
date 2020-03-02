import React from 'react';
import { FormControlLabel, FormGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Common from '../../modules/Common';

function Creator({
  link,
  linkChange
}) {
  return (
    <div className="input_area mt30" layout="column">
      <label className="label_txt">YouTube or Blog link</label>
      <FormGroup row>
        <TextField style={{width: '100%'}} id="link" name="link" value={link} onChange={linkChange} />
      </FormGroup>
    </div>
  );
}

export default Creator;
