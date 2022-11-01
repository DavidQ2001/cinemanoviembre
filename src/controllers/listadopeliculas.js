let peliculas = [
    {
        nombre: "reencarnacion",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/reencarnacion.png?alt=media&token=bc27562b-80fc-4dfb-8a04-80bd4739fe2e"
    },
    {
        nombre: "cocodrilo",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/cocodrilo.jpg?alt=media&token=28f78224-6034-40f8-9079-5adef8c66a79"
    },
    {
        nombre: "black",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/black.png?alt=media&token=354fc0dd-b7a6-4b80-a69c-65c032c3b75a"

    },
    {
        nombre: "jauria",
        duracion:140,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/jauria.png?alt=media&token=b6b2bdad-4fa4-4a30-bec3-87a5841edc12"
    },
    {
        nombre: "fedora",
        duracion:150,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/fedora.png?alt=media&token=70d257dd-61ed-4b4e-9166-12cbe5430dce"
    },
    {
        nombre: "nochefinal",
        duracion:190,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/nochefinal.jpg?alt=media&token=fd47eb9a-8903-483d-9754-3ca52de945d3"
    },
    {
        nombre: "sonrie",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/sonrie.jpg?alt=media&token=a4fb2b48-fc63-491c-92df-6a9ad3ee6e61"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },

    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "luz",
        duracion:70,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    }

]

let fila = document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto = document.createElement("img")
    foto.src=pelicula.poster

    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
})
