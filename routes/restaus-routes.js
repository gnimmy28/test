const express = require('express');

const restau = require('../database/restaurant-model');

const router = express.Router();

const nbResultsPerPage = 5;

const getRestaurantQuery = ((req)=>  {
    return  restau.model.find()
    .where('name').ne('')
    .sort({name:1})
    .limit(nbResultsPerPage)
    .skip((req.params.page -1) * nbResultsPerPage);

});

//Liste des restaurants
//correction
router.get('/page-:page',(req, res) =>{
    getRestaurantQuery(req).exec((err, data)=>{res.json(data)});
    //restau.model.find()
    //.where('name').ne('')
    //.sort({name:1})
    //.limit(nbResultsPerPage)
    //.skip((req.params.page -1) * nbResultsPerPage)
   // .exec((err, data )=>{res.json(data)});
        
    
});

//correction
router.get('/quartier-:borough/page-:page', (req, res) => {
    getRestaurantQuery(req)
        .where('borough')
        .equals(req.params.borough)
        .exec((err, data) => {res.json(data)});
});


router.get('/grade-:grade/page-:page', (req, res) => {
    getRestaurantQuery(req)
        .where('grades')
        .elemMatch({grade: req.params.grade,
                    date: {$gte: new Data('2014-01-01')},
                    date: {$lte: new Data('2014-12-31')}
                })
        .exec((err, data) => {res.json(data)});
});

router.get('/nb-par-quartier/cuisine-:cuisine', (req,res) => {
    restau.model.aggregate([
        {
            $match : { cuisine: req.params.cuisine}
        },
        {
        $group: {
            _id: '$borough',
            nb: {$sum: 1}
        }
    }]).exec((err, data) => { res.json(data) });
});

router.get('/distinct-cuisines',(req, res) =>{
    restau.model.distinct('cuisine')
        .exec((err, data) => { res.json(data)});
});

//Les restaurants d'un quartier
//mine
//router.get('/quartier-:borough',(req, res) => {
    //restau.model.find()
   // .exec((err, data)=>{
   //     res.json(data)
   // });
//});

//const getRestaurantByQuartier = (res, quartier) => {
    //restaurant.model.where('quartier').equals(quartier)
    //.exec((err, data) => {
     //   res.json(data);
  //  });
//}
//router.get('/quartier', (req, res)=>{
    //getRestaurantByQuartier(res, true);
//});




module.exports = router;