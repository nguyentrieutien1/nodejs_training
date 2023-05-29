const {
  create_classsche,
  get_classsche,
  update_classsche,
  delete_classsche,
} = require("../controllers/ClassSchedulingController");

const router = require("express").Router();
// Create
router.post("/", create_classsche);
// Read
router.get("/", get_classsche);
// Update
router.put("/:id", update_classsche);

// Delete
router.delete("/:id", delete_classsche);

module.exports = router;
