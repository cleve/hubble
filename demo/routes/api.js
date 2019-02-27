/* jshint esversion: 8 */

var express = require('express');
var router = express.Router();
var upload = multer({ dest: '/tmp/'});

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
