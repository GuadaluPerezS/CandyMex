// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




// PRODUCTOS
const productos = [
    // Chile
    {
        id: "10-tarugos",
        titulo: "10 Tarugos",
        imagen: "./img/productos/tarugos.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Chile ▼",
            id: "chile"
        },
        precio: 1000
    },
    {
        id: "Ollita-tamarindo",
        titulo: "Ollita de tamarindo",
        imagen: "./img/productos/cazuelita.jpg",
        cantidad:"28gr",
        categoria: {
            nombre: "Chile ▼",
            id: "chile"
        },
        precio: 1000
    },
    // Leche
    {
        id: "Jamoncillo-calabaza",
        titulo: "3 Jamoncillos",
        imagen: "./img/productos/jamoncillo.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
    {
        id: "Limon-relleno",
        titulo: "Limón relleno",
        imagen: "./img/productos/limon-relleno.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
       {
        id: "jamoncillo-mostachon",
        titulo: "Dulce de leche mostachón",
        imagen: "./img/productos/jamoncillo-mostachon.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
    {
        id: "jamoncillo-macarron",
        titulo: "Dulce de leche macarrón",
        imagen: "./img/productos/macarron.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
    {
        id: "cocada",
        titulo: "Cocada",
        imagen: "./img/productos/cocada.jpg",
        cantidad:"28gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
    {
        id: "rollo-guayaba",
        titulo: "Rollo de guayaba",
        imagen: "./img/productos/rollo-guayaba.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Leche ▼",
            id: "leche"
        },
        precio: 1000
    },
    // Trigo
    {
        id: "muegano",
        titulo: "Muégano",
        imagen: "./img/productos/mueganos.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Trigo ▼",
            id: "trigo"
        },
        precio: 1000
    },
    {
       	id: "10-pepitorias",
        titulo: "10 Pepitorias",
        imagen: "./img/productos/pepitorias.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Trigo ▼",
            id: "trigo"
        },
        precio: 1000
    },
    {
        id: "tortita-santa",
        titulo: "Tortita de Santa Clara",
        imagen: "./img/productos/tortita-santa.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Trigo ▼",
            id: "trigo"
        },
        precio: 1000
    },
     {
        id: "gaznate",
        titulo: "Gaznate",
        imagen: "./img/productos/gaznate.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Trigo ▼",
            id: "trigo"
        },
        precio: 1000
    },
    {
        id: "palanqueta",
        titulo: "Palanqueta",
        imagen: "./img/productos/palanqueta.jpg",
        cantidad:"260gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 1000
    },
    {
        id: "alegria",
        titulo: "Alegria",
        imagen: "./img/productos/alegrias.jpg",
        cantidad:"28gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 1000
    },
    {
        id: "suspiros",
        titulo: "suspiros",
        imagen: "./img/productos/suspiros.jpg",
        cantidad:"16gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 1000
    },
    {
        id: "ate",
        titulo: "Ate",
        imagen: "./img/productos/ate-membrillo.jpg",
        cantidad:"28gr",
        categoria: {
            nombre: "Otros ▼",
            id: "otros"
        },
        precio: 1000
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
            <img class="producto-imagen mx-auto d-block" src="${producto.imagen}" alt="${producto.titulo}">
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


