const express = require('express')
const router = express.Router()

const VoteController = require('../controllers/VoteController')

router.get("/", VoteController.index);
router.get("/:projectId", VoteController.show);
router.post("/", VoteController.store);

module.exports = router;
