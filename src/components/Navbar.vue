<template>
  <header class="navbar">
    <div class="container navbar-contenido">
      <a href="#inicio" class="logo">Luisa Hoyos</a>

      <nav class="menu">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--color-borde);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.navbar-contenido {
  min-height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--color-principal);
  font-size: 1.55rem;
  font-weight: 800;
}

.menu {
  display: flex;
  gap: 34px;
}

.menu a {
  color: var(--color-titulo);
  font-weight: 600;
  font-size: 0.98rem;
  transition: 0.3s;
}

.menu a:hover {
  color: var(--color-principal);
}

@media (max-width: 768px) {
  .navbar-contenido {
    padding: 16px 0;
    flex-direction: column;
    gap: 14px;
  }

  .menu {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>