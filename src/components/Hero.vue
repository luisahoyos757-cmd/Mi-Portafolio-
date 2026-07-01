<template>
  <section class="hero" id="inicio">
    <div class="container hero-contenido">
      <div class="hero-texto">
        <p class="saludo">Hola 👋, soy</p>

        <h1>Luisa María Hoyos</h1>

        <h2>Desarrolladora Front-End en formación</h2>

        <p class="descripcion">
          Creo aplicaciones web modernas utilizando HTML, CSS, JavaScript,
          Vue.js y Git. Este portafolio reúne mis proyectos principales y mi
          proceso de aprendizaje en el área TI.
        </p>

        <div class="botones">
          <a href="#proyectos" class="boton-principal">Ver proyectos</a>
          <a href="#contacto" class="boton-secundario">Contactarme</a>
        </div>

        <div class="stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Vue</span>
          <span>Git</span>
        </div>
      </div>

      <div class="hero-imagen">
        <div class="monitor">
          <img src="../assets/app-clima-vue.png" alt="Captura de la aplicación del clima" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(75vh - 68px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%);
  padding: 80px 0 60px;
}

.hero-contenido {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: center;
}

.saludo {
  color: var(--color-principal);
  font-weight: 700;
  margin-bottom: 14px;
}

h1 {
  font-size: 4.2rem;
  line-height: 1.05;
  color: var(--color-titulo);
  margin-bottom: 18px;
}

h2 {
  color: var(--color-principal);
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 24px;
}

.descripcion {
  font-size: 1.05rem;
  line-height: 1.9;
  max-width: 620px;
  margin-bottom: 30px;
}

.botones {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.boton-principal,
.boton-secundario {
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s;
}

.boton-principal {
  background: var(--color-principal);
  color: white;
}

.boton-secundario {
  background: white;
  color: var(--color-principal);
  border: 1px solid var(--color-borde);
}

.boton-principal:hover,
.boton-secundario:hover {
  transform: translateY(-3px);
}

.stack {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stack span {
  background: white;
  border: 1px solid var(--color-borde);
  color: var(--color-secundario);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
}

.hero-imagen {
  display: flex;
  justify-content: center;
}

.monitor {
  background: #0f172a;
  padding: 16px;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25);
  transition: 0.3s;
}

.monitor:hover {
  transform: translateY(-6px);
}

.monitor img {
  width: 100%;
  display: block;
  border-radius: 14px;
}

@media (max-width: 900px) {
  .hero-contenido {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .descripcion {
    margin-left: auto;
    margin-right: auto;
  }

  .botones,
  .stack {
    justify-content: center;
  }

  h1 {
    font-size: 2.8rem;
  }
}
</style>