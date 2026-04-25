let cssGenerado = "";
let mensajeCliente = "";

const sectores = {
  generico: {
    intro: "Servicio profesional, atención directa y presupuesto rápido.",
    keyword: "servicio local en Murcia",
    paleta: "verde",
    servicios: [
      { titulo: "Servicio principal", descripcion: "Servicio adaptado a las necesidades del cliente, con atención directa y explicación clara desde el primer contacto." },
      { titulo: "Presupuesto sin compromiso", descripcion: "Analizamos cada caso y ofrecemos una orientación clara para que el cliente sepa qué necesita antes de decidir." },
      { titulo: "Atención personalizada", descripcion: "Trato cercano y directo para resolver dudas, ajustar detalles y facilitar el proceso de contratación." },
      { titulo: "Servicio local", descripcion: "Atención en la zona con respuesta rápida y comunicación sencilla por teléfono o WhatsApp." },
      { titulo: "Soluciones a medida", descripcion: "Cada trabajo se adapta al tipo de cliente, necesidad, presupuesto y objetivo concreto." },
      { titulo: "Contacto rápido", descripcion: "El cliente puede llamar o escribir por WhatsApp para recibir información sin complicaciones." }
    ]
  },
  peluqueria: {
    intro: "Cortes, coloración y tratamientos capilares con atención cercana.",
    keyword: "peluquería en Murcia",
    paleta: "rosa",
    servicios: [
      { titulo: "Corte de pelo mujer", descripcion: "Cortes actuales y personalizados según el estilo, tipo de cabello y acabado que busca cada clienta." },
      { titulo: "Corte de pelo hombre", descripcion: "Corte masculino práctico, limpio y adaptado al estilo personal, con atención rápida y cercana." },
      { titulo: "Mechas balayage", descripcion: "Mechas con acabado natural para aportar luz, movimiento y un resultado elegante al cabello." },
      { titulo: "Tinte profesional", descripcion: "Coloración profesional para cubrir canas, renovar el tono o conseguir un cambio de imagen cuidado." },
      { titulo: "Peinados para eventos", descripcion: "Peinados para bodas, comuniones, celebraciones y ocasiones especiales con acabado duradero." },
      { titulo: "Tratamientos capilares", descripcion: "Tratamientos para hidratar, reparar y mejorar el aspecto del cabello según su estado y necesidad." }
    ]
  },
  aire: {
    intro: "Instalación, mantenimiento y reparación de aire acondicionado.",
    keyword: "aire acondicionado en Murcia",
    paleta: "azul",
    servicios: [
      { titulo: "Instalación de aire acondicionado", descripcion: "Instalación de equipos de aire acondicionado en viviendas, locales y negocios con asesoramiento claro." },
      { titulo: "Mantenimiento de aire acondicionado", descripcion: "Revisión y mantenimiento para mejorar el rendimiento, evitar averías y alargar la vida del equipo." },
      { titulo: "Reparación de aire acondicionado", descripcion: "Diagnóstico de averías y reparación de equipos que no enfrían, hacen ruido o presentan fallos de funcionamiento." },
      { titulo: "Conductos de climatización", descripcion: "Instalación y revisión de sistemas de climatización por conductos para viviendas y locales." },
      { titulo: "Carga de gas", descripcion: "Revisión de presión y carga de gas cuando el equipo ha perdido rendimiento o no enfría correctamente." },
      { titulo: "Limpieza de filtros", descripcion: "Limpieza y revisión básica para mejorar la calidad del aire y el funcionamiento del sistema." }
    ]
  },
  cerrajeria: {
    intro: "Fabricación e instalación de puertas, rejas y trabajos metálicos.",
    keyword: "cerrajería en Murcia",
    paleta: "negro",
    servicios: [
      { titulo: "Puertas metálicas", descripcion: "Fabricación e instalación de puertas metálicas a medida para viviendas, parcelas, cocheras y negocios." },
      { titulo: "Rejas a medida", descripcion: "Diseño, fabricación e instalación de rejas de seguridad adaptadas a ventanas, bajos, patios y accesos." },
      { titulo: "Cerramientos metálicos", descripcion: "Cerramientos para terrazas, patios, parcelas o espacios exteriores con estructura resistente y acabado profesional." },
      { titulo: "Barandillas", descripcion: "Barandillas metálicas para escaleras, terrazas y balcones, fabricadas a medida y con montaje profesional." },
      { titulo: "Ventanas de aluminio", descripcion: "Instalación de ventanas de aluminio para mejorar aislamiento, seguridad y estética en viviendas y locales." },
      { titulo: "Estructuras metálicas", descripcion: "Trabajos de estructura metálica para proyectos a medida, refuerzos, soportes y soluciones personalizadas." }
    ]
  },
  jardineria: {
    intro: "Mantenimiento de jardines, podas y cuidado de espacios exteriores.",
    keyword: "jardinería en Murcia",
    paleta: "verde",
    servicios: [
      { titulo: "Mantenimiento de jardines", descripcion: "Cuidado periódico de jardines para mantenerlos limpios, sanos y con buena imagen durante todo el año." },
      { titulo: "Poda de árboles", descripcion: "Poda controlada de árboles y plantas para mejorar su crecimiento, seguridad y aspecto general." },
      { titulo: "Limpieza de parcelas", descripcion: "Desbroce y limpieza de parcelas, terrenos y zonas exteriores con retirada de restos vegetales." },
      { titulo: "Césped artificial", descripcion: "Instalación y mantenimiento de césped artificial para jardines, terrazas y zonas exteriores." },
      { titulo: "Sistemas de riego", descripcion: "Instalación y revisión de riego para optimizar el consumo de agua y cuidar mejor las plantas." },
      { titulo: "Mantenimiento de piscinas", descripcion: "Limpieza, revisión y mantenimiento básico de piscinas para conservar el agua en buen estado." }
    ]
  },
  electricista: {
    intro: "Instalaciones eléctricas, averías y soluciones para viviendas y negocios.",
    keyword: "electricista en Murcia",
    paleta: "dorado",
    servicios: [
      { titulo: "Instalaciones eléctricas", descripcion: "Instalaciones eléctricas en viviendas, locales y negocios con trabajo ordenado y adaptado a cada necesidad." },
      { titulo: "Reparación de averías", descripcion: "Localización y reparación de fallos eléctricos, cortes de luz, enchufes, interruptores y problemas de instalación." },
      { titulo: "Cuadros eléctricos", descripcion: "Montaje, revisión y sustitución de cuadros eléctricos para mejorar seguridad y funcionamiento." },
      { titulo: "Iluminación LED", descripcion: "Instalación de iluminación LED para viviendas, comercios, oficinas y zonas exteriores." },
      { titulo: "Certificados eléctricos", descripcion: "Gestión y revisión de instalaciones para obtener documentación eléctrica cuando sea necesaria." },
      { titulo: "Cargadores para coche eléctrico", descripcion: "Instalación de puntos de carga para vehículos eléctricos en viviendas, garajes y comunidades." }
    ]
  },
  reformas: {
    intro: "Reformas, mejoras y trabajos profesionales para viviendas y locales.",
    keyword: "reformas en Murcia",
    paleta: "dorado",
    servicios: [
      { titulo: "Reformas integrales", descripcion: "Reformas completas de viviendas y locales, coordinando los trabajos necesarios para renovar el espacio." },
      { titulo: "Reformas de baños", descripcion: "Renovación de baños con cambios de sanitarios, revestimientos, platos de ducha y distribución." },
      { titulo: "Reformas de cocinas", descripcion: "Reformas de cocinas para mejorar funcionalidad, estética, almacenamiento y comodidad de uso diario." },
      { titulo: "Pintura", descripcion: "Trabajos de pintura interior y exterior para renovar viviendas, locales, comunidades y espacios comerciales." },
      { titulo: "Albañilería", descripcion: "Trabajos de albañilería para reparaciones, modificaciones, tabiques, revestimientos y mejoras del espacio." },
      { titulo: "Pladur", descripcion: "Instalación de pladur para techos, tabiques, trasdosados, divisiones interiores y soluciones decorativas." }
    ]
  },
  restaurante: {
    intro: "Comida, reservas y atención cercana para disfrutar sin complicaciones.",
    keyword: "restaurante en Murcia",
    paleta: "rojo",
    servicios: [
      { titulo: "Hamburguesas", descripcion: "Hamburguesas preparadas con sabor, buen producto y opciones para disfrutar en local o para llevar." },
      { titulo: "Montaditos", descripcion: "Montaditos variados para comidas rápidas, cenas informales o compartir con amigos." },
      { titulo: "Bocadillos", descripcion: "Bocadillos clásicos y completos para quienes buscan una comida sencilla, rápida y con buen sabor." },
      { titulo: "Tapas", descripcion: "Tapas para compartir, acompañar una bebida o disfrutar de una comida informal." },
      { titulo: "Menú diario", descripcion: "Opciones de menú para comer bien entre semana con platos sencillos y precio ajustado." },
      { titulo: "Reservas", descripcion: "Reserva mesa de forma rápida para evitar esperas y disfrutar de la comida con tranquilidad." }
    ]
  },
  dentista: {
    intro: "Tratamientos dentales con atención profesional, cercana y de confianza.",
    keyword: "dentista en Murcia",
    paleta: "azul",
    servicios: [
      { titulo: "Implantes dentales", descripcion: "Tratamientos de implantes para recuperar piezas dentales y mejorar la funcionalidad de la boca." },
      { titulo: "Ortodoncia", descripcion: "Tratamientos de ortodoncia para corregir la posición dental y mejorar estética y mordida." },
      { titulo: "Limpieza dental", descripcion: "Limpieza profesional para mantener una buena salud bucodental y prevenir problemas de encías." },
      { titulo: "Estética dental", descripcion: "Tratamientos estéticos para mejorar la sonrisa de forma natural, cuidada y personalizada." },
      { titulo: "Blanqueamiento dental", descripcion: "Tratamiento para aclarar el tono de los dientes y conseguir una sonrisa más luminosa." },
      { titulo: "Revisión dental", descripcion: "Revisión completa para detectar problemas, resolver dudas y planificar el tratamiento adecuado." }
    ]
  },
  limpieza: {
    intro: "Servicios de limpieza profesional para viviendas, oficinas y comunidades.",
    keyword: "empresa de limpieza en Murcia",
    paleta: "azul",
    servicios: [
      { titulo: "Limpieza de oficinas", descripcion: "Limpieza profesional de oficinas para mantener espacios de trabajo ordenados, higiénicos y cuidados." },
      { titulo: "Limpieza de comunidades", descripcion: "Mantenimiento de portales, escaleras, zonas comunes y espacios compartidos en comunidades." },
      { titulo: "Limpieza de viviendas", descripcion: "Limpieza de viviendas habituales, puntuales o por cambio de inquilino con atención al detalle." },
      { titulo: "Limpieza fin de obra", descripcion: "Limpieza tras reformas u obras para retirar polvo, restos y dejar el espacio listo para usar." },
      { titulo: "Cristales", descripcion: "Limpieza de cristales, escaparates y superficies acristaladas para mejorar la imagen del espacio." },
      { titulo: "Mantenimiento de limpieza", descripcion: "Servicio periódico de limpieza adaptado a la frecuencia y necesidades de cada cliente." }
    ]
  },
  piscinas: {
    intro: "Mantenimiento, limpieza y puesta a punto de piscinas.",
    keyword: "mantenimiento de piscinas en Murcia",
    paleta: "azul",
    servicios: [
      { titulo: "Mantenimiento de piscinas", descripcion: "Servicio de mantenimiento para conservar la piscina limpia, segura y lista para el baño." },
      { titulo: "Limpieza de piscinas", descripcion: "Limpieza del vaso, superficie y elementos visibles para mantener una buena imagen y calidad del agua." },
      { titulo: "Control de cloro y PH", descripcion: "Revisión y ajuste de los niveles de cloro y PH para mantener el agua en condiciones adecuadas." },
      { titulo: "Puesta a punto", descripcion: "Preparación de la piscina antes de temporada para dejarla limpia y funcionando correctamente." },
      { titulo: "Reparaciones básicas", descripcion: "Revisión de pequeños fallos, elementos de depuración y problemas habituales en piscinas." },
      { titulo: "Limpieza de filtros", descripcion: "Limpieza y revisión de filtros para mejorar la circulación y mantener el agua en buen estado." }
    ]
  },
  abogado: {
    intro: "Asesoramiento legal claro, profesional y adaptado a cada caso.",
    keyword: "abogado en Murcia",
    paleta: "negro",
    servicios: [
      { titulo: "Derecho civil", descripcion: "Asesoramiento en asuntos civiles, reclamaciones, contratos, conflictos y situaciones personales o patrimoniales." },
      { titulo: "Derecho laboral", descripcion: "Orientación legal en despidos, contratos, reclamaciones laborales y conflictos entre empresa y trabajador." },
      { titulo: "Derecho de familia", descripcion: "Asesoramiento en separaciones, divorcios, custodias, pensiones y situaciones familiares delicadas." },
      { titulo: "Reclamaciones", descripcion: "Estudio y gestión de reclamaciones para defender derechos e intereses del cliente." },
      { titulo: "Contratos", descripcion: "Revisión y redacción de contratos para evitar problemas y dejar claras las condiciones." },
      { titulo: "Asesoramiento legal", descripcion: "Consulta legal personalizada para resolver dudas y definir los siguientes pasos con seguridad." }
    ]
  }
};

