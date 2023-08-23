//Definir carrito
const carrito = [];

//Obtener elementos del DOM
const catalogo = document.getElementById("catalogo");
const verCarrito = document.getElementById("carrito");
const contenedorCarrito= document.getElementById("contenedor-carrito");

// Función para guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
  
// Función para cargar el carrito desde el almacenamiento local
function cargarCarritoDesdeLocalStorage() {
    const carritoJSON = localStorage.getItem('carrito');
    if (carritoJSON) {
      carrito = JSON.parse(carritoJSON);
    }
}

//Crear catalogo con productos
productos.forEach((product) => {
  let contenido = document.createElement("div");
  contenido.className = "card text-bg-dark mb-3";
  contenido.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p>$${product.precio}CLP</p>
  `;
  catalogo.append(contenido)

//Crear botón para añadir al carrito
  const comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "Añadir";
  contenido.append(comprar);

//Añadir al carrito
  comprar.addEventListener('click',()=>{
    carrito.push({
        nombre: product.nombre,
        precio: product.precio,
    });
    guardarCarritoEnLocalStorage();
  });
});
    
// Cargar el carrito desde el almacenamiento local al cargar la página
cargarCarritoDesdeLocalStorage();

//Mostrar el carrito
verCarrito.addEventListener('click',()=>{
    const tituloContenedor = document.createElement("div");
    tituloContenedor.className="tituloContenedor";
    tituloContenedor.innerHTML = `<h1>Carrito</h1>`;
    contenedorCarrito.append(tituloContenedor);

//Generar listado con los productos añadidos
    carrito.forEach((product)=>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>$${product.precio}CLP</p>
    `;
    contenedorCarrito.append(carritoContent);
    });

//Calcular y mostrar el total del carrito
    const total = carrito.reduce((acumulador, elemento)=>acumulador+elemento.precio, 0);
    const mostrarTotal = document.createElement("div");
    mostrarTotal.className="mostrar-total";
    mostrarTotal.innerHTML = `total a pagar: $${total}CLP`;
    contenedorCarrito.append(mostrarTotal);  
});

