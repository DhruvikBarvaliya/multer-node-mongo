const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost/multer', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreteIndex: true,
        // useFindAndModify: true
    }).then(() => {
        console.log("Connected With MongoDB");
    })
}