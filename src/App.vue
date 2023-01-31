<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavbarMain from "./components/generic/NavbarMain.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <NavbarMain :routes="[{ name: 'dmeo', route: 'lol' }]" />
  <!-- <RouterView /> -->
</template>

<style scoped></style>
