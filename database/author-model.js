const mongoose = require('./mongoose-connection');

const authorSchema = new mongoose.Schema (
    { 
        name: {type: String, required: true },
        nationality: {type: String, required: true, enum: ['fr', 'es','gb', 'us']},
    }
);

const authorModel = mongoose.model('authors', authorSchema);

module.exports = {
    model: authorModel,
    Schema: authorSchema
};