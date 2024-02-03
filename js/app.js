
//Aqui va todo el codigo de la pagina principal
// import { getBoletas } from "./API.js"
import { getBoletas, postParticipantes } from "./API.js"
import { validar } from "./funciones.js"



let contador = 1
const valorElemento = document.querySelector('#valor')
const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar')

incrementar.addEventListener('click', ()=>{

    if (contador < 10) {
        
        contador++
        valorElemento.textContent = contador
    }


})

decrementar.addEventListener('click', ()=> {

    if (contador > 1) {
        
        contador--
        valorElemento.textContent = contador

    }

})




const boleta = document.querySelector('#numeros')

document.addEventListener('DOMContentLoaded', boletaDisabled)

async function boletaDisabled(e) {

    e.preventDefault()

    const participante = await getBoletas()

    participante.forEach( data => {

      
        const boton = document.createElement('div')
        boton.classList.add('negro')

        const {id, numero} = data

        boton.innerHTML = `
        
            <button data-boleta="${id}" data-bs-toggle="button" id="tickets" id="${id}" class="button btn btn-danger">${numero}</button>
        
        `
         boleta.appendChild(boton)


        
    })
}




/* 
<button id="tickets"  data-boleta="${id}" id="${id}" class="numeroBoleta">${numero}</button>
 */



//Tomar el ID
/* document.addEventListener('click', (e)=> {

    const boletaId = e.target.dataset.boleta

    console.log(boletaId);


})
 */

//Post participanets

const formulario = document.querySelector('#formulario')


formulario.addEventListener('submit', addParticipante)

function addParticipante(e) {
    
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const apellidos = document.querySelector('#apellidos').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value

    const participante = {
        nombre,
        apellidos,
        email,
        telefono,
        direccion
    }

    if (validar(participante)) {
        console.log('Todos los campos son requeridos');
        return
    }

    postParticipantes(participante)
    



}

















