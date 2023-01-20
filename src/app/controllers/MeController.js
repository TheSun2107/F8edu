const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')
class MeController {

    //[GET] /me/stored-courses/
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    //[GET] /me/trash
    trash(req, res, next) {
        Course.findDeleted()
            .then(courses => res.render('me/trash', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
    
        }
    
    handleFormAction(req, res, next) {
        switch(req.body.action) {
            case 'restore':
                Course.restore({_id: { $in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break

            case 'delete':
                Course.deleteOne({_id: { $in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({message: 'Action is invalid!'})
        }
    }

}

module.exports = new MeController
