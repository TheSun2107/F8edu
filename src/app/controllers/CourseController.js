const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')
class CourseController {

    //[GET] /courses/:slug
    show(req, res, next) {
        
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show',{ 
                    course: mongooseToObject(course) })
            })
            .catch(next)

    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')

    }

    //[POST] /courses/store
    store(req, res, next) {
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }

    //[GET] /courses/create
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }

    //[PUT]/courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/me/stored-courses'))
        .catch(next)
    }
    //[DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteById({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController
