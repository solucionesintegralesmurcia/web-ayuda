function generarWeb(){

let nombre = document.getElementById("nombre").value;
let sector = document.getElementById("sector").value;
let ciudad = document.getElementById("ciudad").value;
let telefono = document.getElementById("telefono").value;

let s1 = document.getElementById("serv1").value;
let s2 = document.getElementById("serv2").value;
let s3 = document.getElementById("serv3").value;
let s4 = document.getElementById("serv4").value;

let titulo = `${nombre} | ${sector} en ${ciudad}`;

let seo = `TITLE:\n${titulo}\n\nH1:\n${sector} en ${ciudad}`;

let html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${titulo}</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>${sector} en ${ciudad}</h1>

<p>${nombre} - Especialistas en ${s1}, ${s2}, ${s3} y ${s4}</p>

<a href="https://wa.me/${telefono}">Contactar por WhatsApp</a>

</body>
</html>
`;

let css = `
body {
  font-family: Arial;
  text-align:center;
}
a{
  display:inline-block;
  padding:10px;
  background:green;
  color:white;
}
`;

document.getElementById("seoOutput").value = seo;
document.getElementById("htmlOutput").value = html;
document.getElementById("cssOutput").value = css;

document.getElementById("previewFrame").srcdoc = html;
}

function nuevoNegocio(){

document.querySelectorAll("input").forEach(el => el.value = "");
document.querySelectorAll("textarea").forEach(el => el.value = "");

document.getElementById("previewFrame").srcdoc = "";

alert("Listo para nuevo cliente 🚀");
}
