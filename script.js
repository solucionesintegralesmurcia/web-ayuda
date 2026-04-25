const sectores = {
  peluqueria: {
    servicios: "Corte de pelo mujer, Corte de pelo hombre, Mechas, Tinte, Peinados, Tratamientos",
    keyword: "peluquería en"
  },
  aire: {
    servicios: "Instalación aire acondicionado, Mantenimiento, Reparación, Conductos, Carga de gas",
    keyword: "aire acondicionado en"
  },
  cerrajeria: {
    servicios: "Puertas metálicas, Rejas, Cerramientos, Barandillas, Ventanas",
    keyword: "cerrajería en"
  },
  jardineria: {
    servicios: "Mantenimiento de jardines, Podas, Césped, Riego, Limpieza parcelas",
    keyword: "jardinería en"
  },
  electricista: {
    servicios: "Instalaciones eléctricas, Averías, Cuadros eléctricos, Iluminación",
    keyword: "electricista en"
  },
  reformas: {
    servicios: "Reformas integrales, Baños, Cocinas, Pintura, Albañilería",
    keyword: "reformas en"
  },
  restaurante: {
    servicios: "Hamburguesas, Tapas, Menú diario, Bocadillos",
    keyword: "restaurante en"
  },
  dentista: {
    servicios: "Implantes, Ortodoncia, Limpieza dental, Blanqueamiento",
    keyword: "dentista en"
  },
  limpieza: {
    servicios: "Limpieza casas, Oficinas, Comunidades, Cristales",
    keyword: "empresa de limpieza en"
  },
  piscinas: {
    servicios: "Mantenimiento piscinas, Limpieza, Cloro y PH",
    keyword: "piscinas en"
  },
  abogado: {
    servicios: "Derecho civil, Laboral, Familia, Asesoramiento",
    keyword: "abogado en"
  }
};

function rellenarAutomatico() {
  const sector = document.getElementById("sector").value;
  const ciudad = document.getElementById("ciudad").value || "Murcia";
  const negocio = document.getElementById("negocio").value || "Negocio";

  const data = sectores[sector];

  document.getElementById("servicios").value = data.servicios;
}

function generarWeb() {
  const sector = document.getElementById("sector").value;
  const negocio = document.getElementById("negocio").value || "Negocio";
  const ciudad = document.getElementById("ciudad").value || "Murcia";
  const telefono = document.getElementById("telefono").value || "600000000";
  const whatsapp = document.getElementById("whatsapp").value || telefono;

  const data = sectores[sector];

  const servicios = document.getElementById("servicios").value
    .split(",")
    .map(s => `<li>${s}</li>`)
    .join("");

  const titulo = `${negocio} en ${ciudad}`;
  const descripcion = `${negocio} en ${ciudad}. Servicio profesional con contacto directo por WhatsApp.`;

  const linkWhats = `https://wa.me/34${whatsapp}?text=Hola quiero información`;

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${titulo}</title>
<meta name="description" content="${descripcion}">
<style>
body{font-family:sans-serif;text-align:center;padding:40px}
.btn{display:block;margin:10px auto;padding:15px;background:black;color:white}
</style>
</head>

<body>

<h1>${negocio}</h1>
<p>${ciudad}</p>

<ul>${servicios}</ul>

<a class="btn" href="${linkWhats}">WhatsApp</a>
<a class="btn" href="tel:${telefono}">Llamar</a>

</body>
</html>
`;

  window.indexFile = html;
  document.getElementById("frame").srcdoc = html;
}

function descargar() {
  const zip = new JSZip();
  zip.file("index.html", window.indexFile);

  zip.generateAsync({type:"blob"}).then(content => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "web.zip";
    a.click();
  });
}
