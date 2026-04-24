let cssGenerado = "";

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generarWeb() {
  const negocio = document.getElementById("negocio").value.trim() || "Negocio local";
  const ciudad = document.getElementById("ciudad").value.trim() || "Murcia";
  const telefono = document.getElementById("telefono").value.trim() || "600000000";
  const whatsapp = document.getElementById("whatsapp").value.trim() || telefono;
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

  const serviciosCards = serviciosFinales.map(servicio => `
    <article class="service-card">
      <h3>${servicio}</h3>
      <p>Servicio de ${servicio.toLowerCase()} en ${ciudad}, con atención cercana, explicación clara y presupuesto adaptado a cada caso.</p>
      <a href="https://wa.me/34${whatsapp}?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(servicio)}%20en%20${encodeURIComponent(ciudad)}" class="link-card">Pedir presupuesto</a>
    </article>
  `).join("");

  const serviciosLista = serviciosFinales.map(servicio => `<li>${servicio}</li>`).join("");

  cssGenerado = `
:root {
  --primary: #0f766e;
  --primary-dark: #115e59;
  --dark: #111827;
  --text: #1f2937;
  --muted: #6b7280;
  --soft: #f3f4f6;
  --white: #ffffff;
  --radius: 22px;
  --shadow: 0 18px 40px rgba(0,0,0,0.12);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.6;
}

a {
  text-decoration: none;
}

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
  font-weight: 800;
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
  font-weight: 600;
}

.hero {
  background: linear-gradient(135deg, #111827, #0f766e);
  color: white;
  padding: 80px 0;
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

.hero-box h2 {
  margin-top: 0;
}

.check-list {
  padding-left: 20px;
}

.check-list li {
  margin-bottom: 8px;
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
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 800;
}

.btn-whatsapp {
  background: #22c55e;
  color: white;
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
  padding: 70px 0;
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
.faq-card {
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
  color: var(--primary-dark);
  font-weight: 800;
}

.cta {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 70px 20px;
}

.cta h2 {
  font-size: clamp(28px, 4vw, 44px);
  margin: 0 0 12px;
}

.footer {
  background: #0b1220;
  color: white;
  padding: 28px 0;
  text-align: center;
}

.mobile-bar {
  display: none;
}

@media (max-width: 800px) {
  .hero-grid,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .nav {
    display: none;
  }

  .hero {
    padding: 54px 0;
  }

  .section {
    padding: 48px 0;
  }

  .btn-row {
    flex-direction: column;
  }

  .btn {
    width: 100%;
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
    font-weight: 800;
  }

  .mobile-whatsapp {
    background: #22c55e;
  }

  .mobile-call {
    background: #111827;
  }

  body {
    padding-bottom: 58px;
  }
}
`;

  const indexHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${negocio} en ${ciudad} | Presupuesto rápido</title>
  <meta name="description" content="${negocio} en ${ciudad}. Atención rápida, presupuesto sin compromiso y contacto directo por WhatsApp.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <div class="container header-inner">
    <div class="logo">${negocio}</div>
    <nav class="nav">
      <a href="index.html">Inicio</a>
      <a href="servicios.html">Servicios</a>
      <a href="tel:${telefono}">Llamar</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">${negocio} · ${ciudad}</span>
      <h1>${negocio} en ${ciudad}</h1>
      <p>Servicio profesional, atención directa y presupuesto rápido. Cuéntanos qué necesitas y te orientamos sin compromiso.</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="https://wa.me/34${whatsapp}?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(negocio)}%20en%20${encodeURIComponent(ciudad)}">Pedir presupuesto por WhatsApp</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
      </div>
    </div>

    <div class="hero-box">
      <h2>Atención rápida</h2>
      <p>Envía fotos o explica tu caso por WhatsApp y te damos una primera orientación.</p>
      <ul class="check-list">
        <li>Presupuesto sin compromiso</li>
        <li>Trato directo</li>
        <li>Servicio en ${ciudad} y alrededores</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Servicios principales</h2>
      <p>Soluciones claras para clientes que buscan rapidez, confianza y buen resultado.</p>
    </div>

    <div class="grid-3">
      ${serviciosCards}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-title">
      <h2>Por qué elegirnos</h2>
      <p>Una web sencilla debe responder rápido a tres preguntas: qué haces, dónde trabajas y cómo contactar.</p>
    </div>

    <div class="grid-3">
      <div class="trust-card">
        <h3>Contacto directo</h3>
        <p>Sin formularios complicados. WhatsApp y llamada visibles para facilitar el contacto.</p>
      </div>
      <div class="trust-card">
        <h3>Claridad desde el primer momento</h3>
        <p>Explicamos los servicios de forma sencilla para que el cliente entienda rápido.</p>
      </div>
      <div class="trust-card">
        <h3>Orientado a conseguir clientes</h3>
        <p>Diseño pensado para conversión local, no solo para verse bonito.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Preguntas frecuentes</h2>
    </div>

    <div class="grid-3">
      <div class="faq-card">
        <h3>¿Dais presupuesto?</h3>
        <p>Sí, puedes contactar por WhatsApp y explicar qué necesitas.</p>
      </div>
      <div class="faq-card">
        <h3>¿Trabajáis en ${ciudad}?</h3>
        <p>Sí, ofrecemos servicio en ${ciudad} y zonas cercanas.</p>
      </div>
      <div class="faq-card">
        <h3>¿Puedo llamar directamente?</h3>
        <p>Sí, puedes llamar al ${telefono} para una atención más rápida.</p>
      </div>
    </div>
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

<div class="mobile-bar">
  <a class="mobile-whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
  <a class="mobile-call" href="tel:${telefono}">Llamar</a>
</div>

</body>
</html>
`;

  const serviciosHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Servicios de ${negocio} en ${ciudad}</title>
  <meta name="description" content="Servicios de ${negocio} en ${ciudad}: ${serviciosFinales.join(", ")}. Contacto rápido por WhatsApp.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <div class="container header-inner">
    <div class="logo">${negocio}</div>
    <nav class="nav">
      <a href="index.html">Inicio</a>
      <a href="servicios.html">Servicios</a>
      <a href="tel:${telefono}">Llamar</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="container">
    <span class="badge">Servicios en ${ciudad}</span>
    <h1>Servicios de ${negocio} en ${ciudad}</h1>
    <p>Consulta nuestros servicios principales y contacta por WhatsApp para pedir información.</p>
    <div class="btn-row">
      <a class="btn btn-whatsapp" href="https://wa.me/34${whatsapp}">Pedir presupuesto</a>
      <a class="btn btn-light" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Qué podemos hacer por ti</h2>
      <p>Estos son los servicios principales disponibles.</p>
    </div>

    <div class="grid-3">
      ${serviciosCards}
    </div>
  </div>
</section>

<section class="cta">
  <div class="container">
    <h2>Solicita información sin compromiso</h2>
    <p>Cuéntanos qué necesitas y te atendemos directamente.</p>
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

<div class="mobile-bar">
  <a class="mobile-whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
  <a class="mobile-call" href="tel:${telefono}">Llamar</a>
</div>

</body>
</html>
`;

  window.indexFile = indexHTML;
  window.serviciosFile = serviciosHTML;
  window.cssFile = cssGenerado;
  window.zipName = `${slug}.zip`;

  document.getElementById("frame").srcdoc = indexHTML;
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

  zip.generateAsync({ type: "blob" }).then(function(content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = window.zipName || "web-generada.zip";
    a.click();
  });
}
