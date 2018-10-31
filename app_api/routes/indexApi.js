const express = require('express');
const router = express.Router();

const ctrlCrypto = require('../controllers/ctrlApiCrypto');
const ctrlEvents = require('../controllers/ctrlApiEvents');

router
    .route('/crypto')
    .get(ctrlCrypto.cryptoList)
    .post(ctrlCrypto.addCrypto)
    
router
    .route('/events')
    .get(ctrlEvents.eventsList)
    .post(ctrlEvents.addEvent);

module.exports = router;
