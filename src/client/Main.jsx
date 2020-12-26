import React, { useState, useEffect } from 'react';

import axios from 'axios';

// SVG image for added style
import Sitting from './assets/img/sitting.svg';

/*
 * Components
 */

// Title for the page
import Title from './components/titleSection';

// Buttons for querying
import ButtonSection from './components/buttonSection';

// Jobs section to display all the jobs
import JobSection from './components/Jobs/jobSection';

// Loader
import Loader from './components/loader';

const main = () => {
  // Initialize state for the jobs
  const [jobState, setJobState] = useState({
    jobs: [],
    currentDisplay: '',
    isLoading: false,
  });

  //  Extract the values from the state
  const { jobs, currentDisplay, isLoading } = jobState;

  // This functions fetches the first 10 jobs
  const fetchJobs = async () => {
    try {
      setJobState({ ...jobState, isLoading: true });
      const allJobs = await axios.get('/api/jobs/');

      setJobState({
        ...jobState,
        isLoading: false,
        jobs: allJobs.data.jobs,
        currentDisplay: 'All Jobs',
      });
    } catch (e) {
      console.log(e);
    }
  };

  // This function fetches the data in the past 7 days
  const fetchByWeek = async () => {
    try {
      setJobState({ ...jobState, isLoading: true });
      const jobsByWeekly = await axios.get('/api/jobs/weekly');

      setJobState({
        ...jobState,
        isLoading: false,
        jobs: jobsByWeekly.data.jobs,
        currentDisplay: 'Past 7 days',
      });
    } catch (e) {
      console.log(e);
    }
  };

  // This function fetches the data by Company name
  const fetchByCompany = async () => {
    try {
      setJobState({ ...jobState, isLoading: true });
      const jobsByCompany = await axios.get('/api/jobs/company');

      setJobState({
        ...jobState,
        isLoading: false,
        jobs: jobsByCompany.data.jobs,
        currentDisplay: 'Company name',
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Fetch 10 Jobs on Mount
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='main'>
      <Title />
      <ButtonSection
        currentDisplay={currentDisplay}
        fetchJobs={fetchJobs}
        fetchByWeek={fetchByWeek}
        fetchByCompany={fetchByCompany}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <JobSection jobs={jobs} currentDisplay={currentDisplay} />
      )}

      <img src={Sitting} alt='person sitting' className='svg-image-person' />
    </div>
  );
};

export default main;
