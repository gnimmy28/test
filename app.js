//Importation d'express
const express = require('express');

//Importation de Mongoose
//const mongoose = require('mongoose');

//Connexion au serveur MongoDB
//mongoose.connect('mongodb://localhost/myDatabase');
//Création de schema
//const Schema = mongoose.Schema;
//const PersonSchema = new Schema({
    //nom: String, 
    //prenom: String, 
    //age:Number}
    //);

//Création d'un modèle
//const PersonModel = mongoose.model('persons', PersonSchema);

//Importation du module body parser pour recuperer les donnee postee
const bodyParser = require('body-parser');

//Importation des routes
const personRoutes = require('./routes/personRoutes');

const todoRoutes = require('./routes/todo-routes');

const restauRoutes = require('./routes/restaus-routes');

const bookRoutes = require('./routes/book-routes');


//Création de l'application
const app = express();

//Declaration de body-parser dans un middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Déclaration des routes dans les middlewares
app.use('/person', personRoutes);

app.use('/todo',todoRoutes);

app.use('/restau',restauRoutes);
app.use('/books', bookRoutes);




//Gestion des erreurs
app.use((err, req, res,next) => {
    console.error(err);
    res.status(500).json(
        {
            success: false,
            message: err.message
        }
    );
});

//définition des routes
//app.get('/',(req,res)=> {
    //let person = new PersonModel(
        //{
            //nom:'deva',
            //prenom: 'kevin',
            //age: 24
       // }
   // );
   // person.save((err,data )=> {
        //if (err){
        //    res.json(err);    
        //} else {
          //  res.json(data);
        //}
    //});
     //res.json({test: true});
//});



//Lancement du serveur
app.listen(3000);