const axios = require('axios');
const { read } = require('./file');

const { save } = require('./file')

axios.get('https://official-joke-api.appspot.com/random_joke')
.then(
    async (res) => {
        console.log(res.data.setup)
        console.log(res.data.punchline)

        let setup = res.data.setup
        let punchline = res.data.punchline

        // const value1 = res.data.setup + res.data.punchline

        // console.log(value1)
        // console.log(value2)

        await save({jokes: [{setup, punchline}]})
        console.log(await read())
    }
)