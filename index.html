const DEFAULTS = {
  nombre: "",
  sector: "",
  ciudad: "",
  telefono: "",
  direccion: "",
  descripcion: "",
  sobreNosotros: "",
  serv1: "",
  serv2: "",
  serv3: "",
  serv4: "",
  resena1: "",
  resena2: "",
  resena3: "",
  zonas: "",
  plantilla: "profesional",
  tipoWeb: "completa",
  color: "#25d366",
  ctaTexto: "Hablar por WhatsApp",
  mensajeWhatsapp: "Hola, he visto vuestra web y quiero información."
};

document.addEventListener("DOMContentLoaded", () => {
  cargarDatosGuardados();
  actualizarColor();
  generarPreviewInicial();

  document.querySelectorAll("input, textarea, select").forEach((el) => {
    if (el.type !== "file") {
      el.addEventListener("input", guardarDatos);
      el.addEventListener("change", guardarDatos);
    }
  });

  const colorInput = document.getElementById("color");
  if (colorInput) {
    colorInput.addEventListener("input", actualizarColor);
  }
});

function actualizarColor() {
  const color = document.getElementById("color")?.value || "#25d366";
  document.documentElement.style.setProperty("--accent", color);
}

function limpiarTelefono(numero) {
  return (numero || "").replace(/\D/g, "");
}

function slugify(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escaparHTML(texto = "") {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function obtenerDatos() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    sector: document.getElementById("sector").value.trim(),
    ciudad: document.getElementById("ciudad").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    direccion: document.getElementById("direccion").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    sobreNosotros: document.getElementById("sobreNosotros").value.trim(),
    serv1: document.getElementById("serv1").value.trim(),
    serv2: document.getElementById("serv2").value.trim(),
    serv3: document.getElementById("serv3").value.trim(),
    serv4: document.getElementById("serv4").value.trim(),
    resena1: document.getElementById("resena1").value.trim(),
    resena2: document.getElementById("resena2").value.trim(),
    resena3: document.getElementById("resena3").value.trim(),
    zonas: document.getElementById("zonas").value.trim(),
    plantilla: document.getElementById("plantilla").value,
    tipoWeb: document.getElementById("tipoWeb").value,
    color: document.getElementById("color").value,
    ctaTexto: document.getElementById("ctaTexto").value.trim(),
    mensajeWhatsapp: document.getElementById("mensajeWhatsapp").value.trim()
  };
}

function guardarDatos() {
  const datos = obtenerDatos();
  localStorage.setItem("webAyudaDatos", JSON.stringify(datos));
}

function cargarDatosGuardados() {
  const guardado = localStorage.getItem("webAyudaDatos");
  if (!guardado) return;

  try {
    const datos = JSON.parse(guardado);
    Object.keys(DEFAULTS).forEach((key) => {
      const el = document.getElementById(key);
      if (el && datos[key] !== undefined) {
        el.value = datos[key];
      }
    });
  } catch (e) {
    console.error("No se pudieron cargar los datos guardados");
  }
}

function mostrarPreview() {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";

  ["img1", "img2", "img3", "img4"].forEach((id) => {
    const input = document.getElementById(id);
    if (input.files && input.files[0]) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(input.files[0]);
      img.alt = id;
      preview.appendChild(img);
    }
  });
}

function obtenerNombreArchivo(id, nombreDefecto) {
  const input = document.getElementById(id);
  if (input && input.files && input.files[0]) {
    return input.files[0].name;
  }
  return nombreDefecto;
}

function construirColores(plantilla, color) {
  let fondo = "#111111";
  let fondo2 = "#1b1b1b";
  let fondoClaro = "#f7f7f7";
  let texto = "#222222";
  let blanco = "#ffffff";
  let linea = "#e5e5e5";

  if (plantilla === "tradicional") {
    fondo = "#2f241d";
    fondo2 = "#46362b";
    fondoClaro = "#f8f3eb";
  }

  if (plantilla === "premium") {
    fondo = "#0f0f12";
    fondo2 = "#191a1f";
    fondoClaro = "#f4f4f6";
  }

  if (plantilla === "moderno") {
    fondo = "#0f1722";
    fondo2 = "#172232";
    fondoClaro = "#f3f7fb";
  }

  return { fondo, fondo2, fondoClaro, texto, blanco, linea, color };
}

