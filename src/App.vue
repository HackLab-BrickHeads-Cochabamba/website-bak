<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import NavbarMain from "./components/generic/NavbarMain.vue";
import HBricks from "./components/material/Bricks/HBricks.vue";
import { ref } from "vue";
import HText from "./components/material/HText.vue";

const routes = ref([
  { name: "¿Quiénes somos?", link: "/" },
  { name: "Ideas", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Galería", link: "/" },
  { name: "Contactanos", link: "/" },
]);
</script>

<template>
  <div class="bg-neutral">
    <NavbarMain :routes="routes" />
    <HBricks />

    <div class="text-center py-10">
      <HText size="text-xl" :dark="false">
        Espacio Hacker de conocimiento abierto, experimentación y aprendizaje
        colectivo.
      </HText>
    </div>
    <div class="h-96"></div>
    <!-- <div class="h-20 w-20 bg-neutral border-2 border-red-400" />
    <div class="h-20 w-20 bg-primary border-2 border-red-400" />
    <div class="h-20 w-20 bg-secondary border-2 border-red-400" /> -->

    <!-- <div class="p-5">
      <HBox> a veces </HBox>
    </div>
    <div class="p-5">
      <HBox> a veces </HBox>
    </div>
    <div class="p-5">
      <HBox theme="dark"> a veces </HBox>
    </div>
    <div class="p-5">
      <HButton>aasdasdasdasddssd</HButton>
    </div> -->
  </div>
  <!-- <RouterView /> -->
</template>

<style lang="css"></style>
