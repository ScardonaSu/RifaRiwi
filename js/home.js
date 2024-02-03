import { geParticipantes } from "./API.js"




const auth = sessionStorage.getItem('auth')
const nombre = sessionStorage.getItem('nombre')


const listaParticipantes = document.querySelector('#mostrarParticipantes')


document.addEventListener('DOMContentLoaded', participantes)

async function participantes() {
  
  const participante = await geParticipantes()

  participante.forEach(data => {

    const {nombre, id, apellidos, email, telefono, direccion} = data


    const tr = document.createElement('tr')
    tr.classList.add('tableParticipantes')

    tr.innerHTML = `

            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td>${email}</td>
            <td>${telefono}</td>
            <td>${direccion}</td>
            
    `

    listaParticipantes.appendChild(tr)




  })





}









/* if (genero === 'femenino') {

    document.getElementById("userName").textContent = nombre;


    document.querySelector(".user-container").classList.add('fem')

    persons[0].images.forEach((img) => {
      console.log(img.images);

      const row = document.getElementById("myRow");

      const div = document.createElement("div");
      div.classList.add("col-md-3");
      row.appendChild(div);

      const myImg = document.createElement("img");
      myImg.setAttribute("src", img);
      myImg.classList.add("img-fluid", "mt-4");

      div.appendChild(myImg);
    });

    
    
}else{


    const myName = document.getElementById("userName").textContent = nombre;

    console.log(myName);


    document.querySelector(".user-container").classList.add("male");

    persons[1].images.forEach( img => {


      const row = document.getElementById('myRow')

      const div = document.createElement('div')
      div.classList.add('col-md-3')
      row.appendChild(div)

      const myImg = document.createElement('img')
      myImg.setAttribute('src', img)
      myImg.classList.add('img-fluid', 'mt-4')

      div.appendChild(myImg)

    })

    


}
 */



