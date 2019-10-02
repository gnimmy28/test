const mongoose = require('./mongoose-connection');

//Création de schema
// Ceci est mon fichier classwork
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
    {building: Number, street: String, zipcode:String}
);

const GradesSchema = new Schema(
    [{date:Number, grade:String, score:Number}]
);

//Utilisation d'un schema comme type de données
const RestauSchema = new Schema({
    address: AddressSchema, 
    grades: GradesSchema,
    borough: String, 
    cuisine: String,
    name: String,
    restaurant_id: Number,
    createdAt: Date
   
  });

//Création d'un modèle
const RestauModel = mongoose.model('restaus', RestauSchema);

module.exports = {
    model: RestauModel,
    schema: restauSchema,
    mongoose: mongoose
};