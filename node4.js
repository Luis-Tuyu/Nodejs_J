//async-await
let getMensaje = async() => {
    return "hola";
}

//getMensaje().then((resp) => {
//   console.log(resp)
//});

//los mensajes con una división no son tan significativos pero pueden hacerse con un catch

//await
let getMensaje2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('HOla')
        }, 3000)
    })
}

async function mostrarmsg() {
    let msg = await getMensaje()
    console.log(msg)
}

mostrarmsg();

//ejemplo 2
let getNombre = () => {
        return new Promise((resolve, reject) {
            setTimeout(())

        })
    }
    //ejercicio de JUAN

let getSalarios = async