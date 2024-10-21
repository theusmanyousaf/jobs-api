const Job = require('../models/Job')
const StatusCodes = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = (req,res) => {
    res.send("get all jobs")
}

const getJob = (req,res) => {
    res.send("get job")
}

const createJob = (req,res) => {
    
    res.send(req.body)
}

const updatedJob = (req,res) => {
    res.send("updated jobs")
}

const deleteJob = (req,res) => {
    res.send("delete jobs")
}



module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updatedJob,
    deleteJob
}