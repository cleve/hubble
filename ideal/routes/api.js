/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const multer =require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, res, cb) {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});

/* GET users listing. */
router.post('/image', upload.single('mostrador'), function(req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
    res.send(file);
});

module.exports = router;
