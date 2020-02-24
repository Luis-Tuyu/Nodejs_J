let usuarios = [{
            id: 1,
            nombre: 'Luis',
            salario: 5000
        },
        {
            id: 2,
            nombre: 'Josue',
            salario: 5000
        },
        {
            id: 3,
            nombre: 'Dani',
            salario: 5000
        },
        {
            id: 4,
            nombre: 'Jose'
        }
    ]
    /*let getUsuarios = (id, callback) => {
        let user = usuarios.find((usuario) => usuario.id === id);

        if (!user) {
            callback(`No se encontro un usuario con este ID ${ id }`)
        } else {
            callback(null, user)
        }
    }
    let getSalario = (user, callback) => {
        if (!user.salario) {
            callback(`No existe un salario para el usuario ${user.nombre }`)
        } else {
            callback({ nombre: user.nombre, salario: user.salario })
        }
    }


    getUsuarios(4, (err, response) => {
        if (err) {
            return console.log(err)
        } else {
            getSalario(response, (err, usuario) => {
                if (err) {
                    return console.log(err)
                } else {
                    console.log(usuario)
                }
            })
        }
    }); */
    //promesas
let getUsuarios = (id) => {
    let user = usuarios.find((usuario) => usuario.id === id);

    if (!user) {
        callback(`No se encontro un usuario con este ID ${ id }`)
    } else {
        callback(null, user)
    }
}



let getUsuarios = (id, callback) => {
    return new Promise((resolve, reject) => {
        let user = usuarios.find((usuario) => usuario.id === id);
        if (!user) {
            reject(`No se encontro un usuario con este ID ${id}`)
        } else {
            resolve(user)
        }
    })
}

getUsuarios(4).then((resp) => {
    getSalario(resp).then((resp) => {
        console.log(resp)
    }, (err) => console.log(err))
}, (err) => console.log(err))

//obtener salario
let getSalario = (user) => {
        return new Promise((resolve, reject) => {
            if (!user.salario) {
                reject(`No existe un salario para el usuario ${user.nombre}`)
            } else {
                resolve({ nombre: user.nombre, salario: user.salario })
            }

        })
    }
    //devolver el salario con las promesa