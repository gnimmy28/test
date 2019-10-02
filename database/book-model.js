const mongoose = require('./mongoose-connection');

const bookSchema = new mongoose.Schema (
    { 
        title: {type: String, required: true },
        genre: {type: String, required: true},
        publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'publishers'},
        authors: [{type: mongoose.Schema.Types.ObjectId, ref:'authors'}]
    }
);

const bookModel = mongoose.model('books', bookSchema);

module.exports = {
    model: bookModel,
    Schema: bookSchema
};