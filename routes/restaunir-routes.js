//Importation du module express
//ceci est mon fichier classwork
const express = require('express');

//Importation du modèle
const restau = require('../database/restau-model');

//Creation de routeur
const router = express.Router();

//Liste de toutes les restaurants
router.get("/", (req,res) => {
    restau.model.find((err, data) => {
        res.json(data);
        
    });
});

//Infos sur une restaurant
router.get('/:id', (req, res) => {
    restau.model.findOne(
        {_id: req.params.id},
        (err, data)=> {
            res.json(data);
        }
    );
});


//Exportation du module
module.exports = router;