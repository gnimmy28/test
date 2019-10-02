//Importation de Mongoose
const mongoose = require('mongoose');

//Connexion au serveur MongoDB
mongoose.connect('mongodb://localhost/myDatabase');

module.exports = mongoose;
