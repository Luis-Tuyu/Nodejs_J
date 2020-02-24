const { getUsuarios, getSalario } = require('./node/user')
    //user.getSalario();
console.log(getUsuarios)
    //podemos usar la destructuracó

async function resp(id) {
    let user = await getUsuarios(id)
    let sla = await getSalarios(user)
    return sla
}

resp(id).then((resp) => {
    console.log(resp)

}).catch(err => console.log(err))