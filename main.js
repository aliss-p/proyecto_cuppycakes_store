//      PRODUCTOS
// DECLARACIÓN DE CLASE
class Productos{
    constructor (id, nombre, tipo, porciones, foto, precio, descripcion){
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.porciones = porciones
        this.foto = foto
        this.precio = precio
        this.descripcion = descripcion
    }
};

// // ARRAY DE PRODUCTOS
let listaDeProductos = []
//DESDE productos.json
fetch("productos.json")
.then(response => response.json())
.then(data => {
    for(let producto of data){
        let nuevoProducto = new Productos(producto.id, producto.nombre, producto.tipo, producto.porciones, producto.foto, producto.precio, producto.descripcion);
        listaDeProductos.push(nuevoProducto);
    };
    mostrarCards();
});

//CAPTURA DE ELEMENTOS DOM
let carritotbtn = document.getElementById("carritotbtn");
let plantillaDelCarrito = document.getElementById("plantillaDelCarrito");
let totalCarrito = document.getElementById("totalCarrito");
let acumulador;
let divDeCards = document.getElementById("plantilla");
let borrarbtn2 = document.getElementsByClassName("borrarbtn2")

//CREAR CARDS DE PRODUCTOS
function mostrarCards(){
    listaDeProductos.forEach((producto)=>{
        let nuevoProducto = document.createElement("div");
        nuevoProducto.innerHTML = `<article id="${producto.id}" class="card">
                                        <h1 class="card__title">${producto.nombre}</h1>
                                        <img src="${producto.foto}" alt="${producto.nombre}" class="card__pics">
                                        <div class="card__section">
                                            <p class="card__subtext">${producto.descripcion}</p>
                                            <p class="card__text">Precio: $${producto.precio}</p>
                                            <button id="agregarBtn${producto.id}" class="card__btn btn">Agregar al carrito</button>
                                        </div>
                                    </article>`;
        divDeCards.appendChild(nuevoProducto);
        //GUARDAR EN LOCAL
        localStorage.setItem("listaDeProductos", JSON.stringify(listaDeProductos))
        // BTN PARA AGREGAR AL CARRITO
        let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)
        //EVENTO PARA QUE EL BOTON AÑADA AL CARRITO
        btnAgregar.addEventListener("click", () => {aniadirAlCarrito(producto)})
    });
}

//  CARRITO
// ARRAY DE CARRITO
const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

// //FUNCIÓN PARA AÑADIR AL CARRITO
function aniadirAlCarrito(producto){
    let productoAgregado = carritoDeCompras.find((e) => (e.id == producto.id));
    if (productoAgregado == undefined){
        carritoDeCompras.push(producto);
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
        Swal.fire({
            icon: "success",
            text: `Agregaste ${producto.nombre} a tu carrito~`,
            confirmButtonText: 'Ok',
            buttonsStyling: false,
            background: '#735D78' ,
            width: '20em',
            height: '20em',
            color: '#090302' ,
        })
    }else{
        Swal.fire({
            icon: "warning",
            text: `Ya agregaste ${producto.nombre} a tu carrito~`,
            confirmButtonText: 'Ok',
            buttonsStyling: false,
            background: '#735D78' ,
            width: '20em',
            height: '20em',
            color: '#090302' ,
        })
    }
}

//CARGAR COMPRAS AL OFFCANVAS
plantillaDelCarrito.innerHTML = " " ;
carritoDeCompras.forEach((producto, id) => {
    plantillaDelCarrito.innerHTML += `<div id="${producto.id}" class="card2">
                                            <div>
                                                <h1 class="card__titulo">${producto.nombre}</h1>
                                                <p class="card__precio">Precio: $${producto.precio}</p>
                                                <button class="btn btn-secondary borrarbtn2" type="button" id="eliminarbtn${producto.id}">Borrar</button>
                                            </div>
                                            <div>
                                                <img src="${producto.foto}" alt="${producto.nombre}" class="card__pics2">
                                            </div>
                                        </div>`
    //Boton para borrar con alert
    document.getElementById(`eliminarbtn${producto.id}`).addEventListener('click', () =>{
        Swal.fire({
            icon: "warning",
            text: `Eliminaste ${producto.nombre} de tu carrito~`,
            confirmButtonText: 'Entendido',
            buttonsStyling: false,
            background: '#735D78' ,
            width: '20em',
            height: '15em',
            color: '#090302' ,
        });
        //Eliminar del dom
        let tarjeta = document.getElementById(`${producto.id}`);
        tarjeta.remove();
        //Eliminar del carrito
        carritoDeCompras.splice(id, 1);
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
    })
});

//TOTAL DE LAS COMPRAS
acumulador = 0;
totalCarrito.innerHTML = " "
carritoDeCompras.forEach((producto) => {
    acumulador += producto.precio
})
totalCarrito.innerHTML = `<div class="offcanvas-body" id="totalCarrito">
                                <p>El total de tu compra es de $${acumulador}</p>
                                <button class="btn btn-secondary" type="button">Comprar</button>
                            </div>`
localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));