
const btn = document.getElementById('btn-ingresar');

const login = (e) =>{
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje")

    if (usuario === "admin" && password === "1234"){
        localStorage.setItem("usuario_logueado", "true");
        mensaje.innerHTML = 
        '<div class="alert alert-success">✅ ¡Acceso permitido! Redirigiendo...</div>';
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 1000)
    }else{
        mensaje.innerHTML =
        '<div class="alert alert-danger">❌ ¡Credenciales inválidas! Intente nuevamente</div>'
    }
}

const btnDeposit = document.getElementById("btn-deposit");

btnDeposit.addEventListener("click", (e) => {
    e.preventDefault();

    // Simulación básica de depósito
    const monto = prompt("Ingrese el monto a depositar:");

    if (monto && !isNaN(monto)) {
        document.getElementById("mensaje-deposit").innerHTML = 
            `<div class="alert alert-success">✅ Depósito de $${monto} realizado correctamente.</div>`;
    } else {
        document.getElementById("mensaje-deposit").innerHTML = 
            '<div class="alert alert-danger">❌ Monto inválido.</div>';
    }
});

const btnEnviar = document.getElementById("enviar-dinero");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    // Simulación básica de transferencia / agregar contacto
    const nombre = prompt("Ingrese el nombre del contacto:");
    const monto = prompt("Ingrese el monto a transferir:");

    if (nombre && monto && !isNaN(monto)) {
        document.getElementById("mensaje-enviar").innerHTML =
            `<div class="alert alert-success">✅ Transferencia de $${monto} a ${nombre} realizada correctamente.</div>`;
    } else {
        document.getElementById("mensaje-enviar").innerHTML =
            '<div class="alert alert-danger">❌ Datos inválidos. Intente nuevamente.</div>';
    }
});


btn.addEventListener('click', login)

$(document).ready(function() {
    // Detecta click en cualquier botón de formulario
    $('button').click(function(event){
        event.preventDefault(); // evita que recargue la página

        // Oculta el formulario más cercano con fade
        $(this).closest('form').fadeOut(500);

        // Agrega clase al body para animar el h1
        $('body').addClass('form-success');
    });
});

