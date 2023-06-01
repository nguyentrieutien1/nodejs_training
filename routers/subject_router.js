const {
  create_subject,
  get_subject,
  update_subject,
  delete_subject,
} = require("../controllers/SubjectController");

const router = require("express").Router();
// Create
router.post("/", create_subject);
// Read
router.get("/", get_subject);
// Update
router.put("/:id", update_subject);
// Delete
router.delete("/:id", delete_subject);

module.exports = router;
