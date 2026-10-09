// ===============================
// GAMEZONE - SCRIPT PRINCIPAL
// ===============================


// ===============================
// FUNCIONES
// ===============================

function mostrarMensaje() {
    alert("🎮 ¡Bienvenido a GameZone! Explora, aprende y diviértete.");
}

function iniciarJuego() {
    alert("⚡ ¡El juego ha comenzado!");
}


// ===============================
// MODO OSCURO / CLARO (GLOBAL)
// ===============================

// 1. Aplicar el modo guardado INMEDIATAMENTE al cargar el script
const modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "claro") {
    document.body.classList.add("modo-claro");
} else {
    document.body.classList.remove("modo-claro");
}

// 2. Configurar el botón cuando el HTML esté listo
document.addEventListener("DOMContentLoaded", () => {
    const modoBtn = document.getElementById("modoBtn");

    if (modoBtn) {
        // Ajustar el icono inicial según el modo cargado
        if (document.body.classList.contains("modo-claro")) {
            modoBtn.textContent = "🌙";
        } else {
            modoBtn.textContent = "☀️";
        }

        // Listener del botón para alternar modos
        modoBtn.addEventListener("click", () => {
            document.body.classList.toggle("modo-claro");

            if (document.body.classList.contains("modo-claro")) {
                modoBtn.textContent = "🌙";
                localStorage.setItem("modo", "claro");
            } else {
                modoBtn.textContent = "☀️";
                localStorage.setItem("modo", "oscuro");
            }
        });
    }
});


// ===============================
// ANIMACIÓN AL CARGAR
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".hero, #gameCarousel, .seccion, .juego-card, .sobre, .paleta, .google-card"
    );

    elementos.forEach((elemento, index) => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(25px)";

        setTimeout(() => {

            elemento.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }, 100 + (index * 100));

    });

});


// ===============================
// TRANSICIÓN ENTRE PÁGINAS
// ===============================

document.querySelectorAll("a").forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const destino = this.href;

        if (
            !destino ||
            destino.includes("#") ||
            this.target === "_blank"
        ) {
            return;
        }

        if (destino.includes(".html")) {

            e.preventDefault();

            document.body.style.transition =
                "opacity 0.3s ease";

            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = destino;
            }, 300);

        }

    });

});


// ===============================
// EFECTO EN TARJETAS
// ===============================

document.querySelectorAll(".juego-card").forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "translateY(-8px)";
    });

    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "translateY(0)";
    });

});


// ===============================
// NAVEGACIÓN SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});