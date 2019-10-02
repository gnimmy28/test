const mongoose = require('./mongoose-connection');

const publisherSchema = new mongoose.Schema (
    { name: {type: String, required: true }}
);

const publisherModel = mongoose.model('publishers', publisherSchema);

module.exports = {
    model: publisherModel,
    Schema: publisherSchema
};