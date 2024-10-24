

// total = 0;
// const productos = [
//     {
//         id: 1,
//         nombre: "Suculenta",
//         precio: 3000,
//     },
//     {
//         id: 2,
//         nombre: "Potus",
//         precio: 7000,
//     },
//     {
//         id: 3,
//         nombre: "Cactus",
//         precio: 2500,
//     },
//     {
//         id: 4,
//         nombre: "No me Olvides",
//         precio: 7000,
//     },
//     {
//         id: 5,
//         nombre: "Lengua de Suegra",
//         precio: 5000,
//     },
//     {
//         id: 6,
//         nombre: "Palo de Agua",
//         precio: 12000,
//     }
// ]



// alert("¡Bienvenido al carrito de compras!. Si deseas comprar un producto de la tienda, haz click en ACEPTAR");
// prompt(`Por favor agrega el nombre del producto a comprar`)

// const persona ={
//     nombre: "Juan",
//     edad: 20,
//     direccion: "Mendoza",
// }
//  // console.table : sale una table con las propiedades de persona
// console.table(persona)
// //para renombrar un valor:
// console.log((persona ["direccion"] = "Cordoba"))

// function Persona(nombre,edad,direccion){
//     this.nombre =nombre;
//     this.edad = edad;
//     this.direccion = direccion;
// }

// const persona1 = new Persona ("Graciela", 50, "Buenos Aires");
// const persona2 = new Persona ("Carlos", 60, "Jujuy");
// console.log(persona1)
// console.log(persona2)
// console.log ("nombre" in Persona);

// class Mascota{
//     constructor (nombre,edad,color){
//     this.nombre =nombre;
//     this.edad = edad;
//     this.color = color;
// }
// }
// const mascota1 = new Mascota ("Akali", 9, "Blanco y Negro")
// console.log(mascota1)


// function sumarNumeros(num1,num2){
//     let resultadoSuma = num1 + num2;
//     console.log(resultadoSuma);
// }
// sumarNumeros(3,3);



// function restaNumeros (num1,num2){
//     return num1 - num2;
// }
// let num1 = parseInt(prompt("Ingresa el primer numero"));
// let num2 = parseInt(prompt("Ingresa el segundo numero"));

// let resultado = restaNumeros(num1,num2);
// alert ( `El resultado de la resta de los dos numeros elegidos es ${resultado}` );


// let sumandoNumeros =(a,b)=> console.log(a+b);
// sumandoNumeros(3,3);


//ARRAY

// const nombres = ["Gaston", "Graciela", "Carlos","Akali", "Floki"]
// console.log(nombres);
// // nombres.pop();
// // console.log(nombres);

// console.log(nombres.indexOf("Akali"));
// console.log(nombres.join("#"));

// console.log(nombres.includes("Bob"));
// console.log(nombres.includes("Carlos"));

let plantas = [{
    nombre: "Suculenta",
    precio: 5000,
    cuidado: "facil",
},
{
    nombre: "Cactus",
    precio: 3700,
    cuidado: "facil",
},
{
    nombre: "Lengua de Suegra",
    precio: 7000,
    cuidado: "intermedio",
},
{
    nombre: "Margarita",
    precio: 6000,
    cuidado: "intermedio",
},
{
    nombre: "Jazmin",
    precio: 9500,
    cuidado: "dificil",
},
{
    nombre: "Orquidea",
    precio: 12000,
    cuidado: "dificil",
},
]



function principal (){
    let start;    
    do{
        start = prompt("¡Bienvenido a mi tienda de plantas! Selecciona una de las opciones \n - Comprar \n - Lista de productos \n - `Salir`");
    if( start === "comprar"){
        comprarPlanta(plantas);
    }else if( start === "lista de productos"){
        listaDeProductos(plantas);
    } 
} 
while ( start === "Salir" );
    alert("Gracias por visitar el sitio. Hasta pronto.");
} 

