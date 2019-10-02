//My classwork
const mongoose = require('./mongoose-connection');

//Création de schema

const Schema = mongoose.Schema;
const editeurSchema = new Schema({
    nom: String 
    });

//Création d'un modèle
const editeurModel = mongoose.model('editeurs', editeurSchema);

module.exports = {
    model: editeurModel,
    schema: editeurSchema,
    mongoose: mongoose
};