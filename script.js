// ===============================
// GAMEZONE - SCRIPT PRINCIPAL
// ===============================


// ===============================
// FUNCIONES GLOBALES
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

if (modoGuardado === "oscuro") {
    document.body.classList.add("modo-claro");
} else {
    document.body.classList.remove("modo-claro");
}

// 2. Configurar el botón cuando el HTML esté listo
document.addEventListener("DOMContentLoaded", () => {
    const modoBtn = document.getElementById("modoBtn");

    if (modoBtn) {
        // Ajustar el icono inicial según el modo cargado
        const actualizarIconoModo = () => {
            const modoOscuro = document.body.classList.contains("modo-claro");
            modoBtn.textContent = modoOscuro ? "☀️" : "🌙";
            modoBtn.setAttribute("aria-label", modoOscuro ? "Activar modo claro" : "Activar modo oscuro");
            modoBtn.title = modoBtn.getAttribute("aria-label");
        };

        actualizarIconoModo();

        // Listener del botón para alternar modos
        modoBtn.addEventListener("click", () => {
            document.body.classList.toggle("modo-claro");
            localStorage.setItem(
                "modo",
                document.body.classList.contains("modo-claro") ? "oscuro" : "claro"
            );
            actualizarIconoModo();
        });
    }
});


// ===============================
// SISTEMA DE IDIOMA (ES / EN)
// ===============================

