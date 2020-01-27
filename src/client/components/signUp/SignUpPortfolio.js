import React, {Component, useEffect, useState} from 'react';
import '../../css/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, TextField } from '@material-ui/core';

import Sign from '../modules/Sign';
import Step3 from '../../img/join/step3.png';
import Plus from '../../img/plus.png';
import Minus from '../../img/minus.png';
import Common from '../modules/Common';
import PortfolioFiles from './Portfolio/PortfolioFiles';
import SimpleDialog from '../dialog/Dialog';

function SignUpPortfolio({
  history,
  portfolio,
  addProject,
  deleteProject,
  changeProject,
  changeExperience,
  changeCheckbox,
  check,
  saveUser,
  signed,
  signUser,
  goBack,
  goNext
}) {
  const [errors, setErrors] = useState({ projects: [] });
  const [files, setFiles] = useState([]);

  const experience = Common.userExperience();

  function getError(index, key) {
    if (errors.projects[index] && errors.projects[index][key]) {
      return errors.projects[index][key];
    }
    return '';
  }

  function validateCheck(data) {
    const payload = {
      errors: {
        projects: []
      },
      success: false
    };

    function checkObject() {
      let result = true;
      payload.errors.projects.map((item, index) => {
        for (const key in item) {
          if (item[key]) {
            result = false;
          }
        }
      });
      return result;
    }

    if (!data.experience) {
      payload.errors.experience = 'Please select experience.';
    }

    if (!check && data.projects) {
      let errorObj = {};

      data.projects.map((project, index) => {
        if (!project.type) {
          errorObj.type = 'Please select project type';
        }
        if (!project.name) {
          errorObj.name = 'Please provide project name';
        }
        if (project.type == '2' && !project.role) {
          errorObj.role = 'Please provide project role';
        }

        payload.errors.projects = [...payload.errors.projects, errorObj];
        errorObj = {};
      });
    }

    payload.success = Object.entries(payload.errors).length === 1 && checkObject();

    return payload;
  }

  function dialogSwitch() {
    signUser();
    if (signed) {
      Sign.deleteUserInfo();
      history.push('/');
    }
  }

  function handleClick() {
    const payload = validateCheck(portfolio);
    if (payload.success) {
      setErrors({ projects: [] });
      saveUser((err, id) => {
        if (err) {
          setErrors({ ...errors, ...err });
        } else if (files.length > 0) {
          const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append('file', file.file);
            formData.append('id', id);
            return axios.post('/api/TB_PORTFOLIO/upload', formData, {
              headers: { 'Content-Type': 'multipart/form-data' }
            }).then((response) => {
              const { data } = response;
              console.log(data);
            });
          });
          axios.all(uploaders).then(() => {
            dialogSwitch();
          });
        }
      });
    } else {
      const errorsObj = payload.errors;
      setErrors(errorsObj);
    }
  }

  function addPicture(event) {
    const jobType = Sign.getUserType();
    const newPics = [];
    const pictures = event.target.files;

    if (jobType === '3') {
      Object.keys(pictures).map((key, i) => {
        const picUrl = URL.createObjectURL(pictures[key]);
        newPics.push({ file: pictures[key], picUrl });
      });
    } else {
      Object.keys(pictures).map((key, i) => {
        newPics.push(pictures[key]);
      });
    }
    setFiles(files.concat(newPics));

    // input same pictures multiple times
    event.target.value = '';
  }

  function deletePicture(index) {
    const filesCopy = [...files];
    filesCopy.splice(index, 1);
    setFiles([...filesCopy]);
  }

  return (
    <div className="join_form">
      <SimpleDialog
        isOpen={signed}
        content="You signed up for Indians. Please log in."
        title="Indiens"
        close={dialogSwitch}
      />
      <div className="join_title pb80">
        <h3>
Now let's check some things you can do
          <br />
as an Indian.
        </h3>
        <img src={Step3} alt="step3" />
        <p>
                    STEP 3
          <br />
                    Register your portfolio
        </p>
      </div>

      <Container className="portfolio">
        <Row className="input-container">
          <Col md={3}>
            <FormControl className="experience" error={!!errors.experience}>
              <InputLabel id="Experience">Experience</InputLabel>
              <Select
                labelId="Experience"
                id="experience-select"
                name="experience"
                value={portfolio.experience}
                onChange={changeExperience}
                defaultValue="Select"
              >
                {experience.map((data, index) => (
                  <MenuItem key={data.id} value={data.id}>{data.title}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.experience}</FormHelperText>
            </FormControl>
          </Col>
          <Col />
        </Row>

        <Row>
          <Col className="label_plus">
            <label className="label_txt">Game developed or participated</label>
            {
                            check ? null
                              : <Button variant="contained" className="input_add_btn" onClick={addProject}><img src={Plus} alt="plus" /></Button>
                        }
          </Col>
        </Row>

        <Row>
          <Col>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={changeCheckbox}
                  value="checkedB"
                  color="primary"
                />
                              )}
              label="Later"
            />
          </Col>
        </Row>

        {
                    check ? null
                      : (
                        <React.Fragment>
                          {portfolio.projects.map((project, index) => (
                            <Row key={index} className="project-info">
                              <Col className="project-creator" md={3}>
                                <FormControl error={!!getError(index, 'type')}>
                                  <InputLabel id="ProjectType">Project type</InputLabel>
                                  <Select
                                    labelId="ProjectType"
                                    id="experience-select"
                                    name="type"
                                    value={project.type}
                                    onChange={event => changeProject(event, index)}
                                  >
                                    <MenuItem value={1}>Personal</MenuItem>
                                    <MenuItem value={2}>Participated</MenuItem>
                                  </Select>
                                  {errors.projects[index]
                                    ? <FormHelperText>{getError(index, 'type')}</FormHelperText> : null
                                  }
                                </FormControl>
                              </Col>
                              <Col>
                                <FormControl>
                                  <TextField id="projName" label="Name" name="name" value={project.name} onChange={event => changeProject(event, index)} error={!!getError(index, 'name')} helperText={getError(index, 'name')} />
                                </FormControl>
                              </Col>
                              {
                                            project.type === 2
                                              ? (
                                                <Col>
                                                  <FormControl>
                                                    <TextField id="projRole" label="Role" name="role" value={project.role} onChange={event => changeProject(event, index)} error={!!getError(index, 'role')} helperText={getError(index, 'role')} />
                                                  </FormControl>
                                                </Col>
                                              )
                                              : null
                                        }

                              <Col className="minus-button" md="auto">
                                <Button variant="contained" className="input_add_btn gray" onClick={event => deleteProject(event, index)}><img src={Minus} alt="minus" /></Button>
                              </Col>
                            </Row>
                          ))
                            }
                        </React.Fragment>
                      )
                }

        <PortfolioFiles
          jobType={Sign.getUserType()}
          files={files}
          addPicture={addPicture}
          deletePicture={deletePicture}
        />


      </Container>


      <div layout="row" className="join_btn type">
        <Button variant="contained" className="gray" style={{ width: '20%' }} onClick={goBack}>
                    Back
        </Button>
        <Button variant="contained" style={{ width: '70%' }} onClick={handleClick}>
                    Sign Up
        </Button>
      </div>
      <div />
    </div>
  );
}

export default SignUpPortfolio;
