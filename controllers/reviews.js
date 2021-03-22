const Row = require('../models/row');

function create(req, res) {
 Row.findById(req.params.id, function(err, row) {
   rows.reviews.push(req.body);
   row.save(function(err) {
     res.redirect(`/rows/${row._id}`);
   });
 });
}

module.exports = {
    create,
}