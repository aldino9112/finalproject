const router = require('express').Router();
const HomeController = require('../controllers/homeController')
const itemRoutes = require('./ItemRoutes')
const checkLogin = require('../middleware/checkLogin')


router.get('/login', HomeController.loginForm)
router.post('/login', HomeController.login)

router.get('/register', HomeController.registerForm)
router.post('/register', HomeController.register)

router.use(checkLogin)

router.get('/home/:id/profile/', HomeController.profile)
router.get('/home/:id/profile/edit', HomeController.editForm)
router.post('/home/:id/profile/edit', HomeController.edit)
router.get('/logout', HomeController.logout)



router.use('/items', itemRoutes)


module.exports = router