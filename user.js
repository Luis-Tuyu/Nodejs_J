let usuarios = [{
        id: 1,
        nombre: 'Juan',
        apellido: 'López',
        salario: 3000
    },
    {
        id: 2,
        nombre: 'Luis',
        apellido: 'Chi',
        salario: 7000
    },
    {
        id: 3,
        nombre: 'Sergio',
        apellido: 'Medina',
        salario: 8000
    },
    {
        id: 4,
        nombre: 'Sergio',
        apellido: 'Medina'
    }
]

let getUsuarios = (id) => {
    return new Promise((resolve, reject) => {

        let user = usuarios.find((usuario) => usuario.id === id);

        if (!user) {
            reject(`No se encontro un usuario con este ID ${ id }`)
        } else {
            resolve(user)
        }
    })
}
let getSalario = (user) => {
        return new Promise((resolve, reject) => {

            if (!user.salario) {
                reject(`No existe un salario para el usuario ${ user.nombre }`)
            } else {
                resolve({ nombre: user.nombre, salario: user.salario })
            }
        })
    }
    // promesa('Hell').then((response) => {
    //    console.log(response)
    // }, (err) => console.log(err))
getUsuarios(3).then((resp) => {
    return getSalario(resp)
}).then((resp => {
    console.log(resp)
})).catch((err) => console.log(err))