function textoPorPlantilla(plantilla) {
  if (plantilla === "tradicional") {
    return {
      tagline: "Cercanía, experiencia y trato directo.",
      enfoque: "Imagen cercana y más clásica para negocio local."
    };
  }
  if (plantilla === "premium") {
    return {
      tagline: "Calidad, imagen cuidada y presencia premium.",
      enfoque: "Diseño más elegante y percepción de mayor valor."
    };
  }
  if (plantilla === "moderno") {
    return {
      tagline: "Diseño limpio, actual y orientado a conversión.",
      enfoque: "Imagen visual más actual y directa."
    };
  }
  return {
    tagline: "Profesionalidad, claridad y atención rápida.",
    enfoque: "Plantilla equilibrada para la mayoría de negocios."
  };
}

function generarWeb() {
  const d = obtenerDatos();

  if (!d.nombre || !d.sector || !d.ciudad || !d.telefono) {
    alert("Rellena al menos nombre, sector, ciudad y teléfono.");
    return;
  }

  guardarDatos();

  const telefonoLimpio = limpiarTelefono(d.telefono);
  const mensajeEncoded = encodeURIComponent(d.mensajeWhatsapp || "Hola, he visto vuestra web y quiero información.");
  const whatsappURL = `https://wa.me/${telefonoLimpio}?text=${mensajeEncoded}`;

  const img1 = `imagen/${obtenerNombreArchivo("img1", "portada.jpg")}`;
  const img2 = `imagen/${obtenerNombreArchivo("img2", "galeria1.jpg")}`;
  const img3 = `imagen/${obtenerNombreArchivo("img3", "galeria2.jpg")}`;
  const img4 = `imagen/${obtenerNombreArchivo("img4", "galeria3.jpg")}`;

  const servicios = [d.serv1, d.serv2, d.serv3, d.serv4].filter(Boolean);
  const zonasLista = (d.zonas || d.ciudad).split(",").map(z => z.trim()).filter(Boolean);
  const resenas = [d.resena1, d.resena2, d.resena3].filter(Boolean);

  const tituloSEO = `${d.nombre} | ${d.sector} en ${d.ciudad}`;
  const descripcionSEO = `${d.nombre}, especialistas en ${d.sector} en ${d.ciudad}. ${servicios.join(", ")}. Contacta por WhatsApp y pide información.`;
  const h1 = `${capitalize(d.sector)} en ${d.ciudad}`;
  const slug = `${slugify(d.sector)}-${slugify(d.ciudad)}`;

  const plantillaTexto = textoPorPlantilla(d.plantilla);

  const heroTexto = d.descripcion || `${d.nombre} ofrece ${servicios.join(", ")} en ${d.ciudad}, con atención cercana y contacto directo por WhatsApp.`;
  const sobreTexto = d.sobreNosotros || `${d.nombre} es un negocio local especializado en ${d.sector} en ${d.ciudad}. Apostamos por el trato cercano, la claridad y una atención cuidada para cada cliente.`;

  const cardsHTML = servicios.map((serv) => `
        <article class="card">
          <h3>${escaparHTML(serv)}</h3>
          <p>Servicio orientado a clientes que buscan ${escaparHTML(serv)} en ${escaparHTML(d.ciudad)} con atención cercana y profesional.</p>
        </article>
  `).join("");

  const zonasHTML = zonasLista.map((zona) => `<li>${escaparHTML(zona)}</li>`).join("");

  const resenasHTML = (resenas.length ? resenas : [
    "Muy buena atención y resultado final. Recomendable.",
    "Trato profesional y proceso muy fácil.",
    "Negocio serio, cercano y con buena experiencia."
  ]).map((r, i) => `
        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p>${escaparHTML(r)}</p>
          <strong>Cliente ${i + 1}</strong>
        </article>
  `).join("");

  const faqHTML = `
      <div class="faq-item">
        <h3>¿Dónde está ${escaparHTML(d.nombre)}?</h3>
        <p>${escaparHTML(d.direccion || d.ciudad)}.</p>
      </div>
      <div class="faq-item">
        <h3>¿Qué servicios o productos ofrecéis?</h3>
        <p>${escaparHTML(servicios.join(", "))}.</p>
      </div>
      <div class="faq-item">
        <h3>¿Cómo contacto rápido?</h3>
        <p>Puedes escribir directamente por WhatsApp al ${escaparHTML(d.telefono)}.</p>
      </div>
  `;

  const seccionReviews = `
    <section class="reviews">
      <div class="container">
        <h2>Opiniones de clientes</h2>
        <div class="reviews-grid">
          ${resenasHTML}
        </div>
      </div>
    </section>
  `;

  const seccionFAQ = `
    <section class="faq">
      <div class="container">
        <h2>Preguntas frecuentes</h2>
        <div class="faq-list">
          ${faqHTML}
        </div>
      </div>
    </section>
  `;

  const seccionZonas = `
    <section class="zones">
      <div class="container">
        <h2>Zonas de trabajo</h2>
        <ul class="zones-list">
          ${zonasHTML}
        </ul>
      </div>
    </section>
  `;

  const bloqueExtraCompleta = d.tipoWeb === "completa" ? `
    ${seccionReviews}
    ${seccionZonas}
    ${seccionFAQ}
  ` : "";

  const htmlGenerado = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escaparHTML(tituloSEO)}</title>
  <meta name="description" content="${escaparHTML(descripcionSEO)}" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header class="site-header">
    <div class="container nav">
      <div class="logo">${escaparHTML(d.nombre)}</div>
      <a class="btn btn-outline" href="${whatsappURL}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto || "WhatsApp")}</a>
    </div>
  </header>

  <section class="hero">
    <div class="overlay"></div>
    <img src="${escaparHTML(img1)}" alt="${escaparHTML(d.nombre)} en ${escaparHTML(d.ciudad)}" class="hero-bg">
    <div class="container hero-content">
      <span class="tag">${escaparHTML(d.ciudad)}</span>
      <h1>${escaparHTML(h1)}</h1>
      <p>${escaparHTML(heroTexto)}</p>
      <div class="hero-actions">
        <a class="btn" href="${whatsappURL}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto || "Hablar por WhatsApp")}</a>
        <a class="btn btn-light" href="#servicios">Ver más</a>
      </div>
    </div>
  </section>

  <section class="intro">
    <div class="container intro-grid">
      <div>
        <h2>Sobre ${escaparHTML(d.nombre)}</h2>
        <p>${escaparHTML(sobreTexto)}</p>
      </div>
      <div class="intro-card">
        <strong>${escaparHTML(plantillaTexto.tagline)}</strong>
        <ul>
          <li>${escaparHTML(plantillaTexto.enfoque)}</li>
          <li>Atención en ${escaparHTML(d.ciudad)} y alrededores.</li>
          <li>Contacto directo por WhatsApp.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="servicios" class="services">
    <div class="container">
      <h2>Qué ofrecemos</h2>
      <div class="cards">
        ${cardsHTML}
      </div>
    </div>
  </section>

  <section class="gallery">
    <div class="container">
      <h2>Galería</h2>
      <div class="gallery-grid">
        <img src="${escaparHTML(img1)}" alt="${escaparHTML(d.nombre)} 1">
        <img src="${escaparHTML(img2)}" alt="${escaparHTML(d.nombre)} 2">
        <img src="${escaparHTML(img3)}" alt="${escaparHTML(d.nombre)} 3">
        <img src="${escaparHTML(img4)}" alt="${escaparHTML(d.nombre)} 4">
      </div>
    </div>
  </section>

  ${bloqueExtraCompleta}

  <section class="cta">
    <div class="container cta-box">
      <div>
        <h2>Contacta con ${escaparHTML(d.nombre)}</h2>
        <p>Si buscas ${escaparHTML(d.sector)} en ${escaparHTML(d.ciudad)}, escríbenos y te respondemos por WhatsApp.</p>
      </div>
      <a class="btn btn-big" href="${whatsappURL}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto || "Enviar WhatsApp")}</a>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <strong>${escaparHTML(d.nombre)}</strong>
        <p>${escaparHTML(d.sector)} en ${escaparHTML(d.ciudad)}</p>
      </div>
      <div>
        <p>Teléfono: ${escaparHTML(d.telefono)}</p>
        <p>${escaparHTML(d.direccion || d.ciudad)}</p>
      </div>
    </div>
  </footer>

