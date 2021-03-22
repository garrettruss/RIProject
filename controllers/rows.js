/* v3 */
const { findByIdAndDelete } = require('../models/row');
const Row = require('../models/row');
module.exports = {
    index,
    show,
    new: newRow,
    create,
    edit,
    update,
    delete: deleteRow,
}

function index(req, res) {
    Row.find({}, (err, rows) => {
        res.render('rows/index', { rows, title: "RI Rights of Ways" })
    })
}

function show(req, res) {
    Row.findById(req.params.id, (err, row) => {
        res.render('rows/show', { row });
    });
}

function newRow(req, res) {
    res.render('rows/new');
}

function create(req, res) {
    Row.create(req.body, (err, row) => {
        res.redirect('/rows');
    });
}

function edit(req, res) {
    Row.findById(req.params.id, (err, row) => {
        res.render(`rows/edit`, { row });
    })
}

function update(req, res) {
    row.findByIdAndUpdate(req.params.id, req.body, (err, updatedRow) => {
        res.redirect('/rows');
    });
}

function deleteRow(req, res) {
    Row.findByIdAndRemove(req.params.id, (err, deletedRow) => {
        res.redirect('/rows');
    })
}



/*

v2
const Row = require('../models/row');

module.exports = {
    new: newRow,
    create,
    index,
};

function newRow(req, res) {
  res.render('rows/new');
};

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

function index(req, res) {
  Row.find({}, function (err, rows) {
    console.log(rows);
    res.render('rows/index', { rows } );
  });
};
*/



/*
v1

function deleteRow(req, res) {
  //ask the data file to splice out the todo from the array
  Row.deleteOne(req.params.id);
  //respond wtih a redirect to the index page where we see all the todos minus the deleted todo
  res.redirect('/rows');
};

function edit(req, res) {
  const row = Row.getOne(req.params.id);
  res.render('rows/edit', { 
    row,
    rowId: req.params.id,
   });
}

function show(req, res) {
 res.render('rows/show', {
   row: Row.getOne(req.params.id),
   rowNum: parseInt(req.params.id) + 1
 });
}

function update(req, res) {
  console.log(req.body);
  // set the done property
  req.body.done = req.body.done === 'on' ? true : false;
  // ask the data file to replace the existing row object with the updated one 
  Row.updateOne(req.params.id, req.body);
  // respond with res.redirect
  res.redirect(`/rows/${req.params.id}`);
}

module.exports = {
 show,
 new: newRow,
 create, 
 delete: deleteRow,
 edit,
 update,
};

*/

