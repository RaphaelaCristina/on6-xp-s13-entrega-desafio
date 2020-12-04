const gamesTeste = require('../models/gamesSchema')

//GET
const getGames = (request, response) => {
    console.log(request.url)
    gamesTeste.gamesCollection.find((error, games)=>{
        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send(games)
        }
    })
}

//GETBYID
const getGamesById = (request, response) => {
    const idParam = request.params.id
    gamesTeste.gamesCollection.findById(idParam, (error, games)=>{
        if(error){
            return response.status(500).send(error)
        } else {
            if(games){
                return response.status(200).send(games)
            } else {
                return response.status(404).send("Game não encontrado!")
            }
        }
    })
}

//PUT - atualizar uma informação
const atualizar = (request, require) =>{
    const idParam = request.params.id
    const gamesBody = request.body
    const novo = {new: true}

    gamesTeste.gamesCollection.findByIdAndUpdate(idParam, gamesBody, novo, (error, games)=> {
        if(error){
            return response.status(500).send(error)
        }else if (games){
            return response.status(200).send(games)
        } else {
            return response.sendStatus(404)
        }
    })
   
}

//OBS: PATCH atualiza tudo

//POST - adicionar games
const addGames = (request, response) => {
    console.log(request.url)
    const gamesBody = request.body
    const games = new gamesTeste.gamesCollection(gamesBody)

    games.save((error)=> {
        if(error){
            return response.status(400).send(error)
        }else {
            return response.status(201).send(games)
        }
    })
}

//DELETE
const deleteGames = (request, response) => {
    const idParam = request.params.id
    gamesTeste.gamesCollection.findByIdAndDelete(idParam, (error, games) =>{
        if(error){
            return response.status(500).send(error)
        }else {
            if(games){
            return response.status(200).send("Game deletado!")
            } else {
                return response.statusSend(404)
            }
        }
    })
}


module.exports = {
    getGames,
    getGamesById,
    atualizar,
    addGames,
    deleteGames
    
}