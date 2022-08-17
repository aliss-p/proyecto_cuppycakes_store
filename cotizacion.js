// DECLARACIÓN DE CLASE - PRODUCTOS
class Cotizacion{
    constructor (id, nombre, email, telefono, mensaje){
        this.id = id
        this.nombre = nombre
        this.email = email
        this.telefono = telefono
        this.mensaje = mensaje
    }
};
// INSTANCIACIÓN DE OBJETO - COTIZACIONES
const cotizacion1 = new Cotizacion (1, "Victoria", "v@gmail", "264-400000", "Hola");
//ARRAY DE COTIZACIONES
const listaDeCotizaciones = [cotizacion1];
console.log(listaDeCotizaciones);

//CARGAR LAS COTIZAZIONES COMO OBJETOS AL ARRAY VACÍO
function crearCotizacion(){
    let nombreInput = document.getElementById("nombreInput")
    let emailInput = document.getElementById("emailInput")
    let telefonoInput = document.getElementById("telefonoInput")
    let mensajeInput = document.getElementById("mensajeInput")
    let cotizacionCreada = new Cotizacion (listaDeCotizaciones.length+1, nombreInput.value, emailInput.value, telefonoInput.value, mensajeInput.value)
    
    listaDeCotizaciones.push(cotizacionCreada)
    console.log(listaDeCotizaciones)
};
//BOTÓN DE ENVIAR COTIZACIÓN
const enviarCotizacionBtn = document.getElementById("enviarCotizacionBtn");
enviarCotizacionBtn.addEventListener("click", crearCotizacion);
console.log(listaDeCotizaciones);
