const { Router } = require('express')

const RepoControler = require('./controllers/RepoController')

const routes = Router()

routes.get('/', RepoControler.index)
routes.get('/repos', RepoControler.repositories)

module.exports = routes