function generarWeb() {

  let negocio = document.getElementById("negocio").value;
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let servicios = document.getElementById("servicios").value.split(",");
  let plantilla = document.getElementById("plantilla").value;

  let listaServicios = servicios.map(s => `<li>${s}</li>`).join("");

  // INDEX
  let index = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${negocio} en ${ciudad}</title>
<meta name="description" content="Servicio profesional de ${negocio} en ${ciudad}. Contacta ahora por WhatsApp.">

</head>

<body style="font-family:Arial;padding:20px;">

<h1>${negocio} en ${ciudad}</h1>

<p>Servicio rápido y profesional. Contacta sin compromiso.</p>

<a href="https://wa.me/34${whatsapp}">WhatsApp</a>
<a href="tel:${telefono}">Llamar</a>

<h2>Servicios</h2>
<ul>
${listaServicios}
</ul>

<a href="servicios.html">Ver servicios</a>

</body>
</html>
`;

  // SERVICIOS
  let serviciosHTML = servicios.map(s => `
<h2>${s} en ${ciudad}</h2>
<p>Ofrecemos ${s} en ${ciudad} con calidad y rapidez.</p>
<a href="https://wa.me/34${whatsapp}">Solicitar ${s}</a>
`).join("");

  let serviciosPage = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Servicios de ${negocio} en ${ciudad}</title>
<meta name="description" content="Servicios de ${negocio} en ${ciudad}. Presupuesto rápido por WhatsApp.">
</head>

<body style="font-family:Arial;padding:20px;">

<h1>Servicios de ${negocio}</h1>

${serviciosHTML}

<a href="index.html">Volver</a>

</body>
</html>
`;

  window.indexFile = index;
  window.serviciosFile = serviciosPage;

  document.getElementById("frame").srcdoc = index;
}

function descargar() {

  let zip = new JSZip();

  zip.file("index.html", window.indexFile);
  zip.file("servicios.html", window.serviciosFile);

  zip.generateAsync({type:"blob"}).then(function(content) {
    let a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "web.zip";
    a.click();
  });
}
