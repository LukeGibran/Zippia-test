const express = require('express');

// Import the functionalities from the controllers
const {
  getJobs,
  getJobsLastSevenDays,
  getJobsByCompany,
} = require('../controllers/jobs');

// Initialize the router
const router = express.Router();

router.route('/').get(getJobs);
router.route('/weekly').get(getJobsLastSevenDays);
router.route('/company').get(getJobsByCompany);

module.exports = router;
