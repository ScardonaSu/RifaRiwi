/* 
const persons = [
  {
    nombre: "Manuela",
    correo: "manuela@gmail.com",
    genero: "femenino",
    password: "123",
    images: [
      "./images/img-1.jpg",
      "./images/img-2.jpeg",
      "./images/img-3.jpg",
      "./images/img-4.jpg",
      "./images/img-5.webp",
      "./images/img-6.jpg",
      "./images/img-7.jpg",
      "./images/img-8.jpg",
      "./images/img-9.webp",
      "./images/img-10.jpeg",
    ],
  },
  {
    nombre: "Samuel",
    correo: "samuel@gmail.com",
    genero: "masculino",
    password: "123",
    images: [
      "./images/img-11.jpg",
      "./images/img-12.jpg",
      "./images/img-13.jpeg",
      "./images/img-14.webp",
      "./images/img-15.jpg",
      "./images/img-16.jpg",
      "./images/img-17.webp",
      "./images/img-18.jpg",
      "./images/img-19.jpg",
      "./images/img-20.jpg",
    ],
  },
]; */

import { getAdmin } from "./API.js"




const login = document.querySelector('#loginData')


login.addEventListener('click', formData)


async function formData() {

  const myEmail = document.getElementById('email').value
  const myPassword = document.getElementById('password').value

  const admin = await getAdmin()

  let resultado = admin.filter((data) => {

    return data.email == myEmail

  }) 



  if(resultado.length > 0){

    if (resultado[0].password === myPassword) {

      window.location.href = 'home.html'
    }

  }else{
    console.log('usuario no existe');
  }
}
