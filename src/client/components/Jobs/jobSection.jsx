import React from 'react';

// Job item lists
import JobItem from './jobItem';

const jobSection = ({ currentDisplay, jobs }) => (
  <section className='job-section'>
    <div className='job-header'>
      <h3>Displaying jobs:</h3>
      <p>{currentDisplay}</p>
    </div>
    <div className='all-jobs'>
      {jobs.map(({ jobTitle, companyName, shortDesc }, i) => (
        <JobItem
          jobTitle={jobTitle}
          companyName={companyName}
          shortDesc={shortDesc}
          key={i}
          id={i}
        />
      ))}
    </div>
  </section>
);

export default jobSection;
