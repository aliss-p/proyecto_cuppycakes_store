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
// INSTANCIACIÓN DE OBJETOS
const producto1 = new Productos(1, "Torta con deco en buttercream", "torta", 15, "assets/t-4.webp", 5000, "Torta de 3 pisos, con decoración personalizada en buttercream.")
const producto2 = new Productos(2, "Number/letter cake", "torta", 15, "assets/t-2.webp", 4000, "Letter cake rellena con crema a elección del cliente.")
const producto3 = new Productos(3, "Torta con deco en pasta", "torta", 15, "assets/t-2.webp", 6500, "Torta de 3 pisos, con decoración personalizada realizada en pasta ballina.")
const producto4 = new Productos(4, "Minicake Selvanegra", "torta", 6, "assets/t-2.webp", 3500, "Mini torta de 6 porciones.")
const producto5 = new Productos(5, "Minicake Devil Cake", "torta", 6, "assets/t-2.webp", 3500, "Mini torta de 6 porciones.")
const producto6 = new Productos(6, "Cheesecake", "tarta", 12, "assets/t-3.webp", 2500, "Tarta de 6 porciones. Se puede solicitar decoración extra.")
const producto7 = new Productos(7, "Lemon pie", "tarta", 12, "assets/t-1.webp", 2500, "Tarta de 6 porciones. Se puede solicitar decoración extra.")
const producto8 = new Productos(8, "Chocotorta", "tarta", 12, "assets/op-2.webp", 2500, "Tarta de 6 porciones. Se puede solicitar decoración extra.")
const producto9 = new Productos(9, "Choco Muffin", "otros", 1, "assets/op-1.webp", 250, "Muffin de húmedo de chocolate.")
const producto10 = new Productos(10, "Choco-chips cookies", "otros", 3, "assets/op-3.webp", 250, "Pack de 3 galletas con chips de chocolate.")
const producto11 = new Productos(11, "Macarons", "otros", 6, "assets/op-4.webp", 2000, "Caja con 6 macarons.")

// ARRAY DE PRODUCTOS
const listaDeProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11];

//CAPTURA DE ELEMENTOS DOM
let carritotbtn = document.getElementById("carritotbtn");
let plantillaDelCarrito = document.getElementById("plantillaDelCarrito");
let totalCarrito = document.getElementById("totalCarrito");
let acumulador;
let divDeCards = document.getElementById("plantilla");

//CREAR CARDS DE PRODUCTOS
listaDeProductos.forEach((producto)=>{
    let nuevoProducto = document.createElement("div");
    nuevoProducto.innerHTML = `<article id="${producto.id}" class="card">
                                    <h1 class="card__title">${producto.nombre}</h1>
                                    <img src="${producto.foto}" alt="${producto.nombre}" class="card__pics">
                                    <div class="card__section">
                                        <p class="card__text">${producto.descripcion}</p>
                                        <p class="card__text">Precio: $${producto.precio}</p>
                                        <button id="agregarBtn${producto.id}" class="card__btn btn">Agregar al carrito <img src="../media/bx-cart-add.svg" alt="Agregar al carrito"></button>
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

//BUSCAR PRODUCTO
// let productoBuscado = listaDeProductos.find(producto => producto.nombre == "Chocotorta") ?? "No encontramos ese producto en nuestro stock."
// console.log(productoBuscado)

//  CARRITO
// ARRAY DE CARRITO
const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

// //FUNCIÓN PARA AÑADIR AL CARRITO
function aniadirAlCarrito(producto){
    let productoAgregado = carritoDeCompras.find((e) => (e.id == producto.id));
    if (productoAgregado == undefined){
        carritoDeCompras.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        Swal.fire({
            icon: "success",
            text: 'Agregaste ${producto.nombre} a tu carrito~',
            confirmButtonText: 'Entendido',
            buttonsStyling: false,
            background: '#735D78' ,
            width: '22em',
            color: '#090302' ,
        })
    }else{
        Swal.fire({
            icon: "warning",
            text: 'Ya agregaste ${producto.nombre} a tu carrito~',
            confirmButtonText: 'Entendido',
            buttonsStyling: false,
            background: '#735D78' ,
            width: '22em',
            color: '#090302' ,
        })
    }
    
}

//FUNCION PARA SUMAR COMPRAS
function total(carritoDeCompras){
    acumulador = 0;
    totalCarrito.innerHTML = " "
    carritoDeCompras.forEach((producto) => {
        acumulador += producto.precio
    })
    totalCarrito.innerHTML = `<div class="offcanvas-body" id="totalCarrito">
                                    <p>El total de tu compra es de $${acumulador}</p>
                                    <button class="btn btn-secondary" type="button">Comprar</button>
                                </div>`
}

//FUNCION PARA CARGAR COMPRAS AL OFFCANVAS
function mostrarCarrito(carritoDeCompras){

    plantillaDelCarrito.innerHTML = " "
    carritoDeCompras.forEach((producto) => {
        plantillaDelCarrito.innerHTML += `<div id="${producto.id}" class="card2">
                                                <div>
                                                    <h1 class="card__titulo">${producto.nombre}</h1>
                                                    <p class="card__precio">Precio: $${producto.precio}</p>
                                                    <button class="btn btn-secondary" type="button" id="eliminarbtn${producto.id}">Borrar</button>
                                                </div>
                                                <div>
                                                    <img src="${producto.foto}" alt="${producto.nombre}" class="card__pics2">
                                                </div>
                                            </div>`
    })
    total(carritoDeCompras)
}

//EVENTOS
//MOSTRAR CARRITO CON COSAS
carritotbtn.addEventListener("click", () => {
    mostrarCarrito(carritoDeCompras)
})


