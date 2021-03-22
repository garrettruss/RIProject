
const router = require('express').Router();

const rowsCtrl = require('../controllers/rows');

router.get('/', rowsCtrl.index);
router.get('/new', rowsCtrl.new);
router.get('/:id', rowsCtrl.show);
router.post('/', rowsCtrl.create);
router.delete('/:id', rowsCtrl.delete);
router.get('/:id/edit', rowsCtrl.edit);
router.put('/:id', rowsCtrl.update);


module.exports = router;

