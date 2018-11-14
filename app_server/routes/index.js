const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlCrypto = require('../controllers/ctrlCrypto');
const ctrlEvents = require('../controllers/ctrlEvents');

router.get('/', ctrlMain.index);
router.get('/crypto', ctrlCrypto.cryptoList);
router.get('/events', ctrlEvents.eventsList);

router
    .route('/crypto/add')
    .get(ctrlCrypto.showForm)
    .post(ctrlCrypto.addData);

module.exports = router;
