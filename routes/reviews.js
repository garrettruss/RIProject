

const router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');



router.post('/rows/:id/reviews', reviewsCtrl.create);
//router.delete('/rows/:id/reviews', reviewsCtrl.delete);

module.exports = router;