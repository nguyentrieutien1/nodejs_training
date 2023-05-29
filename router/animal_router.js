const router = require("express").Router();
const {
    create_animal,
    get_animal,
    update_animal,
    delete_animal
} = require('../controller/animalController')
router.post("/", create_animal);
router.get("/", get_animal);
router.put("/", update_animal);
router.delete("/", delete_animal);
module.exports = router;
