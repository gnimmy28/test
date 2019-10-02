const mongoose = require('./mongoose-connection');

//Création de schema
//correction
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    borough: {type: String, required:true},
    cuisine: {type: String, required: true},
    name: {type: String, required: true},
    restaurant_id: {type: Number, required: true},
    address: {
        building: String, 
        street: {type: String, required: true},
        zipcode: {type: String, required: true},
        coord: [Number]
    },
    grades: [{
        grade: {type: String, required: true},
        score: {
            type: Number, required: true,
            set: value=>Math.floor(value),
            get: value=>Math.floor(value)
        },
        date: {type: Date, default: Date.now}
    }]
});

const restaurantModel = mongoose.model('restaus', restaurantSchema);

module.exports = {
    model: restaurantModel,
    Schema: restaurantSchema,
    mongoose: mongoose
}