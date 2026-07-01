<template>
  <section class="sobre-mi" id="sobre-mi">
    <div class="container sobre-contenido">
      <div>
        <p class="etiqueta">Sobre mí</p>
        <h2>Conoce más sobre mi perfil</h2>
      </div>

      <div class="sobre-grid">
        <div class="sobre-card">

          <p>
            Actualmente estudio Desarrollo Front-End y disfruto transformar ideas en
            aplicaciones web funcionales y responsivas.
          </p>

          <p>
            Durante mi formación he trabajado con HTML, CSS, JavaScript, Bootstrap,
            Vue.js y Git, desarrollando proyectos que fortalecen mis habilidades en
            interfaces de usuario y consumo de APIs.
          </p>

          <p>
            Mi objetivo es seguir creciendo como desarrolladora y participar en
            proyectos que me permitan aportar soluciones reales mientras continúo
            aprendiendo nuevas tecnologías.
          </p>
        </div>

        <div class="sobre-lista">
          <div class="item">
            <span>💻</span>
            <p>Desarrollo de interfaces web</p>
          </div>

          <div class="item">
            <span>📱</span>
            <p>Diseño responsive</p>
          </div>

          <div class="item">
            <span>⚙️</span>
            <p>Consumo de APIs y lógica JavaScript</p>
          </div>

          <div class="item">
            <span>🌱</span>
            <p>Aprendizaje constante en tecnologías Front-End</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-mi {
  background: white;
}

.sobre-contenido {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.etiqueta {
  color: var(--color-principal);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

h2 {
  color: var(--color-titulo);
  font-size: 2.4rem;
}

.sobre-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 35px;
  align-items: stretch;
}

.sobre-card,
.item {
  background: var(--color-fondo);
  border: 1px solid var(--color-borde);
  border-radius: 18px;
  padding: 30px;
}

.sobre-card h3 {
  color: var(--color-titulo);
  font-size: 1.4rem;
  margin-bottom: 18px;
}

.sobre-card p {
  line-height: 1.8;
  margin-bottom: 16px;
}

.sobre-lista {
  display: grid;
  gap: 18px;
}

.item {
  display: flex;
  gap: 16px;
  align-items: center;
}

.item span {
  font-size: 1.6rem;
}

.item p {
  font-weight: 500;
  color: var(--color-secundario);
}

@media (max-width: 850px) {
  .sobre-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>