/* v3 */ 

const router = require('express').Router();
const rowsCtrl = require('../controllers/rows');

router.get('/', rowsCtrl.index);
router.get('/new', rowsCtrl.new);
router.post('/', rowsCtrl.create);
router.get('/:id/edit', rowsCtrl.edit);
router.get('/:id', rowsCtrl.show);
router.put('/:id', rowsCtrl.update);
router.delete('/:id', rowsCtrl.delete);

module.exports = router;


/* v2

const express = require('express');
const router = express.Router();
const rowsCtrl = require('../controllers/rows');


router.get('/', rowsCtrl.index);
router.get('/new', rowsCtrl.new);
router.post('/', rowsCtrl.create);

module.exports =  router;
 */ 