const paletas = {
  verde: ["#0f766e", "#115e59"],
  azul: ["#0284c7", "#0f172a"],
  negro: ["#111827", "#030712"],
  rojo: ["#dc2626", "#7f1d1d"],
  rosa: ["#be185d", "#831843"],
  dorado: ["#b45309", "#1f2937"]
};

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function obtenerServiciosFinales(datosSector, ciudad) {
  const cantidad = parseInt(document.getElementById("cantidadServicios")?.value || "4", 10);

  const serviciosCampo = document.getElementById("servicios").value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const serviciosBase = datosSector.servicios.slice(0, cantidad);

  if (!serviciosCampo.length) return serviciosBase;

  return serviciosCampo.slice(0, cantidad).map((titulo, index) => {
    const servicioBase = datosSector.servicios[index];

    return {
      titulo,
      descripcion: servicioBase
        ? servicioBase.descripcion
        : `Servicio de ${titulo.toLowerCase()} en ${ciudad}, con atención directa y presupuesto adaptado.`
    };
  });
}

function generarWeb() {
  const sector = document.getElementById("sector").value;
  const plantilla = document.getElementById("plantilla").value;
  const paleta = document.getElementById("paleta").value;

  const datosSector = sectores[sector] || sectores.generico;

  const negocio = document.getElementById("negocio").value.trim() || "Negocio local";
  const ciudad = document.getElementById("ciudad").value.trim() || "Murcia";
  const direccion = document.getElementById("direccion").value.trim() || `Calle principal, ${ciudad}`;
  const telefono = document.getElementById("telefono").value.trim() || "600123456";
  const whatsapp = document.getElementById("whatsapp").value.trim() || telefono;

  const usuarioGithub = "solucionesintegralesmurcia";

  const keyword = datosSector.keyword.replace("Murcia", ciudad);
  const tituloSeo = `${negocio} en ${ciudad} | Presupuesto rápido`;
  const descripcionSeo = `${negocio} en ${ciudad}. ${datosSector.intro} Contacto directo por WhatsApp.`;

  const serviciosFinales = obtenerServiciosFinales(datosSector, ciudad);

  const slug = limpiarTexto(`${negocio}-${ciudad}`);
  const urlWeb = `https://${usuarioGithub}.github.io/${slug}/`;
  const direccionMapa = encodeURIComponent(`${direccion} ${ciudad}`);

  const colores = paletas[paleta] || paletas[datosSector.paleta] || paletas.verde;
  const colorPrincipal = colores[0];
  const colorSecundario = colores[1];

  const plantillaClase = `template-${plantilla}`;

  const mensajeBase = encodeURIComponent(`Hola, quiero información sobre ${negocio} en ${ciudad}`);
  const mensajeFotos = encodeURIComponent(`Hola, te envío fotos para que me des presupuesto de ${negocio} en ${ciudad}`);

  const linkWhats = `https://wa.me/34${whatsapp}?text=${mensajeBase}`;
  const linkFotos = `https://wa.me/34${whatsapp}?text=${mensajeFotos}`;

  const serviciosCards = serviciosFinales.map(servicio => {
    const slugServicio = limpiarTexto(`${servicio.titulo}-${ciudad}`);
    const mensajeServicio = encodeURIComponent(`Hola, quiero presupuesto para ${servicio.titulo} en ${ciudad}`);
    const linkServicio = `https://wa.me/34${whatsapp}?text=${mensajeServicio}`;

    return `
      <article class="service-card">
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>

        <div class="service-actions">
          <a href="${slugServicio}.html" class="link-card">Ver página del servicio</a>
          <a href="${linkServicio}" class="link-card whatsapp-link">Pedir presupuesto</a>
        </div>
      </article>
    `;
  }).join("");

  cssGenerado = `
:root {
  --primary: ${colorPrincipal};
  --primary-dark: ${colorSecundario};
  --green: #22c55e;
  --dark: #111827;
  --text: #1f2937;
  --muted: #6b7280;
  --soft: #f3f4f6;
  --white: #ffffff;
  --radius: 22px;
  --shadow: 0 18px 40px rgba(0,0,0,0.12);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.6;
}

a { text-decoration: none; }

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
  font-weight: 900;
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
  font-weight: 700;
}

.hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: white;
  padding: 86px 0;
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
  padding: 15px 24px;
  border-radius: 999px;
  font-weight: 900;
  transition: 0.2s ease;
}

.btn:hover { transform: translateY(-2px); }

.btn-whatsapp {
  background: var(--green);
  color: white;
  box-shadow: 0 12px 28px rgba(34,197,94,0.35);
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
  padding: 72px 0;
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
.faq-card,
.location-box {
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
  color: var(--primary);
  font-weight: 900;
}

.service-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.service-actions .link-card {
  display: inline-flex;
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--soft);
}

.service-actions .whatsapp-link {
  background: var(--green);
  color: white;
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 30px;
}

.trust-item {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 16px;
  border-radius: 18px;
  color: white;
  font-weight: 800;
}

.steps-grid,
.faq-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.step-card,
.faq-item {
  background: white;
  padding: 26px;
  border-radius: var(--radius);
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 26px rgba(0,0,0,0.06);
}

.cta-soft {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: white;
  border-radius: 28px;
  padding: 42px;
  text-align: center;
}

.location-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 28px;
  align-items: stretch;
}

.map {
  width: 100%;
  min-height: 360px;
  border: 0;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.cta {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 72px 20px;
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

.footer a {
  color: #22c55e;
  font-weight: 700;
}

.floating-whatsapp {
  position: fixed;
  right: 18px;
  bottom: 88px;
  background: var(--green);
  color: white;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 14px 32px rgba(34,197,94,0.42);
  z-index: 998;
}

.back-top {
  position: fixed;
  right: 18px;
  bottom: 18px;
  background: var(--dark);
  color: white;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 14px 32px rgba(0,0,0,0.25);
  z-index: 998;
}

.mobile-bar { display: none; }

.template-impacto .hero {
  padding: 110px 0;
  background: linear-gradient(135deg, #020617, var(--primary));
}

.template-impacto .hero h1 {
  text-transform: uppercase;
  letter-spacing: -2px;
}

.template-impacto .btn {
  border-radius: 14px;
  font-size: 17px;
}

body.template-premium {
  background: #f8fafc;
}

.template-premium .hero {
  background: #111827;
}

.template-premium .hero h1 {
  font-family: Georgia, serif;
  letter-spacing: -1px;
}

.template-premium .service-card,
.template-premium .trust-card,
.template-premium .location-box,
.template-premium .hero-box {
  border-radius: 30px;
}

.template-simple .hero {
  background: var(--primary);
  padding: 60px 0;
}

.template-simple .hero-grid {
  grid-template-columns: 1fr;
}

.template-simple .hero-box {
  display: none;
}

.template-simple .service-card,
.template-simple .trust-card,
.template-simple .location-box {
  box-shadow: none;
}

.template-local .hero {
  padding: 64px 0;
}

.template-local .badge {
  background: var(--green);
  border: none;
}

.template-local .btn {
  width: auto;
}

@media (max-width: 800px) {
  .hero-grid,
  .grid-3,
  .location-grid,
  .trust-strip,
  .steps-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .nav { display: none; }

  .hero { padding: 56px 0; }

  .section { padding: 48px 0; }

  .btn-row { flex-direction: column; }

  .btn { width: 100%; }

  .floating-whatsapp,
  .back-top {
    display: none;
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
    font-weight: 900;
  }

  .mobile-whatsapp { background: var(--green); }

  .mobile-call { background: #111827; }

  body { padding-bottom: 58px; }

  .map { min-height: 280px; }
}
`;

  const layoutBase = (titulo, descripcion, h1, intro, contenidoServicios) => `
<!DOCTYPE html>
<html lang="es" id="top">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
  <meta name="description" content="${descripcion}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="${keyword}">
  <link rel="stylesheet" href="style.css">
</head>
<body class="${plantillaClase}">

<header class="header">
  <div class="container header-inner">
    <div class="logo">${negocio}</div>
    <nav class="nav">
      <a href="index.html">Inicio</a>
      <a href="servicios.html">Servicios</a>
      <a href="#ubicacion">Ubicación</a>
      <a href="tel:${telefono}">Llamar</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">${negocio} · ${ciudad}</span>
      <h1>${h1}</h1>
      <p>${intro}</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="${linkWhats}">Pedir presupuesto por WhatsApp</a>
        <a class="btn btn-call" href="${linkFotos}">Enviar fotos por WhatsApp</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
      </div>
    </div>

    <div class="hero-box">
      <h2>Atención rápida</h2>
      <p>Envía fotos o explica tu caso por WhatsApp y te damos una primera orientación.</p>
      <ul>
        <li>Presupuesto sin compromiso</li>
        <li>Trato directo</li>
        <li>Servicio en ${ciudad} y alrededores</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="servicios">
  <div class="container">
    <div class="section-title">
      <h2>Servicios principales</h2>
      <p>Soluciones claras para clientes que buscan rapidez, confianza y buen resultado.</p>
    </div>

    <div class="grid-3">
      ${contenidoServicios}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-title">
      <h2>Por qué elegirnos</h2>
      <p>Atención directa, explicación clara y contacto rápido para facilitar el presupuesto.</p>
    </div>

    <div class="grid-3">
      <div class="trust-card">
        <h3>Contacto directo</h3>
        <p>WhatsApp y llamada visibles para que el cliente no tenga que buscar cómo contactar.</p>
      </div>
      <div class="trust-card">
        <h3>Claridad desde el inicio</h3>
        <p>Explicamos los servicios de forma sencilla y sin tecnicismos innecesarios.</p>
      </div>
      <div class="trust-card">
        <h3>Orientado a clientes locales</h3>
        <p>Web pensada para usuarios que buscan servicios cerca y quieren una solución rápida.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="ubicacion">
  <div class="container location-grid">
    <div class="location-box">
      <h2>Ubicación</h2>
      <p><strong>Dirección:</strong><br>${direccion}</p>
      <p>Atendemos en ${ciudad} y alrededores.</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="${linkWhats}">Pedir presupuesto por WhatsApp</a>
        <a class="btn btn-call" href="${linkFotos}">Enviar fotos por WhatsApp</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
      </div>
    </div>

    <iframe class="map" src="https://www.google.com/maps?q=${direccionMapa}&output=embed" loading="lazy"></iframe>
  </div>
</section>

<section class="cta">
  <div class="container">
    <h2>¿Necesitas ${negocio.toLowerCase()} en ${ciudad}?</h2>
    <p>Escríbenos ahora y te atendemos de forma directa.</p>
    <div class="btn-row" style="justify-content:center;">
      <a class="btn btn-whatsapp" href="${linkWhats}">Pedir presupuesto</a>
      <a class="btn btn-call" href="${linkFotos}">Enviar fotos</a>
      <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>© 2026 ${negocio} · Todos los derechos reservados</p>
    <p>Diseño web por <a href="https://solucionesintegralesmurcia.github.io/webmasterpro/#inicio" target="_blank">Webmaster Murcia</a></p>
  </div>
</footer>

<a class="floating-whatsapp" href="${linkWhats}" aria-label="WhatsApp">WA</a>
<a class="back-top" href="#top" aria-label="Subir arriba">↑</a>

<div class="mobile-bar">
  <a class="mobile-whatsapp" href="${linkWhats}">WhatsApp</a>
  <a class="mobile-call" href="tel:${telefono}">Llamar</a>
</div>

</body>
</html>
`;

  const layoutProfesional = (titulo, descripcion, h1, intro, contenidoServicios) => `
<!DOCTYPE html>
<html lang="es" id="top">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
  <meta name="description" content="${descripcion}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="${keyword}">
  <link rel="stylesheet" href="style.css">
</head>
<body class="${plantillaClase}">

<header class="header">
  <div class="container header-inner">
    <div class="logo">${negocio}</div>
    <nav class="nav">
      <a href="#top">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#proceso">Cómo trabajamos</a>
      <a href="#ubicacion">Ubicación</a>
      <a href="tel:${telefono}">Llamar</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">${negocio} · ${ciudad}</span>
      <h1>${h1}</h1>
      <p>${intro} Atención directa, presupuesto claro y contacto rápido por WhatsApp.</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="${linkWhats}">Pedir presupuesto por WhatsApp</a>
        <a class="btn btn-call" href="${linkFotos}">Enviar fotos por WhatsApp</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
      </div>

      <div class="trust-strip">
        <div class="trust-item">Presupuesto sin compromiso</div>
        <div class="trust-item">Atención directa</div>
        <div class="trust-item">Servicio en ${ciudad}</div>
        <div class="trust-item">Respuesta rápida</div>
      </div>
    </div>

    <div class="hero-box">
      <h2>Cuéntanos qué necesitas</h2>
      <p>Envía fotos o explica tu caso por WhatsApp y te orientamos de forma clara antes de empezar.</p>
      <ul>
        <li>Valoración inicial rápida</li>
        <li>Trato cercano y profesional</li>
        <li>Soluciones adaptadas a cada cliente</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="servicios">
  <div class="container">
    <div class="section-title">
      <h2>Servicios principales</h2>
      <p>Trabajos pensados para clientes que buscan una solución clara, rápida y bien explicada.</p>
    </div>

    <div class="grid-3">
      ${contenidoServicios}
    </div>
  </div>
</section>

<section class="section section-soft" id="proceso">
  <div class="container">
    <div class="section-title">
      <h2>Cómo trabajamos</h2>
      <p>Un proceso sencillo para que sepas qué esperar desde el primer contacto.</p>
    </div>

    <div class="steps-grid">
      <div class="step-card">
        <h3>1. Contacto inicial</h3>
        <p>Nos escribes por WhatsApp o llamas para explicar qué necesitas.</p>
      </div>
      <div class="step-card">
        <h3>2. Valoración</h3>
        <p>Revisamos el caso, las fotos o los datos necesarios para orientarte.</p>
      </div>
      <div class="step-card">
        <h3>3. Presupuesto</h3>
        <p>Te damos una propuesta clara para que puedas decidir sin compromiso.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-soft">
      <h2>¿Quieres una respuesta rápida?</h2>
      <p>Envíanos fotos por WhatsApp y te damos una primera orientación.</p>
      <div class="btn-row" style="justify-content:center;">
        <a class="btn btn-whatsapp" href="${linkFotos}">Enviar fotos ahora</a>
        <a class="btn btn-light" href="tel:${telefono}">Llamar</a>
      </div>
    </div>
  </div>
</section>

<section class="section" id="ubicacion">
  <div class="container location-grid">
    <div class="location-box">
      <h2>Ubicación</h2>
      <p><strong>Dirección:</strong><br>${direccion}</p>
      <p>Atendemos en ${ciudad} y alrededores.</p>

      <div class="btn-row">
        <a class="btn btn-whatsapp" href="${linkWhats}">WhatsApp</a>
        <a class="btn btn-call" href="tel:${telefono}">Llamar</a>
      </div>
    </div>

    <iframe class="map" src="https://www.google.com/maps?q=${direccionMapa}&output=embed" loading="lazy"></iframe>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-title">
      <h2>Preguntas frecuentes</h2>
    </div>

    <div class="faq-grid">
      <div class="faq-item">
        <h3>¿Dais presupuesto sin compromiso?</h3>
        <p>Sí, puedes contactarnos y te orientamos antes de tomar una decisión.</p>
      </div>
      <div class="faq-item">
        <h3>¿Puedo enviar fotos?</h3>
        <p>Sí, puedes enviar fotos por WhatsApp para recibir una valoración más rápida.</p>
      </div>
      <div class="faq-item">
        <h3>¿Trabajáis en ${ciudad}?</h3>
        <p>Sí, atendemos en ${ciudad} y zonas cercanas.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="container">
    <h2>¿Necesitas ${negocio.toLowerCase()} en ${ciudad}?</h2>
    <p>Escríbenos ahora y te atendemos de forma directa.</p>
    <div class="btn-row" style="justify-content:center;">
      <a class="btn btn-whatsapp" href="${linkWhats}">Pedir presupuesto</a>
      <a class="btn btn-call" href="${linkFotos}">Enviar fotos</a>
      <a class="btn btn-light" href="tel:${telefono}">Llamar ahora</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>© 2026 ${negocio} · Todos los derechos reservados</p>
    <p>Diseño web por <a href="https://solucionesintegralesmurcia.github.io/webmasterpro/#inicio" target="_blank">Webmaster Murcia</a></p>
  </div>
</footer>

<a class="floating-whatsapp" href="${linkWhats}" aria-label="WhatsApp">WA</a>
<a class="back-top" href="#top" aria-label="Subir arriba">↑</a>

<div class="mobile-bar">
  <a class="mobile-whatsapp" href="${linkWhats}">WhatsApp</a>
  <a class="mobile-call" href="tel:${telefono}">Llamar</a>
</div>

</body>
</html>
`;

  const layoutElegido = plantilla === "profesional" ? layoutProfesional : layoutBase;

  const indexHTML = layoutElegido(
    tituloSeo,
    descripcionSeo,
    `${negocio} en ${ciudad}`,
    datosSector.intro,
    serviciosCards
  );

  const serviciosHTML = layoutElegido(
    `Servicios de ${negocio} en ${ciudad}`,
    `Servicios de ${negocio} en ${ciudad}: ${serviciosFinales.map(s => s.titulo).join(", ")}.`,
    `Servicios de ${negocio} en ${ciudad}`,
    `Consulta los servicios principales de ${negocio} en ${ciudad} y solicita información por WhatsApp.`,
    serviciosCards
  );

  const paginasServicios = serviciosFinales.map(servicio => {
    const slugServicio = limpiarTexto(`${servicio.titulo}-${ciudad}`);
    const mensajeServicio = encodeURIComponent(`Hola, quiero presupuesto para ${servicio.titulo} en ${ciudad}`);
    const linkServicio = `https://wa.me/34${whatsapp}?text=${mensajeServicio}`;

    const htmlServicio = layoutElegido(
      `${servicio.titulo} en ${ciudad} | ${negocio}`,
      `${servicio.titulo} en ${ciudad}. Contacta con ${negocio} para pedir información o presupuesto.`,
      `${servicio.titulo} en ${ciudad}`,
      servicio.descripcion,
      `
      <article class="service-card">
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>
        <div class="service-actions">
          <a class="link-card whatsapp-link" href="${linkServicio}">Solicitar información</a>
          <a class="link-card" href="index.html">Volver al inicio</a>
        </div>
      </article>
      `
    );

    return {
      nombre: `${slugServicio}.html`,
      contenido: htmlServicio
    };
  });

  const readme = `
INSTRUCCIONES DE USO

1. Descomprime este ZIP.
2. Crea un repositorio en GitHub con este nombre:
   ${slug}

3. Sube todos los archivos:
   - index.html
   - servicios.html
   - style.css
   - páginas de cada servicio

4. Activa GitHub Pages:
   Settings > Pages > Deploy from branch > main > root

5. URL prevista:
   ${urlWeb}

DATOS DEL PROYECTO:
Negocio: ${negocio}
Ciudad: ${ciudad}
Dirección: ${direccion}
Teléfono: ${telefono}
WhatsApp: ${whatsapp}
Keyword principal: ${keyword}
Plantilla: ${plantilla}
Paleta: ${paleta}
Servicios generados: ${serviciosFinales.length}
`;

  mensajeCliente = `Hola, te dejo una primera versión de la web para que puedas revisarla:

${urlWeb}

Está preparada con estructura clara, botones de WhatsApp y llamada, botón para enviar fotos, sección de servicios, ubicación con mapa y páginas individuales para cada servicio.

Revísala y dime si quieres cambiar textos, servicios, teléfono, dirección, colores o cualquier detalle antes de dejarla definitiva.`;

  window.indexFile = indexHTML;
  window.serviciosFile = serviciosHTML;
  window.cssFile = cssGenerado;
  window.paginasServicios = paginasServicios;
  window.readmeFile = readme;
  window.zipName = `${slug}.zip`;

  const previewHTML = prepararVistaPrevia(indexHTML);
  document.getElementById("frame").srcdoc = previewHTML;
}

