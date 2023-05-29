const { Create_Class, Get_Class, Update_Class, Delete_Class, Get_ClassById } = require("../controllers/ClassController");

const router = require("express").Router();

// Create
router.post("/", Create_Class );
// Read
router.get("/", Get_Class);
// Read class by id
router.get("/:id", Get_ClassById);
// Update
router.put("/:id", Update_Class);
// Delete
router.delete("/:id", Delete_Class);

module.exports = router;
