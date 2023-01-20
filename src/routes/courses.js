const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')


router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/edit/:id', courseController.edit)
router.post('/handle-form-actions', courseController.handleFormActions)
router.delete('/:id', courseController.delete)
router.delete('/destroy/:id', courseController.destroy)
router.put('/:id', courseController.update)
router.patch('/restore/:id', courseController.restore)
router.get('/:slug', courseController.show)

module.exports = router