const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Saqlash sozlamalari
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'projects/'); 
    },
    filename: function (req, file, cb) {
        const id = uuidv4()
        const uniqueSuffix = Date.now()+id+Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + uniqueSuffix + ext);
    }
});

const fileFilter = function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|webp|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Faqat JPG, JPEG va PNG rasm fayllariga ruxsat beriladi!'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;
