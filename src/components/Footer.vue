<template>
  <footer class="footer" id="contacto">
    <div class="container footer-contenido">
      <div>
        <h3>Luisa Hoyos</h3>
        <p>Desarrolladora Front-End en formación.</p>
      </div>

      <div>
        <h4>Navegación</h4>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#proyectos">Proyectos</a>
      </div>

      <div>
        <h4>Contacto</h4>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="mailto:correo@ejemplo.com">Correo</a>
      </div>
    </div>

    <p class="copy">
      © 2026 Luisa María Hoyos Piedrahita | Portafolio Profesional
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-secundario);
  color: white;
  padding: 50px 0 25px;
}

.footer-contenido {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 35px;
}

.footer h3,
.footer h4 {
  margin-bottom: 14px;
}

.footer p,
.footer a {
  color: #cbd5e1;
}

.footer a {
  display: block;
  margin-bottom: 9px;
  transition: 0.3s;
}

.footer a:hover {
  color: white;
}

.copy {
  text-align: center;
  margin-top: 35px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-contenido {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>