const express = require('express')
const router = express.Router()
const controller = require('../controllers/games-controller')
const cors = require('cors')

router.get('/games',cors(), controller.getGames)
router.get('/games/:id',cors(),controller.getGamesById)
router.put('/games/:id', cors(), controller.atualizar)
router.post('/games',cors(),controller.addGames)
router.delete('/games/:id',cors(),controller.deleteGames)

module.exports = router;