function prepararVistaPrevia(html) {
  let htmlPreview = html.replace(
    '<link rel="stylesheet" href="style.css">',
    `<style>${window.cssFile || cssGenerado}</style>`
  );

  htmlPreview = htmlPreview.replaceAll('href="index.html"', 'href="#top"');
  htmlPreview = htmlPreview.replaceAll('href="servicios.html"', 'href="#servicios"');
  htmlPreview = htmlPreview.replace(/href="[^"]+\.html"/g, 'href="#servicios"');

  return htmlPreview;
}

function verWebCompleta() {
  if (!window.indexFile) {
    alert("Primero genera la web");
    return;
  }

  const htmlCompleto = prepararVistaPrevia(window.indexFile);
  const nuevaVentana = window.open("", "_blank");

  if (!nuevaVentana) {
    alert("El navegador ha bloqueado la nueva pestaña");
    return;
  }

  nuevaVentana.document.open();
  nuevaVentana.document.write(htmlCompleto);
  nuevaVentana.document.close();
}

function descargar() {
  if (!window.indexFile) {
    alert("Primero genera la web");
    return;
  }

  if (typeof JSZip === "undefined") {
    alert("Error: JSZip no está cargado.");
    return;
  }

  const zip = new JSZip();

  zip.file("index.html", window.indexFile);
  zip.file("servicios.html", window.serviciosFile);
  zip.file("style.css", window.cssFile);
  zip.file("README.txt", window.readmeFile);

  window.paginasServicios.forEach(pagina => {
    zip.file(pagina.nombre, pagina.contenido);
  });

  zip.generateAsync({ type: "blob" }).then(function(content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = window.zipName || "web-generada.zip";
    a.click();
  });
}

