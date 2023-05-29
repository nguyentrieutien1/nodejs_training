const {
  create_student,
  get_student,
  update_student,
  delete_student,
} = require("../controllers/StudentController");

const router = require("express").Router();
// Create
router.post("/", create_student);
// Read
router.get("/", get_student);
// Update
router.put("/:id", update_student);
// Delete
router.delete("/:id", delete_student);

module.exports = router;
