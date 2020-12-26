import React from 'react';

// SVG icons
import Case from '../assets/img/case.svg';
import Calendar from '../assets/img/calendar.svg';
import Company from '../assets/img/company.svg';

const buttonSection = ({
  currentDisplay,
  fetchJobs,
  fetchByWeek,
  fetchByCompany,
}) => (
  <section className='button-section'>
    <h3>Search by:</h3>

    <div className='buttons'>
      <button
        className={`btn btn-primary ${
          currentDisplay === 'All Jobs' && 'active'
        } `}
        onClick={() => fetchJobs()}
      >
        <img src={Case} alt='Briefcase' /> All jobs
      </button>
      <button
        className={`btn btn-secondary ${
          currentDisplay === 'Past 7 days' && 'active'
        } `}
        onClick={() => fetchByWeek()}
      >
        <img src={Calendar} alt='Calendar' /> Past 7 days
      </button>
      <button
        className={`btn btn-tertiary ${
          currentDisplay === 'Company name' && 'active'
        } `}
        onClick={() => fetchByCompany()}
      >
        <img src={Company} alt='Company' />
        Company name
      </button>
    </div>
  </section>
);

export default buttonSection;
