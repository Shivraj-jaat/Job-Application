const express = require("express")
const router = express.Router();
const { createJob, getAllJobs, getJobById, deleteJobs, updateJob } = require("../controllers/jobController");
const auth = require("../middlewares/auth")
const authorizeJob = require("../middlewares/authorizeJob")

router.post("/create", auth, createJob)
router.get("/getJobs", auth, getAllJobs)
router.get("/getSpecificJob/:id", auth, getJobById)
router.delete("/deleteJob/:id", auth, authorizeJob, deleteJobs)
router.put("/update/:id", auth, authorizeJob, updateJob)

module.exports = router;