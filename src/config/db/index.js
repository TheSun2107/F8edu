const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

async function connect() {
    
    try {
        await mongoose.connect('mongodb+srv://admin:allinlove1803@cluster0.ghopiyp.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected!!!!')
    } catch (error) {
        console.log('Failure!!!')
    }
}

module.exports = {connect}