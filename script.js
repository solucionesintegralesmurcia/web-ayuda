const demoDefaults = {
  nombre: "Peluquería Paqui",
  sector: "peluquería unisex",
  ciudad: "Murcia",
  telefono: "34639111111",
  direccion: "Calle Mayor 12, Murcia",
  zona: "Murcia, Alcantarilla, Molina de Segura",
  descripcion: "Peluquería en Murcia con atención cercana, cortes, color y peinados con un acabado cuidado y profesional.",
  anos: "10",
  ctaTexto: "Pedir cita por WhatsApp",
  mensajeWhatsapp: "Hola, quiero información y pedir cita.",
  serv1: "Corte de pelo",
  serv2: "Color y mechas",
  serv3: "Peinados",
  serv4: "Tratamientos capilares",
  sobreTitulo: "Atención cercana y estilo cuidado",
  sobreTexto: "Trabajamos cada servicio con detalle para que el cliente salga contento, cómodo y con un resultado que encaje con su estilo.",
  resena1Nombre: "Ana",
  resena1Texto: "Muy contenta con el trato y el resultado. Volveré sin duda.",
  resena2Nombre: "Pedro",
  resena2Texto: "Profesionalidad, cercanía y todo muy bien explicado desde el principio.",
  resena3Nombre: "Laura",
  resena3Texto: "Me encantó el resultado y el ambiente. Muy recomendable.",
  plantilla: "profesional",
  modoPagina: "completa",
  color: "#8b5e3c"
};

let generatedHTML = "";
let generatedCSS = "";
let generatedSEO = "";
let generatedNotes = "";

function $(id) { return document.getElementById(id); }

function aplicarDemoSiVacio() {
  Object.entries(demoDefaults).forEach(([key, value]) => {
    const el = $(key);
    if (!el) return;
    if (!el.value) el.value = value;
  });
}

function limpiarTelefono(numero) { return (numero || "").replace(/\D/g, ""); }
function slugify(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
function escaparHTML(texto) {
  return String(texto || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function encodeWa(texto) { return encodeURIComponent(texto || "Hola, quiero información."); }
function obtenerNombreArchivo(inputId, nombreDefecto) {
  const input = $(inputId);
  if (input && input.files && input.files.length > 0) return input.files[0].name;
  return nombreDefecto;
}

function mostrarPreview() {
  const preview = $("preview");
  preview.innerHTML = "";
  ["img1", "img2", "img3", "img4"].forEach((id) => {
    const fileInput = $(id);
    if (fileInput.files && fileInput.files.length > 0) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(fileInput.files[0]);
      preview.appendChild(img);
    }
  });
}

function cambiarTab(event) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(tab => tab.classList.remove("active"));
  event.currentTarget.classList.add("active");
  $(event.currentTarget.dataset.tab).classList.add("active");
}

function copiarTexto(id) {
  const campo = $(id);
  campo.select();
  campo.setSelectionRange(0, 999999);
  document.execCommand("copy");
  alert("Copiado");
}

function descargarArchivo(id, nombre, tipo) {
  const contenido = $(id).value;
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  a.click();
  URL.revokeObjectURL(url);
}

function guardarFormulario() {
  const data = {};
  document.querySelectorAll("input:not([type='file']), textarea, select").forEach(el => data[el.id] = el.value);
  localStorage.setItem("webAyudaProData", JSON.stringify(data));
  alert("Datos guardados en este navegador");
}

function cargarFormulario() {
  const saved = localStorage.getItem("webAyudaProData");
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    Object.entries(data).forEach(([key, value]) => {
      const el = $(key);
      if (el) el.value = value;
    });
  } catch (e) {}
}

