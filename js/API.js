

//Aqui va los endpoint GET / POST / PUT / DELETE

const url = "http://localhost:3000/clientes"
const urlNuevos = "http://localhost:3000/nuevoParticipante"
const urlAdmin = 'http://localhost:3000/admin'


//POST

export const postParticipantes = async boletas => {

    try {
        
        await fetch(`${urlNuevos}`, {

            method: 'POST', 
            body: JSON.stringify(boletas),
            headers: {
                'Content-Type': 'application/json'
            }

        })

    } catch (error) {
        console.log(error);
    }

}



//GET 
export const getBoletas = async ()=> {

    try {

        const resp = await fetch(url)
        const parti = await resp.json()
        return parti

    } catch (error) {
        console.log(error);
    }


}

//GET Admin

export const getAdmin = async ()=> {

    try {

        const respo = await fetch(urlAdmin)
        const admin = await respo.json()
        return admin


    } catch (error) {
        console.log();
    }


}

//GET Participantes
export const geParticipantes = async ()=> {

    try {

        const respo = await fetch(urlNuevos)
        const admin = await respo.json()
        return admin


    } catch (error) {
        console.log();
    }


}

