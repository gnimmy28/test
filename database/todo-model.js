const mongoose = require('./mongoose-connection');

//Création de schema
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    task: String,
    done: Boolean,
    createdAt: Date 
    } );
   

//Création d'un modèle
const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = {
    model: TodoModel,
    schema: TodoSchema,
    mongoose: mongoose
};