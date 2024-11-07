import { actualizarListaDeCarrito, cargarProductos } from "./actualizacion.js";
import { crearProducto , agregarAlCarrito} from "./carrito.js";

document.addEventListener("DOMContentLoaded", ()=>{
    actualizarListaDeCarrito();
    agregarAlCarrito();
})

cargarProductos();

const botonDeCarrito = document.querySelector(".carrito");
const listaDeProductos = document.querySelector(".listaDelCarrito");

botonDeCarrito.addEventListener("click",()=>{
    listaDeProductos.classList.add("listaDelCarrito");
});



document.getElementById("contenedorCards").addEventListener("click", (evento) =>{
if(evento.currentTarget.classList.contains("botonComprar")){
    const producto = evento.currentTarget.closest("card");
    const tituloDeLaPlanta = producto.querySelector(".tituloCard").innerText;
    const precioDeLaPlanta = producto.querySelector(".precioCard").innerText;
    const imagenDeLaPlanta = producto.querySelector(".cardImg").innerText;
    const idDeLaPlanta = producto.getAttributte("id");

    const product = crearProducto(tituloDeLaPlanta, precioDeLaPlanta, imagenDeLaPlanta, idDeLaPlanta);
    
    agregarAlCarrito(product, 1);
    actualizarListaDeCarrito();
}
});
