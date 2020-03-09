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

//funciones flecha
console.log("Funciones flecha")

//obtener el usuario
let Get_user = (id, callback) => {
    let user = usuarios.find((usuarios) => usuarios.id === id);
    if (!user) //si  no esta definido
    {
        callback('No se encontró usuario con este id');
        console.log("user->", user);
    } else {
        console.log(user)
        callback(null, user);
    }
}

Get_user(2, (err, response) => {
    if (err) {
        return console.log(err)
    } else {
        console.log("Correcto, codigo correcto")
    }
});