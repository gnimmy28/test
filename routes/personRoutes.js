//Importation du module express
const express = require('express');

//Importation du modèle
const person = require('../database/person-model');

//Creation de routeur
const router = express.Router();

//Liste de toutes les personnes
router.get("/", (req,res) => {
    person.model.find((err, data) => {
        res.json(data);
    });
});

//Infos sur une personne
router.get('/:id', (req, res) => {
    person.model.findOne(
        {_id: req.params.id},
        (err, data)=> {
            res.json(data);
        }
    );
});

//Suppression d'une personne
router.delete('/:id', (req, res)=>{
    person.model.remove(
        {_id: req.params.id},
        (err, data) => {
            res.json(data);
        }
    );
});

//Creation d'une personne
router.post('/', (req, res) => {
    //Creation d'une personne à partir du modèle
    let newPerson = new person.model(
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            age: req.body.age
        }
    );
    //Persistance de la personne
    newPerson.save((err, data) => {
        res.json(data);
    });
});

//Modification d'une personne
router.put('/:id', (req,res)=> {
    //Creation d'une personne à partir des données postées
    let newData =
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            age: req.body.age
        };
    
    //Mise à jour de la personne
    person.model.findByIdAndUpdate(
        req.params.id,
        newData,
        (err, data)=> {
            res.json(data);
        }
    );
   
    

});

//Exportation du module
module.exports = router;