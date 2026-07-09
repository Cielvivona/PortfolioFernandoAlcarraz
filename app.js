document.title = "Portfolio Ciel Vivona";

document.querySelector("#proyectos");

const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");

})

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    
    // cambiar el emoji del botón
    if (document.body.classList.contains("oscuro")) {
        btnTema.innerHTML = "☀️";
    } else {
        btnTema.innerHTML = "🌙";
    }
});


    const form = document.querySelector("#form-contacto");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");

    const errorEmail = document.querySelector("#error-email");

    form.addEventListener("submit", (e) => {
        if(!email.value.includes("@")){
            e.preventDefault();
            errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
        }
    })


    /* Contadores btn discos*/
    const botonEarl = document.querySelector ("#btn-Earl");
    const puntosEarl = document.querySelector("#puntos-earl");
    let totalEarl = 0;

    botonEarl.addEventListener("click", sumarPuntosEarl);

    function sumarPuntosEarl() {
        totalEarl++;

        puntosEarl.textContent = totalEarl;
    }

    const botonPenetration = document.querySelector ("#btn-Penetration");
    const puntosPenetration = document.querySelector("#puntos-penetration");
    let totalPenetration = 0;

    botonPenetration.addEventListener("click", sumarPuntosPenetration);

    function sumarPuntosPenetration() {
        totalPenetration++;

        puntosPenetration.textContent = totalPenetration;
    }

    const botonGravitation = document.querySelector ("#btn-Gravitation");
    const puntosGravitation = document.querySelector("#puntos-gravitation");
    let totalGravitation = 0;   

    botonGravitation.addEventListener("click", sumarPuntosGravitation);

    function sumarPuntosGravitation() {
        totalGravitation++;

        puntosGravitation.textContent = totalGravitation;
    }

    const botonAdultSwing = document.querySelector ('#btn-AdultSwing');
    const puntosAdultSwing = document.querySelector('#puntos-adultswing');
    let totalAdultSwing = 0;

    botonAdultSwing.addEventListener("click", sumarPuntosAdultSwing);

    function sumarPuntosAdultSwing() {
        totalAdultSwing++;

        puntosAdultSwing.textContent = totalAdultSwing;
    }

    const botonDisco4 = document.querySelector ('#btn-Alb4');
    const puntosDisco4 = document.querySelector('#puntos-Alb4');
    let totalDisco4 = 0;

    botonDisco4.addEventListener("click", sumarPuntosDisco4);

    function sumarPuntosDisco4() {
        totalDisco4++;

        puntosDisco4.textContent = totalDisco4;
    }

    const botonUnaLagrima = document.querySelector ('#btn-UnaLagrima');
    const puntosUnaLagrima = document.querySelector('#puntos-una-lagrima');
    let totalUnaLagrima = 0;

    botonUnaLagrima.addEventListener("click", sumarPuntosUnaLagrima);

    function sumarPuntosUnaLagrima() {
        totalUnaLagrima++;

        puntosUnaLagrima.textContent = totalUnaLagrima;
    }

    const botonFlowerOfEternity = document.querySelector ('#btn-FlowerOfEternity');
    const puntosFlowerOfEternity = document.querySelector('#puntos-flower-of-eternity');
    let totalFlowerOfEternity = 0;

    botonFlowerOfEternity.addEventListener("click", sumarPuntosFlowerOfEternity);

    function sumarPuntosFlowerOfEternity() {
        totalFlowerOfEternity++;

        puntosFlowerOfEternity.textContent = totalFlowerOfEternity;
    }
