const usersData = require('./users.json');
const fs = require('fs');
const path = require('path');


const isValidDNI = dni => {
    const regexDNI = /^[A-Z]{3}[0-9]{2}[a-z][0-9]$/;
    return regexDNI.test(dni)
};

const usedDNI = dni => {
    const userFind = usersData.users.find(user => user.dni  === dni);
    return userFind
};

const saveUser = usersData => {
    fs.writeFile('./src/users.json', JSON.stringify(usersData), function (err) {
        if (err) {
            console.log('ERROR!!')
        }
    })
};

const getAll = usersData => {
    const usersFile = path.join(__dirname, 'users.json');
    return usersFile
};

module.exports = {
    isValidDNI,
    usedDNI,
    saveUser,
    getAll
}