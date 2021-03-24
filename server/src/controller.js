const usersData = require('./users.json');
const model = require('./model');

//CRUD

const hello = (req,res) =>{
    res.send('Hello Franklin!');
};

//CREATE
const createUser = (req, res) => { 
        const dni = req.body.dni;
        const name = req.body.name;
        const age = req.body.age;
    
        if (model.isValidDNI(dni) && !model.usedDNI(dni)) {
            usersData.users.push({
                dni,
                name,
                age
            })
            model.saveUser(usersData);
            response = `Usuario con DNI ${dni} añadido.`
        }else if(model.usedDNI(dni)){
            response = `Usuario con DNI ${dni} ya existe, usuario no añadido.`
        }else{
            response = `DNI ${dni} es invalido, usuario no añadido.`
        }
        console.log(usersData.users);
        res.send(response);
    };

    //READ
    const getUsers = (req, res) =>{
        const getAllUsers = model.getAll(usersData);
        res.sendFile(getAllUsers);
    };

    const getUser = (req,res) =>{
        const paramDNI = req.params.dni;
        const userFind = usersData.users.find(user => user.dni  === paramDNI);
        if(userFind){
            response2 = userFind;
        } else {
            response2 = `Usuario no existente.`
        }
        res.send(response2);
    };


module.exports = {
    hello,
    createUser,
    getUsers,
    getUser
    
};
