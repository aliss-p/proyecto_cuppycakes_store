// DECLARACIÓN DE CLASE - PRODUCTOS
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
const listaDeProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]
console.log(listaDeProductos)//mostrar reservas existentes

//CREAR CARDS DE PRODUCTOS
let divDeCards = document.getElementById("plantilla");
listaDeProductos.forEach((producto)=>{
    let nuevoProducto = document.createElement("div");
    nuevoProducto.innerHTML = `<article id="${producto.id}" class="card">
                                    <h1 class="card__title">${producto.nombre}</h1>
                                    <img src="${producto.foto}" alt="${producto.nombre}" class="card__pics">
                                    <div class="card__section">
                                        <p class="card__text">${producto.descripcion}</p>
                                        <p class="card__text">Precio: $${producto.precio}</p>
                                        <button class="card__btn btn">Comprar</button>
                                    </div>
                                </article>`;
    divDeCards.appendChild(nuevoProducto);
})
// Anuncio de agredado al carrito
document.querySelectorAll('.card__btn').forEach(btn => {btn.addEventListener('click', () => {alert('Producto agregado al carrito');})})