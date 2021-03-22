/* v3 */


const router = require('express').Router();


const express = require('express');
const indexCtrl = require('../controllers/index');


router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;

/* v2 
const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');

router.get('/', function(req, res) {
    res.render('index');
});


module.exports = router;
*/  