function comprarPlanta(plantas){
    let opcion = prompt("Si sabes el nombre del producto a comprar, escribelo. Sino, puedes ver la `Lista de productos`.").toLowerCase();
    let existeSuculenta= plantas.find((planta) => planta.nombre.toLowerCase() === opcion);
    let existeCactus = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
    let existeLenguaDeSuegra =  plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
    let existeMargarita =  plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
    let existeJazmin =  plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
    let existeOrquidea =  plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);



    while (true){ 

        if (existeSuculenta){
            alert(`Has agregado al carrito "${existeSuculenta.nombre}" .Precio $${existeSuculenta.precio} y cuidado "${existeSuculenta.cuidado}"`);
        }else if (existeCactus){
            alert(`Has agregado al carrito "${existeCactus.nombre}" .Precio $${existeCactus.precio} y cuidado "${existeCactus.cuidado}"`);
        }
        else if (existeLenguaDeSuegra){
            alert(`Has agregado al carrito "${existeLenguaDeSuegra.nombre}" .Precio $${existeLenguaDeSuegra.precio} y cuidado "${existeLenguaDeSuegra.cuidado}"`);
        }
        else if (existeMargarita){
            alert(`Has agregado al carrito "${existeMargarita.nombre}" .Precio $${existeMargarita.precio} y cuidado "${existeMargarita.cuidado}"`);
        }
        else if (existeJazmin){
            alert(`Has agregado al carrito "${existeJazmin.nombre}" .Precio $${existeJazmin.precio} y cuidado "${existeJazmin.cuidado}"`);
        }
        else if (existeOrquidea){
            alert(`Has agregado al carrito "${existeOrquidea.nombre}" .Precio $${existeOrquidea.precio} y cuidado "${existeOrquidea.cuidado}"`);
        }
        else if( opcion === "Lista de productos"){
            listaDeProductos(plantas);
        }
        else{
            alert("No has agregado ningun producto");
        }

        let fin = prompt("¿Deseas seguir comprando? (SI - NO)").toLowerCase();
        
        if (fin === "no") {
            let datos = alert("Has finalizado tu compra. Por favor completa tus datos para la entrega a tu domicilio.");
            datosDeCompra(datos); 
            break; 
        } else if (fin === "si") {
            opcion = prompt("Escribe el nombre del producto que quieres comprar o ve la lista de productos.").toLowerCase();
            existeSuculenta = plantas.find((planta) => planta.nombre.toLowerCase() === opcion);  
            existeCactus = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
            existeLenguaDeSuegra = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
            existeJazmin = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
            existeOrquidea = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
            existeMargarita = plantas.find ((planta) => planta.nombre.toLowerCase() === opcion);
        } else {
            console.log("Por favor, responde con 'SI' o 'NO'.");
        }
    }

    return opcion;
}




function listaDeProductos(plantas){
    console.table(plantas);
    // console.table(`Aqui te dejo la lista de productos disponibles en la tienda: ${plantas[0].nombre} $ ${plantas[0].precio} ${plantas[0].cuidado} \n ${plantas[1].nombre} $ ${plantas[1].precio} ${plantas[1].cuidado}`);
    // for (const propiedad in plantas){
    //     alert( ` Aqui te dejo la lista de productos disponibles en la tienda: \n ${plantas[0].nombre} $ ${plantas[0].precio} ${plantas[0].cuidado}`);
    // }
    let opcion = prompt("Si deseas comprar un productos, escribe `comprar`");
    if ( opcion === "salir"){
    return "salir";
} else if ( opcion === "comprar"){
    comprarPlanta(plantas);
}else {
    return opcion;
}
}

function datosDeCompra (datos){
    
    const nombre = prompt(`Ingresa tu nombre`);
    const apellido = prompt("Ingresa tu apellido");
    const nombreDeDomicilio = prompt("Ingresa la calle de tu domicilio");
    const numeroDeDomicilio = parseInt(prompt("Ingresa la altura de tu domicilio"));
    const numeroDeTelefono = parseInt(prompt("Ingresa tu numero de telefono"));
    
    alert(`DATOS: \n Nombre ${nombre} \n Apellido ${apellido} \n Domicilio ${nombreDeDomicilio} ${numeroDeDomicilio} \n Numero de Telefono ${numeroDeTelefono} \n (En caso de que algun dato sea erroneo, escribenos al correo tienda@planta.com.ar)` );
    
}


principal();





//     do{
//     start= prompt( "¡Bienvenido a mi tienda de plantas! Selecciona una de las opciones \n -Comprar \n -Ver lista de productos \n - `Salir`")
//     if ( start === "Comprar"){
//         start = comprarPlanta(plantas);
//     }
//     else if( start === "Lista de Productos"){
//     start = listaDeProductos(plantas);
//     }
// }
//     while (start !== "Salir");
//     alert ("¡Gracias por pasar por mi tienda!");
// }

