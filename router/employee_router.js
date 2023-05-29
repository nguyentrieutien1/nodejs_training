const {
    create_employee,
    get_employee,
    update_employee,
    delete_employee
} = require('../controller/employeeController')
const router = require('express').Router()

router.post('/',create_employee)
router.get('/',get_employee)
router.put('/',update_employee)
router.delete('/',delete_employee)

module.exports = router