function recogerDatos() {
  aplicarDemoSiVacio();
  return {
    nombre: $("nombre").value.trim(),
    sector: $("sector").value.trim(),
    ciudad: $("ciudad").value.trim(),
    telefono: $("telefono").value.trim(),
    direccion: $("direccion").value.trim(),
    zona: $("zona").value.trim(),
    descripcion: $("descripcion").value.trim(),
    anos: $("anos").value.trim(),
    ctaTexto: $("ctaTexto").value.trim() || "Contactar por WhatsApp",
    mensajeWhatsapp: $("mensajeWhatsapp").value.trim() || "Hola, quiero información.",
    serv1: $("serv1").value.trim(),
    serv2: $("serv2").value.trim(),
    serv3: $("serv3").value.trim(),
    serv4: $("serv4").value.trim(),
    sobreTitulo: $("sobreTitulo").value.trim() || "Atención cercana y trabajo cuidado",
    sobreTexto: $("sobreTexto").value.trim(),
    resena1Nombre: $("resena1Nombre").value.trim() || "Cliente 1",
    resena1Texto: $("resena1Texto").value.trim() || "Muy buena experiencia.",
    resena2Nombre: $("resena2Nombre").value.trim() || "Cliente 2",
    resena2Texto: $("resena2Texto").value.trim() || "Trato profesional y resultado muy bueno.",
    resena3Nombre: $("resena3Nombre").value.trim() || "Cliente 3",
    resena3Texto: $("resena3Texto").value.trim() || "Lo recomiendo.",
    plantilla: $("plantilla").value,
    modoPagina: $("modoPagina").value,
    color: $("color").value,
    img1: "imagen/" + obtenerNombreArchivo("img1", "portada.jpg"),
    img2: "imagen/" + obtenerNombreArchivo("img2", "galeria1.jpg"),
    img3: "imagen/" + obtenerNombreArchivo("img3", "galeria2.jpg"),
    img4: "imagen/" + obtenerNombreArchivo("img4", "galeria3.jpg")
  };
}

function generarEstilosPlantilla(plantilla, color) {
  const maps = {
    profesional: { heroOverlay: "rgba(0,0,0,.68)", dark: "#111111", light: "#f6f6f6", box: "#fafafa", shadow: "0 12px 30px rgba(0,0,0,.12)" },
    tradicional: { heroOverlay: "rgba(43,28,18,.62)", dark: "#2b1d16", light: "#f7f1ea", box: "#fbf6ef", shadow: "0 12px 30px rgba(61,37,19,.14)" },
    premium: { heroOverlay: "rgba(10,10,12,.78)", dark: "#0e0f13", light: "#f3f2ef", box: "#14161b", shadow: "0 12px 30px rgba(0,0,0,.22)" }
  };
  return maps[plantilla] || maps.profesional;
}

function generarWeb() {
  const d = recogerDatos();
  if (!d.nombre || !d.sector || !d.ciudad || !d.telefono) {
    alert("Rellena al menos nombre, sector, ciudad y teléfono.");
    return;
  }

  const tel = limpiarTelefono(d.telefono);
  const wa = `https://wa.me/${tel}?text=${encodeWa(d.mensajeWhatsapp)}`;
  const h1 = `${d.sector.charAt(0).toUpperCase() + d.sector.slice(1)} en ${d.ciudad}`;
  const title = `${d.nombre} | ${d.sector} en ${d.ciudad}`;
  const meta = `${d.nombre}, especialistas en ${d.sector} en ${d.ciudad}. ${d.serv1}, ${d.serv2}, ${d.serv3} y ${d.serv4}. Contacta por WhatsApp.`;
  const zonasLista = d.zona ? d.zona.split(",").map(z => z.trim()).filter(Boolean) : [d.ciudad];
  const styles = generarEstilosPlantilla(d.plantilla, d.color);
  const premiumText = d.plantilla === "premium" ? "Imagen cuidada, acabado elegante y una presencia más exclusiva." : d.plantilla === "tradicional" ? "Cercanía, confianza y atención de las de siempre." : "Atención profesional, rápida y clara desde el primer contacto.";
  const sobreTexto = d.sobreTexto || `${d.nombre} es un negocio local dedicado a ${d.sector} en ${d.ciudad}, con un enfoque práctico y cercano para cada cliente.`;
  const experienciaTexto = d.anos ? `${d.anos} años de experiencia` : `Atención especializada`;
  const landingOnlyClass = d.modoPagina === "landing" ? "landing-compact" : "";

  generatedHTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escaparHTML(title)}</title>
  <meta name="description" content="${escaparHTML(meta)}" />
  <link rel="stylesheet" href="style.css" />
