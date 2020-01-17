import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Minus from '../../../img/minus.png';

function Files({
  jobType,
  addPicture,
  deletePicture,
  files,
  upload,
  toggleUpload
}) {
  const data = { type: 'application/pdf' };
  switch (jobType) {
    case '1': {
      data.title = 'Upload your portfolio(.pdf type)';
      break;
    }
    case '3': {
      data.title = 'Portfolio picture (no more than 10 sheets / size 1070 x 1500 / .jpg, .png type)';
      data.type = 'image/*';
      break;
    }
    case '4': {
      data.title = 'Upload audiofile from you portfolio(.mp3 type)';
      data.type = 'audio/*';
      break;
    }
    case '5': {
      data.title = 'Upload Prolog or Synopsis File(.pdf type)';
      break;
    }
  }

  return (
    <div className="photo">
      <Row className="file-label">
        <Col>
          <label className="input_label">{data.title}</label>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormControlLabel
            control={(
              <Checkbox
                checked={upload}
                onChange={toggleUpload}
                value="checkedB"
                color="primary"
              />
                                )}
            label="Upload later"
          />
        </Col>
      </Row>

      {upload
        ? null
        : (
          <React.Fragment>
            {jobType === '3'
              ? (
                <Row>
                  <Col>
                    <div className="product_img">
                      {files.map((file, index) => (
                        <div key={index}>
                          <img
                            className=""
                            alt="img"
                            src={file.picUrl}
                          />
                          <span onClick={() => deletePicture(index)}>button</span>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              ) : (
                files.map((file, index) => (
                  <Row className="clip_list" key={index}>
                    <Col>
                      {file.name}
                      {' '}
                      {file.$errorParam}
                    </Col>
                    <Col md="auto">
                      <Button variant="contained" onClick={() => deletePicture(index)} className="input_add_btn gray"><img src={Minus} alt="minus" /></Button>
                    </Col>
                  </Row>
                ))
              )
            }


            <Row className="upload_button">
              <Col>
                <Button
                  variant="contained"
                  component="label"
                >
                                            Upload File
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    multiple
                    accept={data.type}
                    onChange={addPicture}
                  />
                </Button>
              </Col>
            </Row>
          </React.Fragment>
        )
                    }
    </div>
  );
}

export default Files;
