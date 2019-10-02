//My classwork
const mongoose = require('./mongoose-connection');

//Création de schema
const Schema = mongoose.Schema;
const livreSchema = new Schema({
    nom: String, 
    titre: String, 
    genre:String
    }
    );

//Création d'un modèle
const livreModel = mongoose.model('livres', LivreSchema);

module.exports = {
    model: livreModel,
    schema: livreSchema,
    mongoose: mongoose
};