const {
  Create_Teacher,
  Get_Teacher,
  Update_Teacher,
  Delete_Teacher,
} = require("../controllers/TeacherController");

const router = require("express").Router();

// Create
router.post("/", Create_Teacher);
// Read
router.get("/", Get_Teacher);
// Update
router.put("/:id", Update_Teacher);
// Delete
router.delete("/:id", Delete_Teacher);

module.exports = router;