const traducciones = {
  es: {
    // --- Menú de Navegación común ---
    nav_inicio: "Inicio",
    nav_js: "JavaScript",
    nav_jquery: "jQuery",
    nav_json: "JSON",
    nav_hosting: "Hosting",
    nav_dominios: "Dominios",
    nav_quiz: "Quiz",
    nav_recursos: "Recursos",
    nav_google: "Google",
    nav_contacto: "Contáctanos",

    // --- Footer Común ---
    footer_texto: "Proyecto educativo de desarrollo web © 2026",

    // --- Página de Inicio (index.html) ---
    hero_etiqueta: "JUEGA. EXPLORA. APRENDE.",
    hero_titulo_1: "Historias que cobran vida.",
    hero_titulo_2: "Elige tu próxima aventura.",
    hero_texto: "Recorre algunos de tus juegos favoritos y descubre cómo se construye la web.",
    btn_explorar: "Ver juegos",
    btn_aprender: "Explorar tecnologías",
    seccion_destacados: "DESTACADOS",
    titulo_juegos_1: "JUEGOS",
    titulo_juegos_2: "POPULARES",
    cat_accion: "ACCIÓN",
    cat_aventura: "AVENTURA",
    cat_deportes: "DEPORTES",
    desc_gta: "Un mundo abierto lleno de acción, vehículos y aventuras.",
    desc_minecraft: "Explora, construye y crea tu propio mundo utilizando bloques.",
    desc_fc: "Vive la experiencia del fútbol y compite con tus equipos favoritos.",
    btn_ver_mas: "Ver en carrusel →",
    sobre_etiqueta: "SOBRE EL PROYECTO",
    sobre_titulo_1: "MÁS QUE UNA",
    sobre_titulo_2: "PÁGINA GAMER",
    sobre_desc: "GameZone es un sitio web creado para presentar información sobre videojuegos y, al mismo tiempo, aprender sobre diferentes tecnologías utilizadas en el desarrollo web.",
    stat_paginas: "PÁGINAS",
    stat_tecnologias: "TECNOLOGÍAS",
    stat_quiz: "QUIZ",
    paleta_etiqueta: "IDENTIDAD VISUAL",
    paleta_titulo_1: "PALETA DE",
    paleta_titulo_2: "COLORES",
    color_1_nombre: "Azul oscuro",
    color_1_desc: "Tecnología y confianza",
    color_2_nombre: "Azul brillante",
    color_2_desc: "Innovación y modernidad",
    color_3_nombre: "Verde",
    color_3_desc: "Energía y creatividad",
    paleta_desc: "La combinación de estos colores representa la tecnología, innovación y energía que caracterizan a GAMEZONE.",

    // --- Página de JavaScript (javascript.html) ---
    js_header_etiqueta: "WEB TECHNOLOGY",
    js_header_desc: "El lenguaje que agrega interacción y comportamiento a las páginas web.",
    js_info_1_titulo: "¿Qué es JavaScript?",
    js_info_1_p1: "JavaScript es un lenguaje de programación utilizado principalmente para crear páginas web interactivas.",
    js_info_1_p2: "Permite responder a las acciones del usuario, modificar contenido, crear animaciones y agregar diferentes funcionalidades.",
    js_comp_html: "Estructura",
    js_comp_css: "Diseño",
    js_comp_js: "Comportamiento",
    js_conceptos_etiqueta: "FUNDAMENTOS",
    js_conceptos_tit_1: "CONCEPTOS",
    js_conceptos_tit_2: "BÁSICOS",
    js_c1_titulo: "Variables",
    js_c1_desc: "Permiten almacenar información que puede utilizarse durante la ejecución del programa.",
    js_c2_titulo: "Funciones",
    js_c2_desc: "Son bloques de código que realizan una tarea específica.",
    js_c3_titulo: "Eventos",
    js_c3_desc: "Permiten ejecutar código cuando ocurre una acción como hacer click.",
    js_codigo_etiqueta: "EJEMPLO PRÁCTICO",
    js_codigo_tit_1: "JAVASCRIPT EN",
    js_codigo_desc: "En este ejemplo, JavaScript responde al botón y muestra un mensaje al usuario.",
    js_demo_tit: "PRUÉBALO",
    js_demo_desc: "Presiona el botón para ejecutar JavaScript.",
    js_btn_iniciar: "▶ INICIAR JUEGO",

    // --- Página de jQuery (jquery.html) ---
    jq_header_etiqueta: "JAVASCRIPT LIBRARY",
    jq_header_desc: "Una librería que facilita el trabajo con JavaScript y permite crear efectos de forma sencilla.",
    jq_info_1_titulo: "¿Qué es jQuery?",
    jq_info_1_p1: "jQuery es una librería de JavaScript creada para simplificar tareas comunes del desarrollo web.",
    jq_info_1_p2: "Permite trabajar fácilmente con elementos HTML, eventos, animaciones y efectos.",
    jq_info_2_titulo: "Sintaxis",
    jq_info_2_desc: "El símbolo $ es utilizado para seleccionar elementos de la página.",
    jq_seccion_etiqueta: "CARACTERÍSTICAS",
    jq_seccion_tit_1: "EFECTOS",
    jq_panel_desc: "Este panel puede ocultarse, mostrarse o deslizarse utilizando jQuery.",
    jq_ventajas_titulo: "Ventajas",
    jq_v1: "✓ Sintaxis sencilla.",
    jq_v2: "✓ Facilita las animaciones.",
    jq_v3: "✓ Simplifica algunas tareas.",
    jq_desventajas_titulo: "Desventajas",
    jq_d1: "Agrega una dependencia.",
    jq_d2: "• JavaScript moderno ofrece alternativas nativas.",

    // --- Página de JSON (json.html) ---
    json_header_etiqueta: "DATA TECHNOLOGY",
    json_header_desc: "Un formato utilizado para almacenar e intercambiar información entre aplicaciones.",
    json_info_1_titulo: "¿Qué es JSON?",
    json_info_1_p1: "JSON significa JavaScript Object Notation. Es un formato ligero utilizado para representar y transportar datos.",
    json_info_1_p2: "Es muy utilizado en páginas web, aplicaciones y APIs para enviar información entre clientes y servidores.",
    json_info_2_titulo: "Clave y valor",
    json_seccion_etiqueta: "ESTRUCTURA",
    json_seccion_tit_1: "OBJETOS Y",
    json_seccion_tit_2: "ARREGLOS",
    json_c1_titulo: "Objeto",
    json_c1_desc: "Contiene información mediante pares de clave y valor.",
    json_c2_titulo: "Arreglo",
    json_c2_desc: "Permite almacenar varios valores dentro de una lista.",
    json_c3_titulo: "APIs",
    json_c3_desc: "JSON permite intercambiar información entre aplicaciones.",
    json_codigo_etiqueta: "EJEMPLO GAMER",
    json_codigo_tit_1: "DATOS DE UN",
    json_codigo_tit_2: "VIDEOJUEGO",
    json_codigo_desc: "Una aplicación podría utilizar JSON para recibir información sobre videojuegos desde un servidor.",

    // --- Página de Hosting (hosting.html) ---
    hosting_header_etiqueta: "WEB INFRASTRUCTURE",
    hosting_header_desc: "El servicio que permite almacenar un sitio web y hacerlo accesible desde Internet.",
    hosting_seccion_etiqueta: "TIPOS DE HOSTING",
    hosting_seccion_tit_1: "¿DÓNDE VIVE TU",
    hosting_seccion_tit_2: "PÁGINA?",
    hosting_c1_titulo: "Compartido",
    hosting_c1_desc: "Varios sitios web utilizan los recursos de un mismo servidor.",
    hosting_c2_titulo: "VPS",
    hosting_c2_desc: "Un servidor físico se divide en servidores virtuales con recursos asignados.",
    hosting_c3_titulo: "Nube",
    hosting_c3_desc: "Utiliza diferentes servidores para ofrecer recursos y disponibilidad.",
    hosting_codigo_etiqueta: "DESPLIEGUE",
    hosting_codigo_tit_1: "¿QUÉ ES",
    hosting_codigo_tit_2: "VERCEL?",
    hosting_codigo_p1: "Vercel es una plataforma que permite desplegar proyectos web y hacerlos accesibles desde Internet.",
    hosting_codigo_p2: "Puede conectarse con un repositorio de GitHub para publicar automáticamente los cambios.",
    hosting_panel_desc: "Código → Repositorio → Despliegue → Sitio web",

    // --- Página de Dominios (dominios.html) ---
    dom_header_tit: "DOMINIOS",
    dom_header_desc: "Conoce qué son los dominios y cómo funcionan en Internet.",
    dom_que_es_tit: "¿Qué es un dominio?",
    dom_que_es_desc: "Un dominio es el nombre que utilizamos para entrar a un sitio web sin tener que recordar una dirección IP. Por ejemplo: www.gamezone.com.",
    dom_tipos_tit: "Tipos de dominios",
    dom_com_desc: "Se utiliza principalmente para sitios comerciales y empresas.",
    dom_org_desc: "Es común en organizaciones y proyectos sin fines comerciales.",
    dom_net_desc: "Originalmente relacionado con redes y servicios de Internet.",
    dom_func_tit: "¿Cómo funciona un dominio?",
    dom_proc_tit: "🌐 Proceso de conexión",
    dom_p1: "1. Dominio → El usuario escribe el nombre del sitio.",
    dom_p2: "2. DNS → Busca la dirección IP correspondiente.",
    dom_p3: "3. Servidor → Encuentra dónde está almacenado el sitio.",
    dom_p4: "4. Página web → El contenido se muestra en el navegador.",
    dom_ejemplo_tit: "🔗 Ejemplo",
    dom_ejemplo_desc: "Si GameZone tuviera un dominio llamado www.gamezone.com, los usuarios podrían escribirlo en su navegador para acceder al sitio.",
    dom_fuente_tit: "📚 Fuente",
    dom_fuente_desc: "Información consultada en recursos educativos sobre dominios, DNS y funcionamiento de Internet.",

    // --- Herramientas de Google (herramientas-google.html) ---
    g_header_tit: "15 HERRAMIENTAS DE GOOGLE",
    g_header_desc: "Conoce algunas herramientas gratuitas de Google y descubre para qué sirven.",
    g_seccion_etiqueta: "GOOGLE TOOLS",
    g_seccion_tit_1: "HERRAMIENTAS",
    g_seccion_tit_2: "GRATUITAS",
    g1_desc: "Permite almacenar archivos, documentos, imágenes y otros contenidos en la nube.",
    g1_uso: "Uso: guardar y compartir archivos.",
    g2_desc: "Es una herramienta para crear y editar documentos de texto desde Internet.",
    g2_uso: "Uso: trabajos, informes y documentos.",
    g3_desc: "Permite crear hojas de cálculo, organizar información y realizar operaciones.",
    g3_uso: "Uso: tablas, datos y cálculos.",
    g4_desc: "Sirve para crear presentaciones con texto, imágenes y diferentes diseños.",
    g4_uso: "Uso: exposiciones y presentaciones.",
    g5_desc: "Permite crear formularios, encuestas y cuestionarios en línea.",
    g5_uso: "Uso: recopilar respuestas y datos.",
    g6_desc: "Permite crear sitios web de manera sencilla sin necesidad de programar.",
    g6_uso: "Uso: crear páginas web.",
    g7_desc: "Servicio para realizar videollamadas y reuniones en línea.",
    g7_uso: "Uso: clases y reuniones virtuales.",
    g8_desc: "Permite organizar eventos, actividades, tareas y recordatorios.",
    g8_uso: "Uso: organizar horarios.",
    g9_desc: "Permite crear notas, listas y recordatorios para organizar información.",
    g9_uso: "Uso: tomar notas rápidamente.",
    g10_desc: "Permite buscar lugares, consultar mapas y obtener indicaciones.",
    g10_uso: "Uso: encontrar lugares y rutas.",
    g11_desc: "Servicio para almacenar, organizar y administrar fotografías y videos.",
    g11_uso: "Uso: guardar y organizar fotos.",
    g12_desc: "Permite traducir palabras, frases y textos entre diferentes idiomas.",
    g12_uso: "Uso: traducción de idiomas.",
    g13_desc: "Plataforma educativa para administrar clases, tareas y materiales.",
    g13_uso: "Uso: educación virtual.",
    g14_desc: "Herramienta de inteligencia artificial que ayuda a generar y analizar información.",
    g14_uso: "Uso: asistencia con inteligencia artificial.",
    g15_desc: "Motor de búsqueda que permite encontrar información y sitios web en Internet.",
    g15_uso: "Uso: buscar información.",

    // --- Cuestionario (cuestionario.html) ---
    quiz_header_etiqueta: "LEVEL UP",
    quiz_header_desc: "Pon a prueba lo que aprendiste sobre tecnologías web.",
    p1_pregunta: "¿Qué hace JavaScript?",
    p1_a: "Crear solamente imágenes",
    p1_b: "Agregar comportamiento e interacción",
    p1_c: "Crear servidores físicos",
    p2_pregunta: "¿Qué símbolo utiliza jQuery?",
    p3_pregunta: "¿Qué significa JSON?",
    p4_pregunta: "¿Qué es un dominio?",
    p4_a: "El nombre de un videojuego",
    p4_b: "Una dirección que identifica un sitio web",
    p4_c: "Un lenguaje de programación",
    p5_pregunta: "¿Qué permite hacer un Web Hosting?",
    p5_a: "Alojar un sitio web",
    p5_b: "Crear videojuegos automáticamente",
    p5_c: "Crear una computadora",
    btn_quiz: "⚡ VER RESULTADO",

    // --- Página de Contáctanos (contactanos.html) ---
    contacto_titulo: "🎮 Contáctanos",
    contacto_subtitulo: "¿Tienes alguna pregunta o sugerencia? ¡Escríbenos!",
    label_nombre: "Nombre",
    label_correo: "Correo electrónico",
    label_mensaje: "Mensaje",
    btn_enviar: "Enviar mensaje",
    link_volver: "← Volver al inicio"
  },
  en: {
    // --- Common Navigation ---
    nav_inicio: "Home",
    nav_js: "JavaScript",
    nav_jquery: "jQuery",
    nav_json: "JSON",
    nav_hosting: "Hosting",
    nav_dominios: "Domains",
    nav_quiz: "Quiz",
    nav_recursos: "Resources",
    nav_google: "Google",
    nav_contacto: "Contact Us",

    // --- Common Footer ---
    footer_texto: "Web development educational project © 2026",

    // --- Home Page (index.html) ---
    hero_etiqueta: "PLAY. EXPLORE. LEARN.",
    hero_titulo_1: "Stories that come to life.",
    hero_titulo_2: "Choose your next adventure.",
    hero_texto: "Take a look at some favorite games and discover how the web is built.",
    btn_explorar: "Browse games",
    btn_aprender: "Explore web tech",
    seccion_destacados: "FEATURED",
    titulo_juegos_1: "POPULAR",
    titulo_juegos_2: "GAMES",
    cat_accion: "ACTION",
    cat_aventura: "ADVENTURE",
    cat_deportes: "SPORTS",
    desc_gta: "An open world full of action, vehicles, and adventures.",
    desc_minecraft: "Explore, build, and create your own world using blocks.",
    desc_fc: "Live the football experience and compete with your favorite teams.",
    btn_ver_mas: "View in carousel →",
    sobre_etiqueta: "ABOUT THE PROJECT",
    sobre_titulo_1: "MORE THAN A",
    sobre_titulo_2: "GAMER PAGE",
    sobre_desc: "GameZone is a website created to present information about video games and, at the same time, learn about different technologies used in web development.",
    stat_paginas: "PAGES",
    stat_tecnologias: "TECHNOLOGIES",
    stat_quiz: "QUIZ",
    paleta_etiqueta: "VISUAL IDENTITY",
    paleta_titulo_1: "COLOR",
    paleta_titulo_2: "PALETTE",
    color_1_nombre: "Dark blue",
    color_1_desc: "Technology and trust",
    color_2_nombre: "Bright blue",
    color_2_desc: "Innovation and modernity",
    color_3_nombre: "Green",
    color_3_desc: "Energy and creativity",
    paleta_desc: "The combination of these colors represents the technology, innovation, and energy that characterize GAMEZONE.",

    // --- JavaScript Page (javascript.html) ---
    js_header_etiqueta: "WEB TECHNOLOGY",
    js_header_desc: "The language that adds interaction and behavior to web pages.",
    js_info_1_titulo: "What is JavaScript?",
    js_info_1_p1: "JavaScript is a programming language primarily used to create interactive web pages.",
    js_info_1_p2: "It allows you to respond to user actions, modify content, create animations, and add various features.",
    js_comp_html: "Structure",
    js_comp_css: "Design",
    js_comp_js: "Behavior",
    js_conceptos_etiqueta: "FUNDAMENTALS",
    js_conceptos_tit_1: "BASIC",
    js_conceptos_tit_2: "CONCEPTS",
    js_c1_titulo: "Variables",
    js_c1_desc: "They allow storing information that can be used during program execution.",
    js_c2_titulo: "Functions",
    js_c2_desc: "They are blocks of code that perform a specific task.",
    js_c3_titulo: "Events",
    js_c3_desc: "They allow executing code when an action occurs, such as clicking.",
    js_codigo_etiqueta: "PRACTICAL EXAMPLE",
    js_codigo_tit_1: "JAVASCRIPT IN",
    js_codigo_desc: "In this example, JavaScript responds to the button and shows a message to the user.",
    js_demo_tit: "TRY IT",
    js_demo_desc: "Press the button to run JavaScript.",
    js_btn_iniciar: "▶ START GAME",

    // --- jQuery Page (jquery.html) ---
    jq_header_etiqueta: "JAVASCRIPT LIBRARY",
    jq_header_desc: "A library that simplifies working with JavaScript and enables creating easy effects.",
    jq_info_1_titulo: "What is jQuery?",
    jq_info_1_p1: "jQuery is a JavaScript library created to simplify common web development tasks.",
    jq_info_1_p2: "It allows working easily with HTML elements, events, animations, and effects.",
    jq_info_2_titulo: "Syntax",
    jq_info_2_desc: "The $ symbol is used to select elements on the page.",
    jq_seccion_etiqueta: "FEATURES",
    jq_seccion_tit_1: "EFFECTS",
    jq_panel_desc: "This panel can be hidden, shown, or toggled using jQuery.",
    jq_ventajas_titulo: "Advantages",
    jq_v1: "✓ Simple syntax.",
    jq_v2: "✓ Facilitates animations.",
    jq_v3: "✓ Simplifies several tasks.",
    jq_desventajas_titulo: "Disadvantages",
    jq_d1: "Adds a external dependency.",
    jq_d2: "• Modern JavaScript offers native alternatives.",

    // --- JSON Page (json.html) ---
    json_header_etiqueta: "DATA TECHNOLOGY",
    json_header_desc: "A format used to store and exchange information between applications.",
    json_info_1_titulo: "What is JSON?",
    json_info_1_p1: "JSON stands for JavaScript Object Notation. It is a lightweight format used to represent and transport data.",
    json_info_1_p2: "It is widely used in web pages, applications, and APIs to send data between clients and servers.",
    json_info_2_titulo: "Key and Value",
    json_seccion_etiqueta: "STRUCTURE",
    json_seccion_tit_1: "OBJECTS AND",
    json_seccion_tit_2: "ARRAYS",
    json_c1_titulo: "Object",
    json_c1_desc: "Contains information through key and value pairs.",
    json_c2_titulo: "Array",
    json_c2_desc: "Allows storing multiple values within a list.",
    json_c3_titulo: "APIs",
    json_c3_desc: "JSON enables exchanging information between applications.",
    json_codigo_etiqueta: "GAMER EXAMPLE",
    json_codigo_tit_1: "DATA OF A",
    json_codigo_tit_2: "VIDEO GAME",
    json_codigo_desc: "An application could use JSON to receive video game data from a server.",

    // --- Hosting Page (hosting.html) ---
    hosting_header_etiqueta: "WEB INFRASTRUCTURE",
    hosting_header_desc: "The service that allows storing a website and making it accessible on the Internet.",
    hosting_seccion_etiqueta: "HOSTING TYPES",
    hosting_seccion_tit_1: "WHERE DOES YOUR",
    hosting_seccion_tit_2: "PAGE LIVE?",
    hosting_c1_titulo: "Shared",
    hosting_c1_desc: "Multiple websites use the resources of a single server.",
    hosting_c2_titulo: "VPS",
    hosting_c2_desc: "A physical server is divided into virtual servers with dedicated resources.",
    hosting_c3_titulo: "Cloud",
    hosting_c3_desc: "Uses multiple servers to offer flexible resources and high availability.",
    hosting_codigo_etiqueta: "DEPLOYMENT",
    hosting_codigo_tit_1: "WHAT IS",
    hosting_codigo_tit_2: "VERCEL?",
    hosting_codigo_p1: "Vercel is a platform that allows deploying web projects to make them accessible online.",
    hosting_codigo_p2: "It can connect with a GitHub repository to automatically publish changes.",
    hosting_panel_desc: "Code → Repository → Deployment → Website",

    // --- Domains Page (dominios.html) ---
    dom_header_tit: "DOMAINS",
    dom_header_desc: "Learn what domains are and how they function on the Internet.",
    dom_que_es_tit: "What is a domain?",
    dom_que_es_desc: "A domain is the name used to access a website without remembering an IP address. For example: www.gamezone.com.",
    dom_tipos_tit: "Domain Types",
    dom_com_desc: "Used primarily for commercial sites and businesses.",
    dom_org_desc: "Common for organizations and non-profit projects.",
    dom_net_desc: "Originally related to networking and Internet services.",
    dom_func_tit: "How does a domain work?",
    dom_proc_tit: "🌐 Connection Process",
    dom_p1: "1. Domain → The user types the website name.",
    dom_p2: "2. DNS → Searches for the matching IP address.",
    dom_p3: "3. Server → Finds where the site is stored.",
    dom_p4: "4. Web Page → Content displays in the browser.",
    dom_ejemplo_tit: "🔗 Example",
    dom_ejemplo_desc: "If GameZone had a domain named www.gamezone.com, users could type it in their browser to access the site.",
    dom_fuente_tit: "📚 Source",
    dom_fuente_desc: "Information retrieved from educational resources on domains, DNS, and Internet infrastructure.",

    // --- Google Tools (herramientas-google.html) ---
    g_header_tit: "15 GOOGLE TOOLS",
    g_header_desc: "Discover free Google tools and learn what they are used for.",
    g_seccion_etiqueta: "GOOGLE TOOLS",
    g_seccion_tit_1: "FREE",
    g_seccion_tit_2: "TOOLS",
    g1_desc: "Allows storing files, documents, images, and other contents in the cloud.",
    g1_uso: "Usage: save and share files.",
    g2_desc: "A tool for creating and editing text documents directly online.",
    g2_uso: "Usage: assignments, reports, and documents.",
    g3_desc: "Allows creating spreadsheets, organizing information, and performing calculations.",
    g3_uso: "Usage: tables, data, and math.",
    g4_desc: "Used to create slideshow presentations with text, images, and visual designs.",
    g4_uso: "Usage: lectures and presentations.",
    g5_desc: "Allows creating forms, surveys, and online quizzes.",
    g5_uso: "Usage: gather responses and data.",
    g6_desc: "Allows creating websites easily without needing coding skills.",
    g6_uso: "Usage: build web pages.",
    g7_desc: "Service for video calling and online meetings.",
    g7_uso: "Usage: virtual classes and meetings.",
    g8_desc: "Allows organizing events, activities, tasks, and reminders.",
    g8_uso: "Usage: schedule management.",
    g9_desc: "Allows creating notes, lists, and reminders to organize information.",
    g9_uso: "Usage: quick note taking.",
    g10_desc: "Allows searching locations, viewing maps, and getting directions.",
    g10_uso: "Usage: find places and routes.",
    g11_desc: "Service for storing, organizing, and managing photos and videos.",
    g11_uso: "Usage: save and organize photos.",
    g12_desc: "Allows translating words, phrases, and texts between different languages.",
    g12_uso: "Usage: language translation.",
    g13_desc: "Educational platform to manage classes, assignments, and learning materials.",
    g13_uso: "Usage: virtual education.",
    g14_desc: "Artificial intelligence tool that helps generate and analyze information.",
    g14_uso: "Usage: AI assistance.",
    g15_desc: "Search engine that allows finding information and websites on the Internet.",
    g15_uso: "Usage: search information.",

    // --- Quiz Page (cuestionario.html) ---
    quiz_header_etiqueta: "LEVEL UP",
    quiz_header_desc: "Test what you learned about web technologies.",
    p1_pregunta: "What does JavaScript do?",
    p1_a: "Only create images",
    p1_b: "Add behavior and interaction",
    p1_c: "Create physical servers",
    p2_pregunta: "What symbol does jQuery use?",
    p3_pregunta: "What does JSON stand for?",
    p4_pregunta: "What is a domain?",
    p4_a: "The name of a video game",
    p4_b: "An address that identifies a website",
    p4_c: "A programming language",
    p5_pregunta: "What does Web Hosting allow you to do?",
    p5_a: "Host a website",
    p5_b: "Create video games automatically",
    p5_c: "Build a physical computer",
    btn_quiz: "⚡ SHOW RESULT",

    // --- Contact Page (contactanos.html) ---
    contacto_titulo: "🎮 Contact Us",
    contacto_subtitulo: "Do you have any questions or suggestions? Write to us!",
    label_nombre: "Name",
    label_correo: "Email",
    label_mensaje: "Message",
    btn_enviar: "Send message",
    link_volver: "← Back to home"
  }
};