</body>
</html>`;

  const colores = construirColores(d.plantilla, d.color);

  const cssGenerado = `* {
  box-sizing: border-box;
}

:root {
  --dark: ${colores.fondo};
  --dark-2: ${colores.fondo2};
  --light: ${colores.fondoClaro};
  --white: ${colores.blanco};
  --text: ${colores.texto};
  --muted: #666666;
  --line: ${colores.linea};
  --accent: ${colores.color};
  --radius: 18px;
  --shadow: 0 10px 30px rgba(0,0,0,.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(17,17,17,.92);
  backdrop-filter: blur(8px);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: .4px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--white);
  font-weight: 700;
  transition: .2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: .96;
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255,255,255,.24);
}

.btn-light {
  background: var(--white);
  color: var(--dark);
}

.btn-big {
  padding: 16px 28px;
}

.hero {
  position: relative;
  min-height: 76vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.74) 0%, rgba(0,0,0,.42) 55%, rgba(0,0,0,.25) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--white);
  max-width: 760px;
  padding: 74px 0;
}

.tag {
  display: inline-block;
  margin-bottom: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
  font-size: .92rem;
}

.hero h1 {
  margin: 0 0 14px;
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  line-height: 1.05;
}

.hero p {
  margin: 0;
  font-size: 1.08rem;
  max-width: 680px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.intro,
.services,
.gallery,
.reviews,
.zones,
.faq,
.cta {
  padding: 72px 0;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 24px;
  align-items: start;
}

.intro-card {
  background: var(--light);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
}

.intro-card ul {
  margin: 14px 0 0;
  padding-left: 18px;
}

.services,
.reviews,
.faq {
  background: #fafafa;
}

.services h2,
.gallery h2,
.reviews h2,
.zones h2,
.faq h2,
.intro h2 {
  margin-top: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.cards,
.reviews-grid,
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 24px;
}

.card,
.review-card,
.faq-item {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
}

.card h3,
.review-card h3,
.faq-item h3 {
  margin-top: 0;
}

.stars {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--accent);
}

