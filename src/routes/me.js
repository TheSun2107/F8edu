const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')


router.get('/stored-courses', meController.storedCourses)
router.get('/trash', meController.trash)
router.post('/handle-form-actions', meController.handleFormAction)

module.exports = router