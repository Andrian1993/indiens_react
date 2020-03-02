import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Common from '../../modules/Common';

function Programmer({
  langCheck,
  langEtc,
  langEtcChange,
  checkboxClick
}) {
  return (
    <div className="input_area mt30" layout="column">
      <label className="label_txt">Languages</label>

      <FormGroup row>
        {Common.userLang().map(lang => (
          <FormControlLabel
            key={lang.LNG}
            control={(
              <Checkbox
                checked={langCheck[lang.LNG]}
                onChange={checkboxClick(lang.LNG)}
                value="checkedB"
                color="primary"
              />
                  )}
            label={lang.LNG_NAME}
          />
        ))}
        <TextField disabled={!(langCheck[5])} id="otherLanguage" name="langEtc" value={langEtc} onChange={langEtcChange} />
      </FormGroup>
    </div>
  );
}

export default Programmer;
