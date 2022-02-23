const express = require('express')
const router = express.Router()
const { upload } = require('../helper.js/fileHelper')
const { singleFileUpload, getallSingleFiles, getFile } = require('../controllers/fileUploadControler')

router.post('/singleFile', upload.single('file'), singleFileUpload)
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getFiles/:name', getFile);


module.exports = { routes: router }