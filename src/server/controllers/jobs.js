// Import the helper function from the utilities
const { fetchJobs, calculateDays } = require('../utils/helper.js');

// This controller/function will be responsible for fetching all jobs and trimming it
// to 10 jobs as required
exports.getJobs = async (req, res, next) => {
  try {
    // Fetch the data from the Zippia Jobs API
    const allJobs = await fetchJobs();
    // Get the first 10 jobs
    const jobs = allJobs.slice(0, 10);

    res.status(200).json({ jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong, sorry!' });
  }
};

// This controller/function will be responsible for fetching the jobs within the past 7 days
exports.getJobsLastSevenDays = async (req, res, next) => {
  try {
    const dayLimit = 604800000; // 7 days in milliseconds

    // Fetch the data from the Zippia Jobs API
    const allJobs = await fetchJobs();

    // Filter the Jobs from the last 7 Days

    const datePosted = allJobs
      .sort(
        (a, b) =>
          calculateDays(a.OBJpostingDate) - calculateDays(b.OBJpostingDate)
      )
      .filter((job) => calculateDays(job.OBJpostingDate) < dayLimit)
      .slice(0, 10);

    res.status(200).json({ jobs: datePosted });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong, sorry!' });
  }
};

// This controller/function will be responsible for fetching the jobs by company name
exports.getJobsByCompany = async (req, res, next) => {
  try {
    // Fetch the data from the Zippia Jobs API
    const allJobs = await fetchJobs();

    const byCompany = allJobs
      .sort((a, b) => {
        if (a.companyName.toUpperCase() < b.companyName.toUpperCase()) {
          return -1;
        }
      })
      .slice(0, 10);

    res.status(200).json({ jobs: byCompany });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong, sorry!' });
  }
};