</head>
<body class="${landingOnlyClass}">
  <header class="site-header">
    <div class="container nav">
      <div class="logo">${escaparHTML(d.nombre)}</div>
      <a class="btn btn-outline" href="${wa}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto)}</a>
    </div>
  </header>

  <section class="hero">
    <img class="hero-bg" src="${escaparHTML(d.img1)}" alt="${escaparHTML(d.nombre)} en ${escaparHTML(d.ciudad)}" />
    <div class="overlay"></div>
    <div class="container hero-content">
      <span class="tag">${escaparHTML(d.ciudad)}</span>
      <h1>${escaparHTML(h1)}</h1>
      <p>${escaparHTML(d.descripcion)}</p>
      <div class="hero-actions">
        <a class="btn" href="${wa}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto)}</a>
        <a class="btn btn-light" href="#servicios">Ver servicios</a>
      </div>
    </div>
  </section>

  <section class="intro ${d.modoPagina === "landing" ? "hide-on-landing" : ""}">
    <div class="container intro-grid">
      <div>
        <h2>${escaparHTML(d.sobreTitulo)}</h2>
        <p>${escaparHTML(sobreTexto)}</p>
      </div>
      <div class="intro-card">
        <strong>${escaparHTML(experienciaTexto)}</strong>
        <ul>
          <li>${escaparHTML(premiumText)}</li>
          <li>Servicio en ${escaparHTML(d.ciudad)} y alrededores.</li>
          <li>Contacto directo por WhatsApp.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="servicios" class="services">
    <div class="container">
      <h2>${d.modoPagina === "landing" ? "Lo más destacado" : "Qué ofrecemos"}</h2>
      <div class="cards">
        <article class="card"><h3>${escaparHTML(d.serv1)}</h3><p>Solución enfocada a clientes que buscan ${escaparHTML(d.serv1)} en ${escaparHTML(d.ciudad)}.</p></article>
        <article class="card"><h3>${escaparHTML(d.serv2)}</h3><p>Atención profesional para quienes necesitan ${escaparHTML(d.serv2)} con trato directo.</p></article>
        <article class="card"><h3>${escaparHTML(d.serv3)}</h3><p>Trabajo cuidado y orientado a quienes buscan ${escaparHTML(d.serv3)} en la zona.</p></article>
        <article class="card"><h3>${escaparHTML(d.serv4)}</h3><p>Otra línea destacada dentro de ${escaparHTML(d.nombre)} para ofrecer más opciones al cliente.</p></article>
      </div>
    </div>
  </section>

  <section class="gallery ${d.modoPagina === "landing" ? "hide-on-landing" : ""}">
    <div class="container">
      <h2>Galería</h2>
      <div class="gallery-grid">
        <img src="${escaparHTML(d.img1)}" alt="${escaparHTML(d.serv1)}" />
        <img src="${escaparHTML(d.img2)}" alt="${escaparHTML(d.serv2)}" />
        <img src="${escaparHTML(d.img3)}" alt="${escaparHTML(d.serv3)}" />
        <img src="${escaparHTML(d.img4)}" alt="${escaparHTML(d.serv4)}" />
      </div>
    </div>
  </section>

  <section class="reviews ${d.modoPagina === "landing" ? "hide-on-landing" : ""}">
    <div class="container">
      <h2>Opiniones de clientes</h2>
      <div class="review-cards">
        <article class="review-card"><div class="stars">★★★★★</div><p>${escaparHTML(d.resena1Texto)}</p><strong>${escaparHTML(d.resena1Nombre)}</strong></article>
        <article class="review-card"><div class="stars">★★★★★</div><p>${escaparHTML(d.resena2Texto)}</p><strong>${escaparHTML(d.resena2Nombre)}</strong></article>
        <article class="review-card"><div class="stars">★★★★★</div><p>${escaparHTML(d.resena3Texto)}</p><strong>${escaparHTML(d.resena3Nombre)}</strong></article>
      </div>
    </div>
  </section>

  <section class="zones ${d.modoPagina === "landing" ? "hide-on-landing" : ""}">
    <div class="container">
      <h2>Zonas de trabajo</h2>
      <div class="zones-list">
        ${zonasLista.map(z => `<span>${escaparHTML(z)}</span>`).join("")}
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <h2>Preguntas frecuentes</h2>
      <div class="faq-list">
        <div class="faq-item"><h3>¿Dónde está ${escaparHTML(d.nombre)}?</h3><p>${escaparHTML(d.direccion || d.ciudad)}</p></div>
        <div class="faq-item"><h3>¿Qué servicios o productos ofrecéis?</h3><p>${escaparHTML(d.serv1)}, ${escaparHTML(d.serv2)}, ${escaparHTML(d.serv3)} y ${escaparHTML(d.serv4)}.</p></div>
        <div class="faq-item"><h3>¿Cómo contacto rápido?</h3><p>Puedes escribir directamente por WhatsApp al ${escaparHTML(d.telefono)}.</p></div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container cta-box">
      <div>
        <h2>Contacta con ${escaparHTML(d.nombre)}</h2>
        <p>Si buscas ${escaparHTML(d.sector)} en ${escaparHTML(d.ciudad)}, escríbenos y te respondemos por WhatsApp.</p>
      </div>
      <a class="btn btn-big" href="${wa}" target="_blank" rel="noopener">${escaparHTML(d.ctaTexto)}</a>
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

  generatedCSS = `*{box-sizing:border-box} :root{--dark:${styles.dark};--light:${styles.light};--box:${styles.box};--white:#ffffff;--text:${d.plantilla === "premium" ? "#f2f2f2" : "#222222"};--muted:${d.plantilla === "premium" ? "rgba(255,255,255,.72)" : "#666666"};--line:${d.plantilla === "premium" ? "rgba(255,255,255,.08)" : "#e5e5e5"};--accent:${d.color};--radius:18px;--shadow:${styles.shadow}} html{scroll-behavior:smooth} body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--text);background:${d.plantilla === "premium" ? "#0b0d12" : "var(--white)"};line-height:1.6} img{max-width:100%;display:block} a{text-decoration:none} .container{width:min(1180px,calc(100% - 32px));margin:0 auto} .site-header{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.92);backdrop-filter:blur(8px)} .nav{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:16px} .logo{color:var(--white);font-size:1.2rem;font-weight:800;letter-spacing:.4px} .btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;border-radius:999px;background:var(--accent);color:var(--white);font-weight:700;transition:.2s ease}.btn:hover{transform:translateY(-1px);opacity:.95}.btn-outline{background:transparent;border:1px solid rgba(255,255,255,.24)} .btn-light{background:var(--white);color:#111}.btn-big{padding:16px 28px} .hero{position:relative;min-height:78vh;display:flex;align-items:center;overflow:hidden}.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.overlay{position:absolute;inset:0;background:linear-gradient(90deg, ${styles.heroOverlay} 0%, rgba(0,0,0,.35) 65%, rgba(0,0,0,.18) 100%)} .hero-content{position:relative;z-index:2;color:var(--white);max-width:760px;padding:70px 0}.tag{display:inline-block;margin-bottom:14px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);font-size:.92rem}.hero h1{margin:0 0 14px;font-size:clamp(2.2rem,5vw,4.4rem);line-height:1.05}.hero p{margin:0;font-size:1.08rem;max-width:680px}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.intro,.services,.gallery,.reviews,.zones,.faq,.cta{padding:72px 0}.intro-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:start}.intro-card,.card,.faq-item,.review-card{background:${d.plantilla === "premium" ? "#14161b" : "var(--white)"};border:1px solid var(--line);border-radius:var(--radius);padding:22px;box-shadow:var(--shadow)} .intro-card ul{margin:14px 0 0;padding-left:18px}.services{background:${d.plantilla === "premium" ? "#101319" : "#fafafa"}} .services h2,.gallery h2,.faq h2,.intro h2,.reviews h2,.zones h2{margin-top:0;font-size:clamp(1.8rem,3vw,2.6rem)} .cards,.review-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:24px}.review-cards{grid-template-columns:repeat(3,1fr)} .card h3,.faq-item h3{margin-top:0;margin-bottom:10px}.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:24px}.gallery-grid img{width:100%;height:250px;object-fit:cover;border-radius:16px}.stars{font-size:1.15rem;color:#ffcf4a;margin-bottom:10px}.zones-list{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.zones-list span{padding:10px 14px;border-radius:999px;background:${d.plantilla === "premium" ? "#14161b" : "#f3f3f3"};border:1px solid var(--line)} .faq-list{display:grid;gap:14px;margin-top:24px}.cta-box{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:28px;background:var(--dark);color:var(--white);border-radius:24px}.cta-box h2{margin-top:0;margin-bottom:10px}.site-footer{background:#0f0f0f;color:rgba(255,255,255,.88);padding:28px 0}.footer-grid{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap}.landing-compact .hide-on-landing{display:none}@media (max-width:980px){.intro-grid,.cards,.gallery-grid,.review-cards{grid-template-columns:1fr 1fr}.cta-box{flex-direction:column;align-items:flex-start}}@media (max-width:640px){.container{width:min(100% - 20px,1180px)}.nav{min-height:68px}.hero{min-height:auto}.hero-content{padding:58px 0}.intro,.services,.gallery,.reviews,.zones,.faq,.cta{padding:54px 0}.intro-grid,.cards,.gallery-grid,.review-cards{grid-template-columns:1fr}.gallery-grid img{height:220px}.btn,.btn-big,.btn-light,.btn-outline{width:100%}.hero-actions{flex-direction:column}}`;

  generatedSEO = `TITLE:\n${title}\n\nMETA DESCRIPTION:\n${meta}\n\nH1:\n${h1}\n\nSLUG SUGERIDO:\n${slugify(d.sector)}-${slugify(d.ciudad)}\n\nNOMBRES SEO PARA IMÁGENES:\n1. ${slugify(d.sector)}-${slugify(d.ciudad)}-1.jpg\n2. ${slugify(d.sector)}-${slugify(d.ciudad)}-2.jpg\n3. ${slugify(d.sector)}-${slugify(d.ciudad)}-3.jpg\n4. ${slugify(d.sector)}-${slugify(d.ciudad)}-4.jpg\n\nPALABRAS CLAVE SUGERIDAS:\n- ${d.sector} en ${d.ciudad}\n- ${d.serv1} en ${d.ciudad}\n- ${d.serv2} en ${d.ciudad}\n- ${d.serv3} en ${d.ciudad}\n- ${d.serv4} en ${d.ciudad}`;

  generatedNotes = `CARPETA RECOMENDADA:\nproyecto-cliente/\n├── index.html\n├── style.css\n└── imagen/\n    ├── ${obtenerNombreArchivo("img1", "portada.jpg")}\n    ├── ${obtenerNombreArchivo("img2", "galeria1.jpg")}\n    ├── ${obtenerNombreArchivo("img3", "galeria2.jpg")}\n    └── ${obtenerNombreArchivo("img4", "galeria3.jpg")}\n\nRECOMENDACIONES:\n- Sube las imágenes a la carpeta imagen\n- Revisa teléfono y dirección antes de publicar\n- Si quieres una landing más corta, deja Tipo de web en Landing rápida\n- Puedes reutilizar esta herramienta para casi cualquier negocio local`;

  $("seoOutput").value = generatedSEO;
  $("htmlOutput").value = generatedHTML;
  $("cssOutput").value = generatedCSS;
  $("notasOutput").value = generatedNotes;

  const frame = $("previewFrame");
  const previewDoc = `${generatedHTML.replace('<link rel="stylesheet" href="style.css" />', `<style>${generatedCSS}</style>`)}`;
  frame.srcdoc = previewDoc;

  guardarFormulario();
}

async function descargarProyectoZIP() {
  if (!generatedHTML || !generatedCSS) generarWeb();
  const zip = new JSZip();
  zip.file("index.html", generatedHTML);
  zip.file("style.css", generatedCSS);
  const imgFolder = zip.folder("imagen");
  [
    { id: "img1", name: obtenerNombreArchivo("img1", "portada.jpg") },
    { id: "img2", name: obtenerNombreArchivo("img2", "galeria1.jpg") },
    { id: "img3", name: obtenerNombreArchivo("img3", "galeria2.jpg") },
    { id: "img4", name: obtenerNombreArchivo("img4", "galeria3.jpg") }
  ].forEach(({ id, name }) => {
    const input = $(id);
    if (input.files && input.files[0]) imgFolder.file(name, input.files[0]);
  });
  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${slugify($("nombre").value || "proyecto-web")}.zip`;
  a.click();
  URL.revokeObjectURL(url);
}

window.addEventListener("DOMContentLoaded", () => {
  cargarFormulario();
  aplicarDemoSiVacio();
  generarWeb();
});
