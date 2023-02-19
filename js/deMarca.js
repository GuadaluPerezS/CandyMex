
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
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <a href="${producto.origen}">
            <img class="producto-imagen mx-auto d-block" src="${producto.imagen}" alt="${producto.titulo}">
            </a>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <hr>
                <p class="producto-cantidad">${producto.cantidad}</p>
                <p class="producto-precio">$${producto.precio}
                <button class="producto-agregar" id="${producto.id}"><img src="img/cesto.png" width="40px" height="40px"></button></p>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}



cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos ▼";
            cargarProductos(productos);
        }

    })
});

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


