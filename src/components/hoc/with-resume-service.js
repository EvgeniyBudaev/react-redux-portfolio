import React from 'react';
import { ResumeServiceConsumer } from '../resume-server-context';

const withResumeService = () => (Wrapped) => {
  return (props) => {
    return (
      <ResumeServiceConsumer>
        {resumeService => {
          return <Wrapped {...props} resumeService={resumeService} />
        }}
      </ResumeServiceConsumer>
    );
  };
};

export default withResumeService;
