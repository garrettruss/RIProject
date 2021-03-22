
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
    res.render('rows/new', { title: "Add Right-Of-Way" });
}

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


function edit(req, res) {
    Row.findById(req.params.id, (err, row) => {
        res.render('rows/edit', { row });
    })
}


function update(req, res) {
    Row.findByIdAndUpdate(req.params.id, req.body, (err, updatedRow) => {
        res.redirect('/rows');
    });
}


function deleteRow(req, res) {
    Row.findByIdAndRemove(req.params.id, (err, deletedRow) => {
        res.redirect('/rows');
    })
}
