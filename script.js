const sectores = {
  aire: {
    servicios: "Instalación aire acondicionado, Mantenimiento, Reparación, Conductos, Carga de gas",
    texto: "Instalación, mantenimiento y reparación de aire acondicionado.",
    keyword: "aire acondicionado en"
  },
  cerrajeria: {
    servicios: "Puertas metálicas, Rejas, Cerramientos, Barandillas",
    texto: "Fabricación e instalación de trabajos metálicos.",
    keyword: "cerrajería en"
  },
  peluqueria: {
    servicios: "Corte, Mechas, Tinte, Peinados",
    texto: "Servicios profesionales de peluquería.",
    keyword: "peluquería en"
  },
  jardineria: {
    servicios: "Podas, Mantenimiento jardines, Césped, Riego",
    texto: "Cuidado y mantenimiento de jardines.",
    keyword: "jardinería en"
  },
  electricista: {
    servicios: "Instalaciones eléctricas, Averías, Cuadros eléctricos",
    texto: "Servicios eléctricos para viviendas y negocios.",
    keyword: "electricista en"
  },
  reformas: {
    servicios: "Reformas integrales, Baños, Cocinas",
    texto: "Reformas completas para viviendas.",
    keyword: "reformas en"
  },
  restaurante: {
    servicios: "Hamburguesas, Tapas, Menú",
    texto: "Comida y reservas.",
    keyword: "restaurante en"
  }
};

function rellenarAutomatico(){
  const sector = document.getElementById("sector").value;
  const data = sectores[sector];

  document.getElementById("servicios").value = data.servicios;
}

function generarWeb(){

  const sector = document.getElementById("sector").value;
  const negocio = document.getElementById("negocio").value || "Negocio";
  const ciudad = document.getElementById("ciudad").value || "Murcia";
  const telefono = document.getElementById("telefono").value || "600000000";
  const whatsapp = document.getElementById("whatsapp").value || telefono;

  const data = sectores[sector];

  const serviciosArray = document.getElementById("servicios").value.split(",");

  const serviciosHTML = serviciosArray.map(s => `
  <div class="card">
  <h3>${s}</h3>
  <p>Servicio de ${s} en ${ciudad}</p>
  </div>
  `).join("");

  const keyword = data.keyword + " " + ciudad;

  const linkWhats = `https://wa.me/34${whatsapp}?text=Hola quiero info`;

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${negocio} en ${ciudad}</title>
<meta name="description" content="${data.texto} en ${ciudad}">
<meta name="keywords" content="${keyword}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{margin:0;font-family:Arial;background:#f3f4f6}

.hero{
background:#111827;
color:white;
padding:60px;
text-align:center;
}

.btn{
display:inline-block;
margin:10px;
padding:14px 24px;
border-radius:8px;
font-weight:bold;
}

.btn-wa{background:#22c55e;color:white}
.btn-call{background:#111;color:white}

.section{
padding:40px;
max-width:900px;
margin:auto;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
}

</style>
</head>

<body>

<div class="hero">
<h1>${negocio}</h1>
<p>${ciudad}</p>

<a class="btn btn-wa" href="${linkWhats}">WhatsApp</a>
<a class="btn btn-call" href="tel:${telefono}">Llamar</a>
</div>

<div class="section">
<h2>Servicios</h2>
<div class="grid">
${serviciosHTML}
</div>
</div>

<div class="section">
<h2>Ubicación</h2>
<iframe src="https://www.google.com/maps?q=${ciudad}&output=embed" width="100%" height="300"></iframe>
</div>

</body>
</html>
`;

  window.indexFile = html;
  document.getElementById("frame").srcdoc = html;
}

function descargar(){
  const zip = new JSZip();
  zip.file("index.html", window.indexFile);

  zip.generateAsync({type:"blob"}).then(content=>{
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "web.zip";
    a.click();
  });
}
