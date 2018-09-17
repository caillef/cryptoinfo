const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlFootball = require('../controllers/ctrlFootball');
const ctrlGoldenBall = require('../controllers/ctrlGoldenBall');

router.get('/', ctrlMain.index);
router.get('/football', ctrlFootball.winnerlist);
router.get('/goldenball', ctrlGoldenBall.winnerlist);

module.exports = router;
