const itemController = require("../controllers/ItemController")
const router = require("express").Router()
const checkLogin = require('../middleware/checkLogin')


router.use(checkLogin)
router.get('/',itemController.getItem)
router.get('/add',itemController.addItem)
router.post('/add',itemController.submitAddItem)
router.get('/:id/edit',itemController.editItem)
router.post('/:id/edit',itemController.submitEditItem)
router.get('/:id/delete',itemController.deleteItem)

module.exports = router