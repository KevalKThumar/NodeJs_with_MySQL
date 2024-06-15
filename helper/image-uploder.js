const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.split('.')[0] + "_" + new Date().getTime() + path.extname(file.originalname))
    }
});

const fileFiltter = (req, file, cb) => {
    
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
        cb(null, true)
    } else {
        cb(new Error('file not supported'), false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFiltter,
    limits: { fileSize: 1024 * 1024 * 10 }
})

module.exports = upload