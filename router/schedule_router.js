const {
    create_schedule,
    get_schedule,
    update_schedule,
    delete_schedule
} = require('../controller/scheduleController')
const router = require('express').Router()
router.post('/',create_schedule)
router.get('/',get_schedule)
router.put('/',update_schedule)
router.delete('/',delete_schedule)
module.exports = router