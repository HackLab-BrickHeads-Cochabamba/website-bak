<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import NavbarMain from "./components/generic/NavbarMain.vue";
import HBox from "./components/material/HBox.vue";
import HButton from "./components/material/HButton.vue";
import { ref } from "vue";

const routes = ref([{ name: "dmeo", route: "lol" }]);
</script>

<template>
  <div class="bg-neutral min-h-full">
    <NavbarMain :routes="routes" />
    <div class="h-20 w-20 bg-neutral border-2 border-red-400" />
    <div class="h-20 w-20 bg-primary border-2 border-red-400" />
    <div class="h-20 w-20 bg-secondary border-2 border-red-400" />

    <div class="p-5">
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
    </div>
  </div>
  <!-- <RouterView /> -->
</template>
