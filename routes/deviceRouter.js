const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.put('/:id', deviceController.updateDevice)
router.delete('/:id',checkRole('ADMIN'), deviceController.deleteDevice)

module.exports = router