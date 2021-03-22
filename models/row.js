
/* v3 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rowSchema = new Schema({
    name: String,
    town: String,
    debris: String,
    description: String,
    rating: Number,
})

module.exports = mongoose.model('Row', rowSchema);

/*
v2

//require Modules
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const rowSchema = new Schema(
  {
    town: {
        type: String,
        enum: ['Newport', 'Middletown', 'Portsmouth']
    },

    name: {
        type: String,
    },

    visitDate: {
        type: Date,
    },
  },

  {
    timestamps: true,
  },
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Row', rowSchema);
*/




/*
v1

function getAll(id) {
 return todos;
}

// Here's our latest function for this module
function getOne(id) {
 return todos[id];
}



function deleteOne(id) {
 todos.splice(id, 1);
}

function updateOne(id, updatedTodo) {
    todos.splice(id, 1, updatedTodo);
}


module.exports = {
 getAll,
 getOne,
 create,
 deleteOne,
 updateOne, 
};

*/