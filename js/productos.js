
// PRODUCTOS
const productos = [
    // Picantes
    {
        id: "sabritasHabanero",
        titulo: "Sabritas Habanero",
        origen: "./sabritasHabanero-es.html",
        imagen: "./img/productos/sabritas-habanero.jpg",
        cantidad:"170gr",
        categoria: {
            nombre: "Picantes ▼",
            id: "picantes"
        },
        precio: 1.06
    },
    {
        id: "pulparindo",
        titulo: "20 Pulparindos",
        origen: "./pulparindo-es.html",
        imagen: "./img/productos/pulparindo.jpg",
        cantidad:"280gr",
        categoria: {
            nombre: "Picantes ▼",
            id: "picantes"
        },
        precio: 2.72
    },
    {
        id: "barcelHabanero",
        titulo: "Papas toreadas",
        origen: "./barcelHabanero-es.html",
        imagen: "./img/productos/barcel-habanero.jpg",
        cantidad:"170gr",
        categoria: {
            nombre: "Picantes ▼",
            id: "picantes"
        },
        precio: 2.48
    },
    // Sin Gluten
    {
        id: "mazapan",
        titulo: "12 Mazapanes",
        origen: "./mazapan-es.html",
        imagen: "./img/productos/mazapan.jpg",
        cantidad:"336gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 2.49
    },
    {
        id: "tarugos",
        titulo: "10 Tarugos",
        origen: "./tarugos-es.html",
        imagen: "./img/productos/tarugos.jpg",
        cantidad:"180gr",
        categoria: {
            nombre: "Picantes ▼",
            id: "picantes"
        },
        precio: 1.93
    },
    {
        id: "ollitaTamarindo",
        titulo: "Ollita de tamarindo",
        origen: "./ollita-es.html",
        imagen: "./img/productos/cazuelita.jpg",
        cantidad:"210gr",
        categoria: {
            nombre: "Picantes ▼",
            id: "picantes"
        },
        precio: 1.81
    },
    // Sin Gluten
    {
        id: "alegria",
        titulo: "10 Alegrías",
        origen: "./alegria-es.html",
        imagen: "./img/productos/alegrias.jpg",
        cantidad:"270gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 1.83
    },
    {
        id: "suspiros",
        titulo: "Suspiros",
        origen: "./suspiro-es.html",
        imagen: "./img/productos/suspiros.jpg",
        cantidad:"40gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 3.99
    },
    {
        id: "ate",
        titulo: "Ate Moreliano",
        origen: "./ate-es.html",
        imagen: "./img/productos/ate-membrillo.jpg",
        cantidad:"250gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 1.35
    },
    {
        id: "palanqueta",
        titulo: "20 Palanquetas",
        origen: "./palanqueta-es.html",
        imagen: "./img/productos/palanqueta.jpg",
        cantidad:"440gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 2.59
    },
    
    {
        id: "jamoncilloCalabaza",
        titulo: "3 Jamoncillos",
        origen: "./jamoncillo-pepita-es.html",
        imagen: "./img/productos/jamoncillo.jpg",
        cantidad:"204gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 3.23
    },
    {
        id: "limonRelleno",
        titulo: "10 Limones rellenos",
        origen: "./limon-relleno-es.html",
        imagen: "./img/productos/limon-relleno.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 9.43
    },
       {
        id: "jamoncilloMostachon",
        titulo: "Dulce de leche mostachón",
        origen: "./mostachon-es.html",
        imagen: "./img/productos/jamoncillo-mostachon.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 3.23
    },
    {
        id: "jamoncillo-macarron",
        titulo: "10 Macarrones",
        origen: "./macarron-es.html",
        imagen: "./img/productos/macarron.jpg",
        cantidad:"45gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 3.43
    },
    {
        id: "cocada",
        titulo: "16 Cocadas Veladoras",
        origen: "./cocada-es.html",
        imagen: "./img/productos/cocada.jpg",
        cantidad:"250gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 1.94
    },
    {
        id: "rollo-guayaba",
        titulo: "Rollo de guayaba",
        origen: "./rollo-guayaba-es.html",
        imagen: "./img/productos/rollo-guayaba.jpg",
        cantidad:"70gr",
        categoria: {
            nombre: "Libres de Gluten ▼",
            id: "sinGluten"
        },
        precio: 0.49
    },
    // Vegano
    {
        id: "muegano",
        titulo: "Muégano",
        origen: "./mueganos-es.html",
        imagen: "./img/productos/mueganos.jpg",
        cantidad:"89gr",
        categoria: {
            nombre: "Veganos ▼",
            id: "vegano"
        },
        precio: 2.96
    },
    {
        id: "pepitorias",
        titulo: "10 Pepitorias",
        origen: "./pepitoria-es.html",
        imagen: "./img/productos/pepitorias.jpg",
        cantidad:"25gr",
        categoria: {
            nombre: "Veganos ▼",
            id: "vegano"
        },
        precio: 2.14
    },

    // Otros
    {
        id: "tortita-santa",
        titulo: "10 Tortitas de Santa Clara",
        origen: "./Santa-clara-es.html",
        imagen: "./img/productos/tortita-santa.jpg",
        cantidad:"213gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 5.99
    },
     {
        id: "gaznate",
        titulo: "6 Gaznates",
        origen: "./gaznate-es.html",
        imagen: "./img/productos/gaznate.jpg",
        cantidad:"200gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 11.32
    }
    
    
];



let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos() {

    
    actualizarBotonesAgregar();
}



cargarProductos(productos);



function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}