let cssGenerado = "";
let mensajeCliente = "";

const sectores = {
  generico: "Servicio profesional, atención directa y presupuesto rápido.",
  peluqueria: "Cortes, coloración y tratamientos capilares con atención cercana.",
  aire: "Instalación, mantenimiento y reparación de aire acondicionado.",
  cerrajeria: "Fabricación e instalación de puertas, rejas y trabajos metálicos.",
  jardineria: "Mantenimiento de jardines, podas y cuidado de espacios exteriores.",
  electricista: "Instalaciones eléctricas, averías y soluciones para viviendas y negocios.",
  reformas: "Reformas, mejoras y trabajos profesionales para viviendas y locales.",
  restaurante: "Comida, reservas y atención cercana para disfrutar sin complicaciones."
};

const paletas = {
  verde: ["#0f766e", "#115e59"],
  azul: ["#0284c7", "#0f172a"],
  negro: ["#111827", "#030712"],
  rojo: ["#dc2626", "#7f1d1d"],
  rosa: ["#be185d", "#831843"],
  dorado: ["#b45309", "#1f2937"]
};

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generarWeb() {
  const sector = document.getElementById("sector").value;
  const plantilla = document.getElementById("plantilla").value;
  const paleta = document.getElementById("paleta").value;

  const negocio = document.getElementById("negocio").value.trim() || "Negocio local";
  const ciudad = document.getElementById("ciudad").value.trim() || "Murcia";
  const direccion = document.getElementById("direccion").value.trim() || ciudad;
  const telefono = document.getElementById("telefono").value.trim() || "600000000";
  const whatsapp = document.getElementById("whatsapp").value.trim() || telefono;
  const usuarioGithub = document.getElementById("usuarioGithub").value.trim() || "tuusuario";

  const keyword = document.getElementById("keyword").value.trim() || `${negocio} en ${ciudad}`;
  const tituloSeo = document.getElementById("tituloSeo").value.trim() || `${negocio} en ${ciudad} | Presupuesto rápido`;
  const descripcionSeo = document.getElementById("descripcionSeo").value.trim() || `${negocio} en ${ciudad}. Atención directa, presupuesto rápido y contacto por WhatsApp.`;

  const servicios = document.getElementById("servicios").value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const serviciosFinales = servicios.length ? servicios : [
    "Servicio principal",
    "Presupuesto sin compromiso",
    "Atención personalizada"
  ];

  const slug = limpiarTexto(`${negocio}-${ciudad}`);
  const urlWeb = `https://${usuarioGithub}.github.io/${slug}/`;
  const direccionMapa = encodeURIComponent(direccion + " " + ciudad);

  const colores = paletas[paleta];
  const colorPrincipal = colores[0];
  const colorSecundario = colores[1];

  const serviciosCards = serviciosFinales.map(servicio => {
    const slugServicio = limpiarTexto(servicio);
    return `
      <article class="service-card">
        <h3>${servicio}</h3>
        <p>Servicio de ${servicio.toLowerCase()} en ${ciudad}, con atención directa, explicación clara y presupuesto adaptado.</p>
        <a href="${slugServicio}.html" class="link-card">Ver servicio</a>
      </article>
    `;
  }).join("");

  const plantillaClase = `template-${plantilla}`;

  cssGenerado = `
:root {
  --primary: ${colorPrincipal};
  --primary-dark: ${colorSecundario};
  --green: #22c55e;
  --dark: #111827;
  --text: #1f2937;
  --muted: #6b7280;
  --soft: #f3f4f6;
  --white: #ffffff;
  --radius: 22px;
  --shadow: 0 18px 40px rgba(0,0,0,0.12);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.6;
}

a { text-decoration: none; }

.container {
  width: min(1120px, 92%);
  margin: auto;
}

.header {
  background: var(--white);
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.logo {
  font-weight: 900;
  color: var(--dark);
  font-size: 20px;
}

.nav {
  display: flex;
  gap: 18px;
  align-items: center;
}

.nav a {
  color: var(--text);
  font-weight: 700;
}

.hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: white;
  padding: 86px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.badge {
  display: inline-block;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.22);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  margin-bottom: 18px;
}

.hero h1 {
  font-size: clamp(36px, 5vw, 62px);
  line-height: 1.05;
  margin: 0 0 18px;
}

.hero p {
  font-size: 19px;
  max-width: 640px;
  opacity: 0.94;
}

.hero-box {
  background: white;
  color: var(--text);
  padding: 28px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.btn-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px 24px;
  border-radius: 999px;
  font-weight: 900;
  transition: 0.2s ease;
}

.btn:hover { transform: translateY(-2px); }

.btn-whatsapp {
  background: var(--green);
  color: white;
  box-shadow: 0 12px 28px rgba(34,197,94,0.35);
}

.btn-call {
  background: var(--dark);
  color: white;
}

.btn-light {
  background: white;
  color: var(--dark);
}

.section {
  padding: 72px 0;
}

.section-soft {
  background: var(--soft);
}

.section-title {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-title h2 {
  font-size: clamp(28px, 4vw, 42px);
  margin: 0 0 10px;
  color: var(--dark);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.service-card,
.trust-card,
.faq-card,
.location-box {
  background: white;
  padding: 26px;
  border-radius: var(--radius);
  box-shadow: 0 10px 26px rgba(0,0,0,0.06);
  border: 1px solid #e5e7eb;
}

.service-card h3,
.trust-card h3 {
  margin-top: 0;
  color: var(--dark);
}

.link-card {
  color: var(--primary);
  font-weight: 900;
}

.location-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 28px;
  align-items: stretch;
}

.map {
  width: 100%;
  min-height: 360px;
  border: 0;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.cta {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 72px 20px;
}

.footer {
  background: #0b1220;
  color: white;
  padding: 28px 0;
  text-align: center;
}

.floating-whatsapp {
  position: fixed;
  right: 18px;
  bottom: 88px;
  background: var(--green);
  color: white;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 14px 32px rgba(34,197,94,0.42);
  z-index: 998;
}

.back-top {
  position: fixed;
  right: 18px;
  bottom: 18px;
  background: var(--dark);
  color: white;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 14px 32px rgba(0,0,0,0.25);
  z-index: 998;
}

.mobile-bar { display: none; }

/* PLANTILLAS DIFERENTES */

.template-impacto .hero {
  padding: 105px 0;
  background: linear-gradient(135deg, #020617, var(--primary));
}

.template-impacto .hero h1 {
  text-transform: uppercase;
  letter-spacing: -2px;
}

.template-impacto .btn {
  border-radius: 14px;
  font-size: 17px;
}

.template-premium body,
body.template-premium {
  background: #f8fafc;
}

.template-premium .hero {
  background: #111827;
}

.template-premium .service-card,
.template-premium .trust-card,
.template-premium .location-box {
  border-radius: 30px;
}

.template-simple .hero {
  background: var(--primary);
  padding: 60px 0;
}

.template-simple .hero-grid {
  grid-template-columns: 1fr;
}

.template-simple .hero-box {
  display: none;
}

.template-simple .service-card,
.template-simple .trust-card,
.template-simple .location-box {
  box-shadow: none;
}

@media (max-width: 800px) {
  .hero-grid,
  .grid-3,
  .location-grid {
    grid-template-columns: 1fr;
  }

  .nav { display: none; }

  .hero { padding: 56px 0; }

  .section { padding: 48px 0; }

  .btn-row { flex-direction: column; }

  .btn { width: 100%; }

  .floating-whatsapp,
  .back-top {
    display: none;
  }

  .mobile-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 999;
  }

  .mobile-bar a {
    text-align: center;
    padding: 14px 8px;
    color: white;
    font-weight: 900;
  }

  .mobile-whatsapp { background: var(--green); }

  .mobile-call { background: #111827; }

  body { padding-bottom: 58px; }

  .map { min-height: 280px; }
}
`;

  const layoutBase = (titulo, descripcion, h1, intro, contenidoServicios) => `
<!DOCTYPE html>
<html lang="es" id="top">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
  <meta name="description" content="${descripcion}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="${keyword}">
  <link rel="stylesheet" href="style.css">
</head>
<body class="${plantillaClase}">

<header class="header">
  <div class="container header-inner">
    <div class="logo">${negocio}</div>
    <nav class="nav">
      <a href="index.html">Inicio</a>
      <a href="servicios.html">Servicios</a>
      <a href="#ubicacion">Ubicación</a>
      <a href="tel:${telefono}">Llamar</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">${negocio} · ${ciudad}</span>
      <h1>${h1}</h1>
      <p>${intro}</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="https://wa.me/34${whatsapp}?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(negocio)}%20en%20${encodeURIComponent(ciudad)}">Pedir presupuesto por WhatsApp</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
      </div>
    </div>

    <div class="hero-box">
      <h2>Atención rápida</h2>
      <p>Envía fotos o explica tu caso por WhatsApp y te damos una primera orientación.</p>
      <ul>
        <li>Presupuesto sin compromiso</li>
        <li>Trato directo</li>
        <li>Servicio en ${ciudad} y alrededores</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="servicios">
  <div class="container">
    <div class="section-title">
      <h2>Servicios principales</h2>
      <p>Soluciones claras para clientes que buscan rapidez, confianza y buen resultado.</p>
    </div>

    <div class="grid-3">
      ${contenidoServicios}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-title">
      <h2>Por qué elegirnos</h2>
      <p>Atención directa, explicación clara y contacto rápido para facilitar el presupuesto.</p>
    </div>

    <div class="grid-3">
      <div class="trust-card">
        <h3>Contacto directo</h3>
        <p>WhatsApp y llamada visibles para que el cliente no tenga que buscar cómo contactar.</p>
      </div>
      <div class="trust-card">
        <h3>Claridad desde el inicio</h3>
        <p>Explicamos los servicios de forma sencilla y sin tecnicismos innecesarios.</p>
      </div>
      <div class="trust-card">
        <h3>Orientado a clientes locales</h3>
        <p>Web pensada para usuarios que buscan servicios cerca y quieren una solución rápida.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="ubicacion">
  <div class="container location-grid">
    <div class="location-box">
      <h2>Ubicación</h2>
      <p><strong>Dirección:</strong><br>${direccion}</p>
      <p>Atendemos en ${ciudad} y alrededores.</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
        <a class="btn btn-call" href="tel:${telefono}">Llamar</a>
      </div>
    </div>

    <iframe class="map" src="https://www.google.com/maps?q=${direccionMapa}&output=embed" loading="lazy"></iframe>
  </div>
</section>

<section class="cta">
  <div class="container">
    <h2>¿Necesitas ${negocio.toLowerCase()} en ${ciudad}?</h2>
    <p>Escríbenos ahora y te atendemos de forma directa.</p>
    <div class="btn-row" style="justify-content:center;">
      <a class="btn btn-whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
      <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>${negocio} en ${ciudad} · Tel. ${telefono}</p>
  </div>
</footer>

<a class="floating-whatsapp" href="https://wa.me/34${whatsapp}" aria-label="WhatsApp">WA</a>
<a class="back-top" href="#top" aria-label="Subir arriba">↑</a>

<div class="mobile-bar">
  <a class="mobile-whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
  <a class="mobile-call" href="tel:${telefono}">Llamar</a>
</div>

</body>
</html>
`;

  const indexHTML = layoutBase(
    tituloSeo,
    descripcionSeo,
    `${negocio} en ${ciudad}`,
    sectores[sector],
    serviciosCards
  );

  const serviciosHTML = layoutBase(
    `Servicios de ${negocio} en ${ciudad}`,
    `Servicios de ${negocio} en ${ciudad}: ${serviciosFinales.join(", ")}.`,
    `Servicios de ${negocio} en ${ciudad}`,
    `Consulta los servicios principales de ${negocio} en ${ciudad} y solicita información por WhatsApp.`,
    serviciosCards
  );

  const paginasServicios = serviciosFinales.map(servicio => {
    const slugServicio = limpiarTexto(servicio);
    const htmlServicio = layoutBase(
      `${servicio} en ${ciudad} | ${negocio}`,
      `${servicio} en ${ciudad}. Contacta con ${negocio} para pedir información o presupuesto.`,
      `${servicio} en ${ciudad}`,
      `Servicio de ${servicio.toLowerCase()} en ${ciudad}, con atención directa y presupuesto sin compromiso.`,
      `
      <article class="service-card">
        <h3>${servicio}</h3>
        <p>Si necesitas ${servicio.toLowerCase()} en ${ciudad}, contacta por WhatsApp y te orientamos de forma rápida.</p>
        <a class="link-card" href="https://wa.me/34${whatsapp}?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(servicio)}%20en%20${encodeURIComponent(ciudad)}">Solicitar información</a>
      </article>
      `
    );

    return {
      nombre: `${slugServicio}.html`,
      contenido: htmlServicio
    };
  });

  const readme = `
INSTRUCCIONES DE USO

1. Descomprime este ZIP.
2. Crea un repositorio en GitHub con este nombre:
   ${slug}

3. Sube todos los archivos:
   - index.html
   - servicios.html
   - style.css
   - páginas de cada servicio

4. Activa GitHub Pages:
   Settings > Pages > Deploy from branch > main > root

5. URL prevista:
   ${urlWeb}

DATOS DEL PROYECTO:
Negocio: ${negocio}
Ciudad: ${ciudad}
Dirección: ${direccion}
Teléfono: ${telefono}
WhatsApp: ${whatsapp}
Keyword principal: ${keyword}
`;

  mensajeCliente = `Hola, te dejo una primera versión de la web para que puedas revisarla:

${urlWeb}

Está preparada con estructura clara, botones de WhatsApp y llamada, sección de servicios, ubicación con mapa y páginas individuales para cada servicio.

Revísala y dime si quieres cambiar textos, servicios, teléfono, dirección, colores o cualquier detalle antes de dejarla definitiva.`;

  window.indexFile = indexHTML;
  window.serviciosFile = serviciosHTML;
  window.cssFile = cssGenerado;
  window.paginasServicios = paginasServicios;
  window.readmeFile = readme;
  window.zipName = `${slug}.zip`;

  const previewHTML = indexHTML.replace(
    '<link rel="stylesheet" href="style.css">',
    `<style>${cssGenerado}</style>`
  );

  document.getElementById("frame").srcdoc = previewHTML;
}