function nuevoProyecto() {
  document.querySelectorAll("input").forEach(input => input.value = "");

  document.getElementById("sector").value = "generico";
  document.getElementById("plantilla").value = "profesional";
  document.getElementById("paleta").value = "verde";
  document.getElementById("cantidadServicios").value = "4";
  document.getElementById("frame").srcdoc = "";

  window.indexFile = null;
  window.serviciosFile = null;
  window.cssFile = null;
  window.paginasServicios = null;
  window.readmeFile = null;

  mensajeCliente = "";

  alert("Nuevo proyecto listo");
}

function copiarMensajeCliente() {
  if (!mensajeCliente) {
    alert("Primero genera una web");
    return;
  }

  navigator.clipboard.writeText(mensajeCliente).then(() => {
    alert("Mensaje copiado");
  });
}

function rellenarAutomatico() {
  const sector = document.getElementById("sector").value;
  const datosSector = sectores[sector] || sectores.generico;
  const cantidad = parseInt(document.getElementById("cantidadServicios")?.value || "4", 10);

  const ciudad = document.getElementById("ciudad").value.trim() || "Murcia";

  const serviciosSeleccionados = datosSector.servicios
    .slice(0, cantidad)
    .map(servicio => servicio.titulo)
    .join(", ");

  document.getElementById("servicios").value = serviciosSeleccionados;

  if (!document.getElementById("direccion").value.trim()) {
    document.getElementById("direccion").value = `Calle principal, ${ciudad}`;
  }

  if (!document.getElementById("telefono").value.trim()) {
    document.getElementById("telefono").value = "600123456";
  }

  if (!document.getElementById("whatsapp").value.trim()) {
    document.getElementById("whatsapp").value = "600123456";
  }

  document.getElementById("paleta").value = datosSector.paleta || "verde";
}
