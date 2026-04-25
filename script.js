let cssGenerado = "";
let mensajeCliente = "";

// ---------- UTIL ----------
function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------- PLANTILLA 1 (IMPACTO) ----------
function plantillaImpacto(negocio, ciudad, telefono, linkWhats, linkFotos, servicios) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${negocio} en ${ciudad}</title>

<style>
body {margin:0;font-family:sans-serif;background:#0f172a;color:#fff}
.hero {padding:80px 20px;text-align:center;background:#020617}
.hero h1 {font-size:42px;margin-bottom:10px}
.btn {display:block;margin:10px auto;padding:15px;border-radius:10px;font-weight:bold;text-align:center}
.btn-wa {background:#22c55e;color:#fff}
.btn-call {background:#2563eb;color:#fff}
.section {padding:40px 20px}
.card {background:#1f2937;padding:20px;margin-bottom:15px;border-radius:10px}
</style>
</head>

<body>

<div class="hero">
<h1>${negocio} en ${ciudad}</h1>
<p>Presupuesto rápido por WhatsApp</p>

<a class="btn btn-wa" href="${linkWhats}">WhatsApp</a>
<a class="btn btn-call" href="tel:${telefono}">Llamar</a>
<a class="btn btn-wa" href="${linkFotos}">Enviar fotos</a>
</div>

<div class="section">
<h2>Servicios</h2>
${servicios}
</div>

</body>
</html>
`;
}

// ---------- PLANTILLA 2 (PREMIUM) ----------
function plantillaPremium(negocio, ciudad, telefono, linkWhats, servicios) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${negocio}</title>

<style>
body {margin:0;font-family:sans-serif;background:#f9fafb;color:#111}
.header {padding:20px;background:#111;color:#fff;text-align:center}
.section {padding:40px}
.grid {display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.card {background:#fff;padding:20px;border-radius:10px}
.btn {display:inline-block;padding:12px 20px;background:#111;color:#fff;margin-top:10px}
</style>
</head>

<body>

<div class="header">
<h1>${negocio}</h1>
<p>${ciudad}</p>
</div>

<div class="section">
<h2>Servicios</h2>
<div class="grid">
${servicios}
</div>
</div>

<div class="section">
<a class="btn" href="${linkWhats}">Contactar por WhatsApp</a>
</div>

</body>
</html>
`;
}

// ---------- PLANTILLA 3 (SIMPLE) ----------
function plantillaSimple(negocio, ciudad, telefono, linkWhats) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${negocio}</title>

<style>
body {font-family:sans-serif;text-align:center;padding:40px}
.btn {display:block;margin:10px auto;padding:15px;background:black;color:white}
</style>
</head>

<body>

<h1>${negocio}</h1>
<p>${ciudad}</p>

<a class="btn" href="${linkWhats}">WhatsApp</a>
<a class="btn" href="tel:${telefono}">Llamar</a>

</body>
</html>
`;
}

// ---------- GENERADOR ----------
function generarWeb() {
  const plantilla = document.getElementById("plantilla").value;

  const negocio = document.getElementById("negocio").value || "Negocio";
  const ciudad = document.getElementById("ciudad").value || "Murcia";
  const telefono = document.getElementById("telefono").value || "600000000";
  const whatsapp = document.getElementById("whatsapp").value || telefono;

  const servicios = document.getElementById("servicios").value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => <div class="card">${s}</div>)
    .join("");

  const linkWhats = https://wa.me/34${whatsapp}?text=Hola;
  const linkFotos = https://wa.me/34${whatsapp}?text=Te envio fotos;

  let html = "";

  if (plantilla === "impacto") {
    html = plantillaImpacto(negocio, ciudad, telefono, linkWhats, linkFotos, servicios);
  } else if (plantilla === "premium") {
    html = plantillaPremium(negocio, ciudad, telefono, linkWhats, servicios);
  } else {
    html = plantillaSimple(negocio, ciudad, telefono, linkWhats);
  }

  window.indexFile = html;
  document.getElementById("frame").srcdoc = html;
}

// ---------- DESCARGA ----------
function descargar() {
  if (!window.indexFile) return alert("Genera primero la web");

  const zip = new JSZip();
  zip.file("index.html", window.indexFile);

  zip.generateAsync({ type: "blob" }).then(function(content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "web.zip";
    a.click();
  });
}

// ---------- AUTO ----------
function rellenarAutomatico() {
  document.getElementById("negocio").value = "Peluquería Estilo Único";
  document.getElementById("ciudad").value = "Murcia";
  document.getElementById("telefono").value = "600123456";
  document.getElementById("whatsapp").value = "600123456";
  document.getElementById("servicios").value = "Corte, Mechas, Tinte, Peinados";
}
