import React, { useEffect, useState } from 'react';
import '../../../css/style.scss';
import Files from './Files';
import Programmer from './Programmer';
import Creator from './Creator';
import Others from './Others';

function PortfolioFiles({
  jobType,
  addPicture,
  deletePicture,
  files
}) {
  const [upload, setUpload] = useState(false);

  function toggleUpload() {
    setUpload(!upload);
  }

  switch (jobType) {
    case '1': {
      return (
        <Files
          jobType={jobType}
          files={files}
          addPicture={addPicture}
          deletePicture={deletePicture}
          upload={upload}
          toggleUpload={toggleUpload}
        />
      );
    }
    case '2': {
      return (
        <Programmer />
      );
    }
    case '3': {
      return (
        <Files
          jobType={jobType}
          files={files}
          addPicture={addPicture}
          deletePicture={deletePicture}
          upload={upload}
          toggleUpload={toggleUpload}
        />
      );
    }
    case '4': {
      return (
        <Files
          jobType={jobType}
          files={files}
          addPicture={addPicture}
          deletePicture={deletePicture}
          upload={upload}
          toggleUpload={toggleUpload}
        />
      );
    }
    case '5': {
      return (
        <Files
          jobType={jobType}
          files={files}
          addPicture={addPicture}
          deletePicture={deletePicture}
          upload={upload}
          toggleUpload={toggleUpload}
        />
      );
    }
    case '6': {
      return (
        <Creator />
      );
    }
    case '7': {
      return (
        <Others />
      );
    }
  }
}

export default PortfolioFiles;
