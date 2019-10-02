const express = require('express');

const livre = require('../database/livre-model');

const editeur = require('../database/editeur-model');

const router = express.Router();

router.get("/", (req,res) => {
    livre.model.find((err, data) => {
        res.json(data);
    });
});

router.get("/", (req,res) => {
    editeur.model.find((err, data) => {
        res.json(data);
    });
});