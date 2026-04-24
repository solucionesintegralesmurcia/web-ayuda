function generarWeb() {

  let negocio = document.getElementById("negocio").value;
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let servicios = document.getElementById("servicios").value.split(",");

  let listaServicios = servicios.map(s => `
    <div class="card">
      <h3>${s}</h3>
      <p>Servicio profesional de ${s} en ${ciudad}. Calidad, rapidez y buen precio.</p>
    </div>
  `).join("");

  let html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${negocio} en ${ciudad}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  margin:0;
  font-family: Arial;
}

.hero {
  background:#111;
  color:#fff;
  padding:60px 20px;
  text-align:center;
}

.hero h1 {
  font-size:28px;
}

.btn {
  display:inline-block;
  margin:10px;
  padding:15px 20px;
  text-decoration:none;
  color:white;
  border-radius:5px;
}

.whatsapp {
  background:green;
}

.llamar {
  background:black;
}

.section {
  padding:40px 20px;
}

.grid {
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
}

.card {
  border:1px solid #ddd;
  padding:20px;
  border-radius:10px;
}

.footer {
  background:#111;
  color:#fff;
  padding:20px;
  text-align:center;
}
</style>

</head>

<body>

<div class="hero">
  <h1>${negocio} en ${ciudad}</h1>
  <p>Soluciones rápidas, profesionales y sin complicaciones.</p>

  <a class="btn whatsapp" href="https://wa.me/34${whatsapp}">WhatsApp</a>
  <a class="btn llamar" href="tel:${telefono}">Llamar</a>
</div>

<div class="section">
  <h2>Servicios</h2>
  <div class="grid">
    ${listaServicios}
  </div>
</div>

<div class="section">
  <h2>¿Por qué elegirnos?</h2>
  <ul>
    <li>Atención rápida</li>
    <li>Presupuesto sin compromiso</li>
    <li>Profesionales con experiencia</li>
  </ul>
</div>

<div class="section">
  <h2>Contacta ahora</h2>
  <p>Envíanos un WhatsApp o llámanos y te damos solución.</p>

  <a class="btn whatsapp" href="https://wa.me/34${whatsapp}">Enviar WhatsApp</a>
  <a class="btn llamar" href="tel:${telefono}">Llamar ahora</a>
</div>

<div class="footer">
  <p>${negocio} en ${ciudad}</p>
</div>

</body>
</html>
`;

  document.getElementById("resultado").value = html;
}

function descargar() {
  let contenido = document.getElementById("resultado").value;
  let blob = new Blob([contenido], { type: "text/html" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "index.html";
  a.click();
}
