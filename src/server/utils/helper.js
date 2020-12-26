const axios = require('axios').default;

// This function will return all the jobs after fetching from the Zippia Jobs API
exports.fetchJobs = async () => {
  const allJobs = await axios.post('https://www.zippia.com/api/jobs/', {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  });

  return allJobs.data.jobs;
};

// This function checks if how many days has ellapsed from the given param to now
exports.calculateDays = (date) => Date.parse(Date()) - Date.parse(date);
