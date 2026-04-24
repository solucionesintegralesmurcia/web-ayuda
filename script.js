function generarWeb() {

  let negocio = document.getElementById("negocio").value;
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let servicios = document.getElementById("servicios").value.split(",");

  let listaServicios = servicios.map(s => `<li>${s}</li>`).join("");

  let html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${negocio} en ${ciudad}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="font-family: Arial; padding:20px;">

<h1>${negocio} en ${ciudad}</h1>
<p>Servicio profesional de ${negocio.toLowerCase()} en ${ciudad}. Contacta ahora.</p>

<h2>Servicios</h2>
<ul>
${listaServicios}
</ul>

<a href="https://wa.me/34${whatsapp}" style="display:block; margin:20px 0; padding:15px; background:green; color:white; text-align:center;">WhatsApp</a>

<a href="tel:${telefono}" style="display:block; padding:15px; background:black; color:white; text-align:center;">Llamar</a>

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
