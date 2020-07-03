const axios = require('axios')

module.exports = {
    async index(request, response) {
        const repoName = 'camunda'
        
        const repo = await axios.get(`https://api.github.com/users/${repoName}`)

        return response.json(repo.data)
    },
    async repositories(request, response) {
        const profile = 'camunda' 

        const repo = await axios.get(`https://api.github.com/users/${profile}/repos`)

        return response.json(repo.data)
    }
}