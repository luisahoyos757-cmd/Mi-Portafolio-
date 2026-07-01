<script setup>
import { proyectos } from "../data/proyectos";
</script>

<template>
  <section id="proyectos" class="proyectos">
    <div class="container">
      <p class="etiqueta">Portafolio</p>
      <h2>Proyectos destacados</h2>

      <div class="proyectos-grid">
        <article v-for="proyecto in proyectos" :key="proyecto.titulo" class="proyecto-card">
          <img :src="proyecto.imagen" :alt="proyecto.titulo" />

          <div class="contenido">
            <h3>{{ proyecto.titulo }}</h3>
            <p>{{ proyecto.descripcion }}</p>

            <div class="tags">
              <span v-for="tec in proyecto.tecnologias" :key="tec">
                {{ tec }}
              </span>
            </div>

            <div class="acciones">
              <a :href="proyecto.github" target="_blank">GitHub</a>

              <a v-if="proyecto.demo" 
              :href="proyecto.demo" 
              target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>