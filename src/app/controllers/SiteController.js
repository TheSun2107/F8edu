const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')
class SiteController {

    //[GET]/
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses) 
                })
            })
            .catch(next)
    }

}

module.exports = new SiteController
