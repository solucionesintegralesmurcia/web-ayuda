function limpiarTelefono(numero) {
  return numero.replace(/\D/g, "");
}

function escaparHTML(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function copiarTexto(id) {
  const campo = document.getElementById(id);
  campo.select();
  campo.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copiado");
}

function generarWeb() {
  const nombre = document.getElementById("nombre").value.trim();
  const sector = document.getElementById("sector").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  const serv1 = document.getElementById("serv1").value.trim();
  const serv2 = document.getElementById("serv2").value.trim();
  const serv3 = document.getElementById("serv3").value.trim();
  const serv4 = document.getElementById("serv4").value.trim();

  const img1 = document.getElementById("img1").value.trim() || "imagen/portada.jpg";
  const img2 = document.getElementById("img2").value.trim() || "imagen/galeria1.jpg";
  const img3 = document.getElementById("img3").value.trim() || "imagen/galeria2.jpg";
  const img4 = document.getElementById("img4").value.trim() || "imagen/galeria3.jpg";

  const color = document.getElementById("color").value.trim() || "#8b5e3c";
  const estilo = document.getElementById("estilo").value.trim();

  if (!nombre || !sector || !ciudad || !telefono) {
    alert("Rellena al menos nombre, sector, ciudad y teléfono.");
    return;
  }

  const telefonoLimpio = limpiarTelefono(telefono);

  const tituloSEO = `${nombre} | ${sector} en ${ciudad}`;
  const descripcionSEO = `${nombre}, especialistas en ${sector} en ${ciudad}. ${serv1}, ${serv2}, ${serv3} y ${serv4}. Contacta por WhatsApp y pide información.`;
  const h1 = `${sector.charAt(0).toUpperCase() + sector.slice(1)} en ${ciudad}`;
  const subtitulo = descripcion || `En ${nombre} trabajamos ${serv1}, ${serv2}, ${serv3} y ${serv4} con atención cercana y servicio en ${ciudad}.`;

  let tonoFrase = "Trabajo profesional, atención rápida y trato directo.";
  if (estilo === "tradicional") tonoFrase = "Sabor, cercanía y atención como la de siempre.";
  if (estilo === "premium") tonoFrase = "Imagen cuidada, calidad y una presencia más exclusiva.";
  if (estilo === "moderno") tonoFrase = "Diseño actual, claridad y experiencia visual más limpia.";

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
      <div class="logo">${escaparHTML(nombre)}</div>
      <a class="btn btn-outline" href="https://wa.me/${telefonoLimpio}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </header>

  <section class="hero">
    <div class="overlay"></div>
    <img src="${escaparHTML(img1)}" alt="${escaparHTML(nombre)} en ${escaparHTML(ciudad)}" class="hero-bg">
    <div class="container hero-content">
      <span class="tag">${escaparHTML(ciudad)}</span>
      <h1>${escaparHTML(h1)}</h1>
      <p>${escaparHTML(subtitulo)}</p>
      <div class="hero-actions">
        <a class="btn" href="https://wa.me/${telefonoLimpio}" target="_blank" rel="noopener">Hablar por WhatsApp</a>
        <a class="btn btn-light" href="#productos">Ver más</a>
      </div>
    </div>
  </section>

  <section class="intro">
    <div class="container intro-grid">
      <div>
        <h2>Sobre ${escaparHTML(nombre)}</h2>
        <p>${escaparHTML(descripcion || `${nombre} es un negocio especializado en ${sector} en ${ciudad}, con atención personalizada y enfoque práctico para cada cliente.`)}</p>
      </div>
      <div class="intro-card">
        <strong>Por qué elegirnos</strong>
        <ul>
          <li>${escaparHTML(tonoFrase)}</li>
          <li>Atención en ${escaparHTML(ciudad)} y alrededores.</li>
          <li>Contacto directo por WhatsApp.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="productos" class="services">
    <div class="container">
      <h2>Qué ofrecemos</h2>
      <div class="cards">
        <article class="card">
          <h3>${escaparHTML(serv1 || "Servicio 1")}</h3>
          <p>Solución enfocada a clientes que buscan ${escaparHTML(serv1 || "este servicio")} en ${escaparHTML(ciudad)}.</p>
        </article>
        <article class="card">
          <h3>${escaparHTML(serv2 || "Servicio 2")}</h3>
          <p>Atención profesional para quienes necesitan ${escaparHTML(serv2 || "este servicio")} con trato directo.</p>
        </article>
        <article class="card">
          <h3>${escaparHTML(serv3 || "Servicio 3")}</h3>
          <p>Trabajo cuidado y orientado a quienes buscan ${escaparHTML(serv3 || "este servicio")} en la zona.</p>
        </article>
        <article class="card">
          <h3>${escaparHTML(serv4 || "Servicio 4")}</h3>
          <p>Otra línea destacada dentro de ${escaparHTML(nombre)} para ofrecer más opciones al cliente.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="gallery">
    <div class="container">
      <h2>Galería</h2>
      <div class="gallery-grid">
        <img src="${escaparHTML(img1)}" alt="${escaparHTML(serv1 || nombre)}">
        <img src="${escaparHTML(img2)}" alt="${escaparHTML(serv2 || nombre)}">
        <img src="${escaparHTML(img3)}" alt="${escaparHTML(serv3 || nombre)}">
        <img src="${escaparHTML(img4)}" alt="${escaparHTML(serv4 || nombre)}">
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <h2>Preguntas frecuentes</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3>¿Dónde está ${escaparHTML(nombre)}?</h3>
          <p>Trabajamos en ${escaparHTML(ciudad)}${direccion ? `, en ${escaparHTML(direccion)}` : ""}.</p>
        </div>
        <div class="faq-item">
          <h3>¿Qué productos o servicios ofrecéis?</h3>
          <p>Principalmente ${escaparHTML(serv1)}, ${escaparHTML(serv2)}, ${escaparHTML(serv3)} y ${escaparHTML(serv4)}.</p>
        </div>
        <div class="faq-item">
          <h3>¿Cómo contacto rápido?</h3>
          <p>Puedes escribir directamente por WhatsApp al ${escaparHTML(telefono)}.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container cta-box">
      <div>
        <h2>Contacta con ${escaparHTML(nombre)}</h2>
        <p>Si buscas ${escaparHTML(sector)} en ${escaparHTML(ciudad)}, escríbenos y te respondemos por WhatsApp.</p>
      </div>
      <a class="btn btn-big" href="https://wa.me/${telefonoLimpio}" target="_blank" rel="noopener">Enviar WhatsApp</a>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <strong>${escaparHTML(nombre)}</strong>
        <p>${escaparHTML(sector)} en ${escaparHTML(ciudad)}</p>
      </div>
      <div>
        <p>Teléfono: ${escaparHTML(telefono)}</p>
        <p>${escaparHTML(direccion || ciudad)}</p>
      </div>
    </div>
  </footer>

</body>
</html>`;

  const cssGenerado = `* {
  box-sizing: border-box;
}

:root {
  --dark: #111111;
  --dark-2: #1b1b1b;
  --light: #f6f6f6;
  --white: #ffffff;
  --text: #222222;
  --muted: #666666;
  --line: #e5e5e5;
  --accent: ${color};
  --accent-dark: #222222;
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
  opacity: .95;
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
  min-height: 78vh;
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
  background: linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.25) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--white);
  max-width: 760px;
  padding: 70px 0;
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
  font-size: clamp(2.2rem, 5vw, 4.4rem);
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

.services {
  background: #fafafa;
}

.services h2,
.gallery h2,
.faq h2,
.intro h2 {
  margin-top: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 24px;
}

.card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 24px;
}

.gallery-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
}

.faq-list {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 20px;
  background: var(--white);
}

.faq-item h3 {
  margin: 0 0 8px;
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
  .faq,
  .cta {
    padding: 54px 0;
  }

  .intro-grid,
  .cards,
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
${sector.toLowerCase().replace(/\s+/g, "-")}-${ciudad.toLowerCase().replace(/\s+/g, "-")}

NOMBRES SEO PARA IMÁGENES:
1. ${sector.toLowerCase().replace(/\s+/g, "-")}-${ciudad.toLowerCase().replace(/\s+/g, "-")}-1.jpg
2. ${sector.toLowerCase().replace(/\s+/g, "-")}-${ciudad.toLowerCase().replace(/\s+/g, "-")}-2.jpg
3. ${sector.toLowerCase().replace(/\s+/g, "-")}-${ciudad.toLowerCase().replace(/\s+/g, "-")}-3.jpg
4. ${sector.toLowerCase().replace(/\s+/g, "-")}-${ciudad.toLowerCase().replace(/\s+/g, "-")}-4.jpg`;

  document.getElementById("seoOutput").value = seoTexto;
  document.getElementById("htmlOutput").value = htmlGenerado;
  document.getElementById("cssOutput").value = cssGenerado;
}
