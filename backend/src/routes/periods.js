const express = require("express");
const router = express.Router();

const PeriodController = require("../controllers/PeriodController");
const auth = require("../middlewares/auth");

router.get("/", PeriodController.index);
router.get("/:id", PeriodController.show);
router.post("/", auth, PeriodController.store);
router.put("/:id", auth, PeriodController.update);
router.delete("/:id", auth, PeriodController.destroy);

module.exports = router;
