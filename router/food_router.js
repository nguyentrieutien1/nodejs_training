const router = require("express").Router();
const {
    create_food,
    get_food,
    update_food,
    delete_food
} = require('../controller/foodController')
router.post("/", create_food);
router.get("/", get_food);
router.put("/", update_food);
router.delete("/", delete_food);
module.exports = router;
