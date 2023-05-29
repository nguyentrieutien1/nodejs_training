const router = require("express").Router();
const bank_create_controller = require("./../controllers/BankController");
router.post("/bank_create", bank_create_controller);
module.exports = router;
