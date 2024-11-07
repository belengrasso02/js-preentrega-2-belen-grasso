import { obtenerProductosDelCarrito } from "./carrito.js";

let plantas = [{
    id: 1,
    nombre: "Suculenta",
    precio: 5000,
    imagen: "./assets/suculenta.jpg",
},
{
    id: 2,
    nombre: "Cactus",
    precio: 3700,
    imagen: "./assets/cactus.jpg",

},
{
    id: 3,
    nombre: "Lengua de Suegra",
    precio: 7000,
    imagen: "./assets/lenguads.jpg",

},
{
    id: 4,
    nombre: "Margarita",
    precio: 6000,
    imagen: "./assets/margarita.jpg",

},
{
    id: 5,
    nombre: "Jazmin",
    precio: 9500,
    imagen: "./assets/jazmines.jpg",

},
{
    id: 6,
    nombre: "Orquidea",
    precio: 12000,
    imagen: "./assets/orquidea.jpg",

},
]




export function cargarProductos (){
    const listaDeProductos = document.getElementById("contenedorCards");


    plantas.forEach( planta =>{
        
        const div = document.createElement("div");
        div.classList.add ("card");
        div.setAttribute("id", planta.id);
        div.innerHTML = `
                <img src="${planta.imagen}" alt="${planta.nombre}" class="cardImg">
                    <div class="cardBody">
                        <h2 class="tituloCard" >${planta.nombre}</h2>
                    <p class="precioCard">$ ${planta.precio}</p>
                <button class="botonComprar" id="${planta.id}">Comprar</button>
        `
        listaDeProductos.append(div);
    })
}


export function actualizarListaDeCarrito (){
    const contenedorCarrito = document.querySelector(".contenedorCarrito");
    const productosDelCarrito = obtenerProductosDelCarrito();

    productosDelCarrito.forEach((planta)=>{
        const productoDelCarrito = document.createElement("div");
        productoDelCarrito.classList.add("productoDelCarrito");
        productoDelCarrito.setAttribute("data-id", planta.id);

        productoDelCarrito.innerHTML = `
            <div class="producto">
                    <div class="tituloDelProducto">${planta.titulo}</div>
                    <div class="precioDelProducto">${planta.precio}</div>
            </div>
                </div>
                <button class="aumentarCantidad">+</button>
                <button class="restarCantidad">+</button>
                <button class="eliminarProducto">Eliminar</button>
        
        `
        contenedorCarrito.appendChild(productoDelCarrito);
    })
};
