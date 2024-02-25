const express = require('express')
const router = express.Router()
const {getAudio, postAudio,deleteAudio} = require('../controllers/audioController')


router.route('/').get(getAudio).post(postAudio)
router.route('/:id').delete(deleteAudio); 

module.exports = router
