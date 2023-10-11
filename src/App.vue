<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import NavbarMain from "./components/generic/NavbarMain.vue";
import HBricks from "./components/material/Bricks/HBricks.vue";
import { ref } from "vue";
import HText from "./components/material/HText.vue";

const routes = ref([
  { name: "¿Quiénes somos?", link: "/" },
  // { name: "Ideas", link: "/" },
  // { name: "Blog", link: "/" },
  { name: "Galería", link: "/" },
  { name: "Contacto", link: "/about" },
]);
</script>

<template>
  <div class="bg-neutral">
    <NavbarMain :routes="routes" />
    <HBricks />
    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>
  </div>
  <RouterView />
</template>

<style lang="css"></style>
