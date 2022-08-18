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
//ARRAY DE COTIZACIONES
const listaDeCotizaciones = [];
//CARGAR LAS COTIZAZIONES COMO OBJETOS AL ARRAY VACÍO
function crearCotizacion(){
    let nombreInput = document.getElementById("nombreInput")
    let emailInput = document.getElementById("emailInput")
    let telefonoInput = document.getElementById("telefonoInput")
    let mensajeInput = document.getElementById("mensajeInput")
    let cotizacionCreada = new Cotizacion (listaDeCotizaciones.length+1, nombreInput.value, emailInput.value, telefonoInput.value, mensajeInput.value)
    //Push
    listaDeCotizaciones.push(cotizacionCreada)
    //LocalStorage -> Para guardar los mensajes del cliente
    localStorage.setItem("listaDeCotizaciones", JSON.stringify(listaDeCotizaciones))
};
//BOTÓN DE ENVIAR COTIZACIÓN
const enviarCotizacionBtn = document.getElementById("enviarCotizacionBtn");
enviarCotizacionBtn.addEventListener("click", crearCotizacion);