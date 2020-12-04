const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gamesSchema = new Schema ({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },

    id: {
        type: Number,
        required: false
    },

    name: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    platforms: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

        
    summary: {
        type: String,
        required: true
    },

    first_release_date: {
        type: Number,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    cover: {
        type: String,
        required: true
    }
},
{
    collection: "games",
    versionKey: false
}
);

const gamesCollection = mongoose.model("games",gamesSchema)

module.exports = {gamesCollection}