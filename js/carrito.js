

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