const Row = require('../models/row');

/* v4 
function create(req, res) {
    Row.findById(req.params.id, (err, row) => {
        row.review.post(req.body.id);
        row.save((err) => {
            res.redirect(`/rows/${row._id}`);
        });
    });
}
*/

/*
v1
*/
function create(req, res) {
 Row.findById(req.params.id, function(err, row) {
   row.reviews.push(req.body);
   row.save(function(err) {
     res.redirect(`/rows/${row._id}`);
   });
 });
}

/*
v5
function create(req, res) {
 Row.findById(req.params.id, function(err, row) {
   row.reviews.post(req.body);
   row.save(function(err) {
     res.redirect(`/rows/${row._id}`);
   });
 });
}
*/

/*
v2
function create(req, res) {
    Row.findById(req.params.id, function(err, row) {
      row.reviews.push(req.body);
      row.save(function(err) => {
        res.render(`/rows/`);
      });
    });
  }
*/


/*
v3
function create(req, res) {
  // we need to sanitize our data
	for (key in req.body) {
		if (req.body[key] === "") delete req.body[key];
	}
  Row.create(req.body, function(err, row) {
// one way to handle errors
    if (err) return res.redirect('/rows/new');
// for now, redirect right back to the "new" view
    res.redirect('/rows');
  });
}
*/

/*
function update(req, res) {
    Row.findByIdAndUpdate(req.params.id, req.body, (err, updatedRow) => {
        res.redirect('/rows');
    });
}
*/

module.exports = { create, };