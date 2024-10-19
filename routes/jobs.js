const express = require('express')
const router = express.Router()

const {getAllJobs, getJob, createJob, updatedJob, deleteJob} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getJob).patch(updatedJob).delete(deleteJob)

module.exports = router