// Cargar idioma guardado o usar español por defecto
let idiomaActual = localStorage.getItem("idioma") || "es";

function aplicarTraducciones(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (traducciones[lang] && traducciones[lang][clave]) {
      el.textContent = traducciones[lang][clave];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const btnIdioma = document.getElementById("btn-idioma");
    const btnLangText = document.getElementById("btn-lang-text");

    // Aplicar idioma guardado al cargar la página
    aplicarTraducciones(idiomaActual);
    if (btnLangText) {
        btnLangText.textContent = idiomaActual === "es" ? "EN" : "ES";
    }

    if (btnIdioma) {
        btnIdioma.addEventListener("click", () => {
            idiomaActual = idiomaActual === "es" ? "en" : "es";
            btnLangText.textContent = idiomaActual === "es" ? "EN" : "ES";
            
            aplicarTraducciones(idiomaActual);
            localStorage.setItem("idioma", idiomaActual);
        });
    }
});


// ===============================
// TARJETAS DE JUEGOS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.getElementById("gameCarousel");

    document.querySelectorAll("[data-game-slide]").forEach((boton) => {
        boton.addEventListener("click", () => {
            const indice = Number(boton.dataset.gameSlide);
            const diapositivas = carrusel?.querySelectorAll(".carousel-item");

            if (!carrusel || !diapositivas || !diapositivas[indice]) {
                return;
            }

            if (window.bootstrap?.Carousel) {
                const instancia = window.bootstrap.Carousel.getOrCreateInstance(carrusel);
                instancia.pause();
                instancia.to(indice);
            } else {
                diapositivas.forEach((diapositiva, posicion) => {
                    diapositiva.classList.toggle("active", posicion === indice);
                });
            }

            carrusel.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
});


// ===============================
// NAVEGACIÓN SUAVE PARA ANCLAS (#)
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