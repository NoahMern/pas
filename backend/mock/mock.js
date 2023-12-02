const fs = require('node:fs');
const path = require('node:path');

const fileName = path.resolve(__dirname, 'data.json');

function loadData(path){
    const file = fs.readFileSync(path, 'utf8');
    return JSON.parse(file);
}


let dataStore = loadData(fileName);

module.exports = {
    get: (url) => {
        if (url === '/api/students') {
            return dataStore['students'];
        }
    },
};