.gallery-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
}

.zones-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.zones-list li {
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--light);
  border: 1px solid var(--line);
}

.faq-list {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 28px;
  background: var(--dark);
  color: var(--white);
  border-radius: 24px;
}

.cta-box h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.site-footer {
  background: #0f0f0f;
  color: rgba(255,255,255,.88);
  padding: 28px 0;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .intro-grid,
  .cards,
  .reviews-grid,
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(100% - 20px, 1180px);
  }

  .nav {
    min-height: 68px;
  }

  .hero {
    min-height: auto;
  }

  .hero-content {
    padding: 58px 0;
  }

  .intro,
  .services,
  .gallery,
  .reviews,
  .zones,
  .faq,
  .cta {
    padding: 54px 0;
  }

  .intro-grid,
  .cards,
  .reviews-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid img {
    height: 220px;
  }

  .btn,
  .btn-big,
  .btn-light,
  .btn-outline {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }
}`;

  const seoTexto = `TITLE:
${tituloSEO}

META DESCRIPTION:
${descripcionSEO}

H1:
${h1}

SLUG SUGERIDO:
${slug}

NOMBRES SEO PARA IMÁGENES:
1. ${slug}-1.jpg
2. ${slug}-2.jpg
3. ${slug}-3.jpg
4. ${slug}-4.jpg

