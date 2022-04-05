var express = require('express');
var router = express.Router();
var  upload= require('../middleware/upload');
const uploadFile = upload.array('image')
const multer = require('multer')
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express',message:'', data:''});
});

router.post('/upload', function (req, res) {

    uploadFile(req,res,function (err){
        if (err instanceof multer.MulterError){
            res.render('index',{message:err.message, data: ''})
        }else if (err){
            res.render('index',{message:err.message, data: ''})

        }else {

            res.render('index',{message:'tai file thanh cong', data: req.files})
        }
    })


    }
)

router.get('/upload', function(req, res, next) {
    res.render('upload', { title: 'upload' });
});

module.exports = router;