function descargar() {
  if (!window.indexFile) {
    alert("Primero genera la web");
    return;
  }

  if (typeof JSZip === "undefined") {
    alert("Error: JSZip no está cargado. Revisa el script de JSZip en el head.");
    return;
  }

  const zip = new JSZip();

  zip.file("index.html", window.indexFile);
  zip.file("servicios.html", window.serviciosFile);
  zip.file("style.css", window.cssFile);
  zip.file("README.txt", window.readmeFile);

  window.paginasServicios.forEach(pagina => {
    zip.file(pagina.nombre, pagina.contenido);
  });

  zip.generateAsync({ type: "blob" }).then(function(content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = window.zipName || "web-generada.zip";
    a.click();
  });
}

function nuevoProyecto() {
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("sector").value = "generico";
  document.getElementById("plantilla").value = "profesional";
  document.getElementById("paleta").value = "verde";
  document.getElementById("frame").srcdoc = "";
  window.indexFile = null;
  mensajeCliente = "";
  alert("Nuevo proyecto listo");
}

function copiarMensajeCliente() {
  if (!mensajeCliente) {
    alert("Primero genera una web");
    return;
  }

  navigator.clipboard.writeText(mensajeCliente).then(() => {
    alert("Mensaje copiado");
  });
}
function rellenarAutomatico() {
  const sector = document.getElementById("sector").value;

  const plantillasRapidas = {
    peluqueria: {
      servicios: "Corte de pelo mujer, Corte de pelo hombre, Mechas balayage, Tinte profesional, Peinados para eventos, Tratamientos capilares",
      colorPrincipal: "#be185d",
      colorSecundario: "#831843",
      keyword: "peluquería en Murcia"
    },
    aire: {
      servicios: "Instalación de aire acondicionado, Mantenimiento de aire acondicionado, Reparación de aire acondicionado, Conductos de climatización, Carga de gas, Limpieza de filtros",
      colorPrincipal: "#0284c7",
      colorSecundario: "#0f172a",
      keyword: "aire acondicionado en Murcia"
    },
    cerrajeria: {
      servicios: "Puertas metálicas, Rejas a medida, Cerramientos metálicos, Barandillas, Ventanas de aluminio, Estructuras metálicas",
      colorPrincipal: "#374151",
      colorSecundario: "#111827",
      keyword: "cerrajería en Murcia"
    },
    jardineria: {
      servicios: "Mantenimiento de jardines, Poda de árboles, Limpieza de parcelas, Césped artificial, Sistemas de riego, Mantenimiento de piscinas",
      colorPrincipal: "#15803d",
      colorSecundario: "#14532d",
      keyword: "jardinería en Murcia"
    },
    electricista: {
      servicios: "Instalaciones eléctricas, Reparación de averías, Cuadros eléctricos, Iluminación LED, Certificados eléctricos, Cargadores para coche eléctrico",
      colorPrincipal: "#ca8a04",
      colorSecundario: "#422006",
      keyword: "electricista en Murcia"
    },
    reformas: {
      servicios: "Reformas integrales, Reformas de baños, Reformas de cocinas, Pintura, Albañilería, Pladur",
      colorPrincipal: "#b45309",
      colorSecundario: "#1f2937",
      keyword: "reformas en Murcia"
    },
    restaurante: {
      servicios: "Hamburguesas, Montaditos, Bocadillos, Tapas, Menú diario, Reservas",
      colorPrincipal: "#dc2626",
      colorSecundario: "#7f1d1d",
      keyword: "restaurante en Murcia"
    },
    generico: {
      servicios: "Servicio principal, Presupuesto sin compromiso, Atención personalizada",
      colorPrincipal: "#0f766e",
      colorSecundario: "#111827",
      keyword: "servicio local en Murcia"
    }
  };

  const datos = plantillasRapidas[sector] || plantillasRapidas.generico;

  const negocio = document.getElementById("negocio").value.trim() || "Negocio local";
  const ciudad = document.getElementById("ciudad").value.trim() || "Murcia";

  document.getElementById("servicios").value = datos.servicios;
  document.getElementById("colorPrincipal").value = datos.colorPrincipal;
  document.getElementById("colorSecundario").value = datos.colorSecundario;
  document.getElementById("keyword").value = datos.keyword.replace("Murcia", ciudad);

  document.getElementById("tituloSeo").value = `${negocio} en ${ciudad} | Presupuesto rápido`;
  document.getElementById("descripcionSeo").value = `${negocio} en ${ciudad}. Atención directa, presupuesto sin compromiso y contacto rápido por WhatsApp.`;
}
function rellenarAutomatico() {
  const sector = document.getElementById("sector").value;

  const plantillasRapidas = {
    peluqueria: {
      servicios: "Corte de pelo mujer, Corte de pelo hombre, Mechas balayage, Tinte profesional, Peinados para eventos, Tratamientos capilares",
      colorPrincipal: "#be185d",
      colorSecundario: "#831843",
      keyword: "peluquería en Murcia"
    },
    aire: {
      servicios: "Instalación de aire acondicionado, Mantenimiento de aire acondicionado, Reparación de aire acondicionado, Conductos de climatización, Carga de gas, Limpieza de filtros",
      colorPrincipal: "#0284c7",
      colorSecundario: "#0f172a",
      keyword: "aire acondicionado en Murcia"
    },
    cerrajeria: {
      servicios: "Puertas metálicas, Rejas a medida, Cerramientos metálicos, Barandillas, Ventanas de aluminio, Estructuras metálicas",
      colorPrincipal: "#374151",
      colorSecundario: "#111827",
      keyword: "cerrajería en Murcia"
    },
    jardineria: {
      servicios: "Mantenimiento de jardines, Poda de árboles, Limpieza de parcelas, Césped artificial, Sistemas de riego, Mantenimiento de piscinas",
      colorPrincipal: "#15803d",
      colorSecundario: "#14532d",
      keyword: "jardinería en Murcia"
    },
    electricista: {
      servicios: "Instalaciones eléctricas, Reparación de averías, Cuadros eléctricos, Iluminación LED, Certificados eléctricos, Cargadores para coche eléctrico",
      colorPrincipal: "#ca8a04",
      colorSecundario: "#422006",
      keyword: "electricista en Murcia"
    },
    reformas: {
      servicios: "Reformas integrales, Reformas de baños, Reformas de cocinas, Pintura, Albañilería, Pladur",
      colorPrincipal: "#b45309",
      colorSecundario: "#1f2937",
      keyword: "reformas en Murcia"
    },
    restaurante: {
      servicios: "Hamburguesas, Montaditos, Bocadillos, Tapas, Menú diario, Reservas",
      colorPrincipal: "#dc2626",
      colorSecundario: "#7f1d1d",
      keyword: "restaurante en Murcia"
    },
    generico: {
      servicios: "Servicio principal, Presupuesto sin compromiso, Atención personalizada",
      colorPrincipal: "#0f766e",
      colorSecundario: "#111827",
      keyword: "servicio local en Murcia"
    }
  };

  const datos = plantillasRapidas[sector] || plantillasRapidas.generico;

  const negocio = document.getElementById("negocio")?.value || "Negocio";
  const ciudad = document.getElementById("ciudad")?.value || "Murcia";

  // SIEMPRE EXISTE
  document.getElementById("servicios").value = datos.servicios;

  // SOLO SI EXISTEN LOS INPUTS
  if (document.getElementById("colorPrincipal"))
    document.getElementById("colorPrincipal").value = datos.colorPrincipal;

  if (document.getElementById("colorSecundario"))
    document.getElementById("colorSecundario").value = datos.colorSecundario;

  if (document.getElementById("keyword"))
    document.getElementById("keyword").value = datos.keyword.replace("Murcia", ciudad);

  if (document.getElementById("tituloSeo"))
    document.getElementById("tituloSeo").value = `${negocio} en ${ciudad} | Presupuesto rápido`;

  if (document.getElementById("descripcionSeo"))
    document.getElementById("descripcionSeo").value = `${negocio} en ${ciudad}. Atención directa, presupuesto sin compromiso y contacto rápido por WhatsApp.`;

  // EXTRA PRO (esto no lo tenías)
  if (document.getElementById("direccion"))
    document.getElementById("direccion").value = `Calle principal, ${ciudad}`;

  if (document.getElementById("telefono"))
    document.getElementById("telefono").value = "600123456";

  if (document.getElementById("whatsapp"))
    document.getElementById("whatsapp").value = "600123456";
}
