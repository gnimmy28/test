const express = require('express');
const router = express.Router();

const publisher = require('../database/publisher-model');
const book = require('../database/book-model');
const author = require('../database/author-model');

//Création d'un livre avec son éditeur
router.post('/', (req, res) => {
    let newPublisher = new publisher.model(
        {name: req.body.publisherName}
    );

    let newBook = new book.model({
        title: req.body.title,
        genre: req.body.genre,
        publisher: newPublisher._id
    });

    publisher.model.findOne({name: req.body.publisherName})
    .then( (data) => {
        if(data){
            //console.log(data);
            newBook.publisher = data._id;
            return data;
        } else {
            return newPublisher.save();
        }
    })

    newPublisher.save()
        .then(()=>{return newBook.save()})
        .then( (data) => {res.json(data)});
});

router.post('/ajout-auteur', (req, res)=> {
    let foundBook = {};
    book.model.findById(req.body.bookId)
        .then( (data) => {
            foundBook = data;
            if(! foundBook.authors){
                foundBook.authors = [];
            }
            //recherche author
            return author.model.findOne({ name: req.body.name})
        })
        //on recuperer author
        .then( (data) => {
            if(data){
                foundBook.authors.push(data._id);
                return data;
            } else {
                let newAuthor = new author.model(
                    { name: req.body.name, nationality: req.body.nationality}
                );
                return newAuthor.save();
            }
        })
        .then( (data) => {
            foundBook.authors.push(data._id);
            console.log(foundBook);
            //mise a jour de livre
            return book.model.updateOne(
                {_id: req.body.bookId},
                    foundBook
            );
                    
        })
        .then( (data) => {
            res.json(data);
        }).catch( (err) => res.json(err))
});

//Exportation du module
module.exports = router;