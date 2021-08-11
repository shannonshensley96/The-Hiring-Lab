const express = require('express');
const router = express.Router();
const bookmarkCtrl = require('../../controllers/bookmarks')

router.post('/', bookmarkCtrl.create)
// router.delete('/bookmarks/:id', bookmarkCtrl.delete)

module.exports = router;