//Importation du module express
const express = require('express');

//Importation du modèle
const todo = require('../database/todo-model');

//Creation de routeur
const router = express.Router();

//Liste de toutes les taches
router.get("/", (req,res) => {
    todo.model.find((err, data) => {
        //res.json(data);
        if(data && data.length >0){
            res.json(data);
        } else {
            res.status(404).json(
                {found: false, message: 'pas de resultats'}
            );
        }
    });
});

const getTaskByDone = (res, isDone) => {
    todo.model.where('done').equals(isDone)
    .exec((err, data) =>{
        res.json(data);
    });
}


//Les taches terminées
router.get('/done', (req, res) =>{
    getTaskByDone(res, true);
});


//Les taches en cours
router.get('/pending', (req, res) =>{
    getTaskByDone(res, false);
});


//Récuperation d'une taches
router.get('/:id', (req,res) => {
    todo.model.findById(req.params.id, (err, data)=> {
        if(data){
            res.json(data);
        } else {
            res.status(404).json(
                {found: false, message: 'pas de resultats'}
            );
        }
    });
});

//Création d'une tache
router.post('/',(req,res) => {
    let newTask = new todo.model({
        task: req.body.task,
        done: req.body.done == "1",
        createdAt: new Date(req.body.createdAt)
    });

    newTask.save((err, data)=> {
        res.json(data)
    });
});

//Modification d'une tache
router.put('/:id', (req, res)=>{
    let taskData = {
        task: req.body.task,
        done: req.body.done == "1",
        createdAt: new Date(req.body.createdAt)
      
    };

    todo.model.findByIdAndUpdate(req.params.id, taskData,
        (err, data) => { res.json(data)});
});


//Suppression d'une tache
router.delete('/:id', (req,res)=>{
    todo.model.findByIdAndDelete(
        req.params.id,
        (err, data)=> {
            res.json(data)
        });
});

module.exports = router;