WHATSAPP:
${whatsappURL}`;

  const notesTexto = `PENDIENTES:
- Revisar que el teléfono sea correcto
- Subir fotos reales dentro de la carpeta /imagen/
- Confirmar dirección exacta
- Ajustar textos finales si hace falta
- Revisar que GitHub tenga:
  index.html
  style.css
  imagen/portada.jpg
  imagen/galeria1.jpg
  imagen/galeria2.jpg
  imagen/galeria3.jpg`;

  document.getElementById("seoOutput").value = seoTexto;
  document.getElementById("htmlOutput").value = htmlGenerado;
  document.getElementById("cssOutput").value = cssGenerado;
  document.getElementById("notesOutput").value = notesTexto;
  document.getElementById("previewFrame").srcdoc = htmlGenerado + `<style>${cssGenerado}</style>`;
}

function copiarTexto(id) {
  const campo = document.getElementById(id);
  campo.select();
  campo.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copiado");
}

function descargarArchivo(nombre, contenido, tipo = "text/plain;charset=utf-8") {
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function descargarHTML() {
  const contenido = document.getElementById("htmlOutput").value;
  if (!contenido) {
    alert("Primero genera la web.");
    return;
  }
  descargarArchivo("index.html", contenido, "text/html;charset=utf-8");
}

function descargarCSS() {
  const contenido = document.getElementById("cssOutput").value;
  if (!contenido) {
    alert("Primero genera la web.");
    return;
  }
  descargarArchivo("style.css", contenido, "text/css;charset=utf-8");
}

async function descargarZIP() {
  const html = document.getElementById("htmlOutput").value;
  const css = document.getElementById("cssOutput").value;

  if (!html || !css) {
    alert("Primero genera la web.");
    return;
  }

  const zip = new JSZip();
  zip.file("index.html", html);
  zip.file("style.css", css);

  const imgFolder = zip.folder("imagen");
  const imageInputs = [
    { id: "img1", fallback: "portada.jpg" },
    { id: "img2", fallback: "galeria1.jpg" },
    { id: "img3", fallback: "galeria2.jpg" },
    { id: "img4", fallback: "galeria3.jpg" }
  ];

  for (const item of imageInputs) {
    const input = document.getElementById(item.id);
    if (input.files && input.files[0]) {
      imgFolder.file(input.files[0].name, input.files[0]);
    } else {
      imgFolder.file(item.fallback, "Sube aquí tu imagen real");
    }
  }

  const blob = await zip.generateAsync({ type: "blob" });
  descargarArchivo("web-generada.zip", blob, "application/zip");
}

function nuevoNegocio() {
  Object.keys(DEFAULTS).forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.value = DEFAULTS[key];
  });

  ["img1", "img2", "img3", "img4"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.value = "";
  });

  document.getElementById("preview").innerHTML = "";
  document.getElementById("seoOutput").value = "";
  document.getElementById("htmlOutput").value = "";
  document.getElementById("cssOutput").value = "";
  document.getElementById("notesOutput").value = "";

  document.getElementById("previewFrame").srcdoc = `
    <html>
      <body style="font-family:Arial,sans-serif;padding:20px">
        <h3>Vista previa limpia</h3>
        <p>Rellena los datos y pulsa generar web.</p>
      </body>
    </html>
  `;

  localStorage.removeItem("webAyudaDatos");
  actualizarColor();
  alert("Listo para nuevo cliente.");
}

function generarPreviewInicial() {
  document.getElementById("previewFrame").srcdoc = `
    <html>
      <body style="font-family:Arial,sans-serif;padding:20px">
        <h3>Vista previa</h3>
        <p>Rellena los campos y pulsa generar web.</p>
      </body>
    </html>
  `;
}

function capitalize(texto = "") {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
