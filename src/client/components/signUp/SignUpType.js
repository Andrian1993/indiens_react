import React, { Component, useState } from 'react';
import '../../css/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Step2 from '../../img/join/step2.png';
import Sign from '../modules/Sign';
import Common from '../modules/Common';

function SignUpType({
  userType,
  handleChange,
  goBack,
  goNext
}) {
  const types = Common.jobTypes();

  const [errors, setErrors] = useState({});

  function validateCheck(data) {
    const payload = {
      errors: {},
      success: false
    };

    if (!data) {
      payload.errors.type = 'Please select a job type.';
    }

    payload.success = Object.entries(payload.errors).length === 0 && payload.errors.constructor === Object;

    return payload;
  }

  function handleClick() {
    const payload = validateCheck(userType);
    if (payload.success) {
      setErrors({});
      Sign.saveUserType(userType);
      goNext('portfolio');
    } else {
      const errorsObj = payload.errors;
      setErrors(errorsObj);
    }
  }

  return (
    <div className="join_form">
      <div className="join_title pb80">
        <h3>
Now let's check some things you can do
          <br />
as an Indian.
        </h3>
        <img src={Step2} alt="step1" />
        <p>
                    STEP 2
          <br />
                    Select your job
        </p>
      </div>

      <div className="jobs">
        <RadioGroup className="signtype-radio" value={userType} aria-label="gender" name="gender1" onChange={handleChange}>
          {types.map((job, index) => (
            <FormControlLabel
              key={index}
              className={`formControl ${userType === (index + 1).toString() ? 'checked' : ''}`}
              value={(index + 1).toString()}
              control={
                <Radio />}
              label={(
                <React.Fragment>
                  <a>
                    <img src={job.imgUrl} alt={`job${index}`} />
                    {job.name}
                  </a>
                </React.Fragment>
                                  )}
            />
          ))}
        </RadioGroup>

        <div className="error-message">{errors.type}</div>
      </div>


      <div layout="row" className="join_btn type">
        <Button variant="contained" className="gray" style={{ width: '20%' }} onClick={goBack}>
                   Back
        </Button>
        <Button variant="contained" style={{ width: '70%' }} onClick={handleClick}>
                    Next
        </Button>
      </div>
    </div>
  );
}

export default SignUpType;
