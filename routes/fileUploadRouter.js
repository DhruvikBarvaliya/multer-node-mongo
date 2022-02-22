const express = require('express')
const router = express.Router()
const { upload } = require('../helper.js/fileHelper')
const { singleFileUpload, getallSingleFiles } = require('../controllers/fileUploadControler')

router.post('/singleFile', upload.single('file'), singleFileUpload)
router.get('/getSingleFiles', getallSingleFiles);

module.exports = { routes: router }