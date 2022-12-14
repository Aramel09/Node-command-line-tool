const fs = require('fs');
const { resolve } = require('path');

module.exports = {
    save: (jsObject) =>{
        return new Promise ((resolve, reject) => {
            fs.writeFile('data.json', JSON.stringify(jsObject), (err) => {
                if (err) reject (err)

                resolve ("JSON to a file")
            })
        })
    },

    read: () =>{
        return new Promise ((resolve, reject) => {
            fs.readFile('data.JSON', 'utf-8', (err, data) => {
                if (err) reject (err)
                // console.log(data)
                resolve(JSON.parse(data))
            }
            )
        })
    }
}