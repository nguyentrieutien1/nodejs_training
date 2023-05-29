const {
    create_khu,
    get_khu,
    update_khu,
    delete_khu
} = require('../controller/khuController')
const router = require('express').Router()
router.post('/',create_khu)
router.get('/',get_khu)
router.put('/',update_khu)
router.delete('/',delete_khu)
module.exports = router