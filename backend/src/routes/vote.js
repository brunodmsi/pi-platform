const express = require('express')
const router = express.Router()

const VoteController = require('../controllers/VoteController')

const auth = require('../middlewares/auth');

router.get("/", auth, VoteController.index);
router.get("/:projectId", auth, VoteController.show);
router.post("/", VoteController.store);

module.exports = router;
