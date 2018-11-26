const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlCrypto = require('../controllers/ctrlCrypto');
const ctrlEvents = require('../controllers/ctrlEvents');

router.get('/', ctrlMain.index);
router
    .route('/crypto')
    .get(ctrlCrypto.cryptoList)
    .delete(ctrlCrypto.removeData);

router
    .route('/crypto/add')
    .get(ctrlCrypto.showForm)
    .post(ctrlCrypto.addData);

router.get('/events', ctrlEvents.eventsList);
router
    .route('/events/add')
    .get(ctrlEvents.showForm)
    .post(ctrlEvents.addData);    

module.exports = router;
