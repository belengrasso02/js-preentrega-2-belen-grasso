


// const contenedorCards = document.querySelector("#contenedorCards");
// let botonesComprar = document.querySelectorAll(".botonComprar");
// let numero = document.querySelector("#numero");

// let productosEnCarrito = [];



// function cargarProductos (){

//     plantas.forEach( planta =>{
//         const div = document.createElement("div");
//         div.classList.add ("card");
//         div.innerHTML = `
//                 <img src="${planta.imagen}" alt="${planta.nombre}" class="cardImg">
//                     <div class="cardBody">
//                         <h2 class="tituloCard" >${planta.nombre}</h2>
//                     <p class="precioCard">$ ${planta.precio}</p>
//                 <button class="botonComprar" id="${planta.id}">Comprar</button>
//         `
//     })
// }

// cargarProductos(plantas);



// function actualizarBotonComprar (){
//     botonesComprar = document.querySelectorAll(".botonComprar");
//     botonesComprar.forEach(boton =>{
//         boton.addEventListener("click", agregarAlCarrito);
//     })

// }


// function agregarAlCarrito(evento) {

//     const idBoton = evento.currentTarget.id;
//     const productoAgregado = plantas.find(planta => planta.id === idBoton);

// if(productosEnCarrito.some(planta => planta.id === idBoton)){
//     const i = productosEnCarrito.findIndex(planta => planta.id === idBoton);
//     productosEnCarrito[i].cantidad++;
// }else{
//     productoAgregado.cantidad = 1;
//     productosEnCarrito.push(productoAgregado);
// }
// incrementarNumeroCarrito ()
// };


// function incrementarNumeroCarrito (){
//     let nuevoNumero = productosEnCarrito.reduce(( acumulador, planta) => 
//         acumulador + planta.cantidad, 0);
//         numero.innerText = nuevoNumero;
// };

const productosDelCarrito = [];

export function agregarAlCarrito (planta, cantidad){
    const existeEnElCarrito= productosDelCarrito.find((planta) => planta.id === planta.id);
    
    if(existeEnElCarrito){
        existeEnElCarrito.cantidad +=1;
    }else{
        productosDelCarrito.push({...planta, cantidad});
    }

}

export function obtenerProductosDelCarrito (){
    return [...productosDelCarrito];
}

export function crearProducto (id, titulo, precio){
    {id, titulo, precio};
}