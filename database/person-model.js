const mongoose = require('./mongoose-connection');

//Création de schema
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    nom: String, 
    prenom: String, 
    age:Number}
    );

//Création d'un modèle
const PersonModel = mongoose.model('persons', PersonSchema);

module.exports = {
    model: PersonModel,
    schema: PersonSchema,
    mongoose: mongoose
};