const express = require('express')
const router = express.Router()
const { upload } = require('../helper/fileHelper')
const { singleFileUpload, getallSingleFiles, getFile } = require('../controllers/fileUploadControler')

router.post('/addSingleFile', upload.single('file'), singleFileUpload)
router.get('/getAllSingleFiles', getallSingleFiles);
router.get('/getFileByName/:name', getFile);


module.exports = { routes: router }