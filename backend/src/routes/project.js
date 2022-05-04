const express = require("express");
const router = express.Router();

const ProjectController = require("../controllers/ProjectController");
const ClickController = require("../controllers/ClickController");
const auth = require("../middlewares/auth");

router.get("/", ProjectController.index);
router.get("/:id", ProjectController.show);
router.post("/", auth, ProjectController.store);
router.put("/:id", auth, ProjectController.update);
router.delete("/:id", auth, ProjectController.destroy);

router.post("/click/:id", ClickController.increment);

module.exports = router;
