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
let listaDeCotizaciones = JSON.parse(localStorage.getItem('listaDeCotizaciones')) || [];

//ELEMENTOS DEL DOM
let enviarCotizacionBtn = document.getElementById("enviarCotizacionBtn");
let nombreInput = document.getElementById("nombreInput")
let emailInput = document.getElementById("emailInput")
let telefonoInput = document.getElementById("telefonoInput")
let mensajeInput = document.getElementById("mensajeInput")

//CARGAR LAS COTIZAZIONES COMO OBJETOS AL ARRAY VACÍO
async function crearCotizacion(){
    let cotizacionCreada = new Cotizacion (listaDeCotizaciones.length+1, nombreInput.value, emailInput.value, telefonoInput.value, mensajeInput.value);
    //Push
    listaDeCotizaciones.push(cotizacionCreada);
    //LocalStorage -> Para guardar los mensajes del cliente
    localStorage.setItem("listaDeCotizaciones", JSON.stringify(listaDeCotizaciones));
};

//EVENTO PARA ENVIAR CON EL BOTÒN
enviarCotizacionBtn.addEventListener("click", ()=>{
    //Alerta
    Swal.fire({
        icon: "success",
        text: `Gracias por enviarnos tu consulta. Te responderemos al mail que nos indicaste a la brevedad~`,
        confirmButtonText: 'Ok',
        buttonsStyling: false,
        background: '#735D78',
        width: '22em',
        color: '#090302',
    });
    crearCotizacion();
    event.preventDefault();
});