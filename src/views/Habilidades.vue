<template>
  <section id="tecnologias" class="skills">

    <h2>Tecnologías</h2>

    <div class="skills-grid">

      <div
        v-for="item in habilidades"
        :key="item.nombre"
        class="skill-card"
      >
        <i :class="item.icono"></i>

        <h3>{{ item.nombre }}</h3>
      </div>

    </div>

    <p class="texto">
      Actualmente continúo aprendiendo nuevas tecnologías y fortaleciendo
      mis conocimientos mediante proyectos prácticos.
    </p>

  </section>
</template>

<script setup>
import { habilidades } from "../data/habilidades";
</script>
