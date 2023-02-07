<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavbarMain from "./components/generic/NavbarMain.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HBox from "./components/material/HBox.vue";
import HButton from "./components/material/HButton.vue";
</script>

<template>
  <div class="bg-white">
    <NavbarMain :routes="[{ name: 'dmeo', route: 'lol' }]" />
    <!-- <div class="h-20 w-20 bg-neutral-900 border-2 border-black" />
    <div class="h-20 w-20 bg-lime-500 border-2 border-black" />
    <div class="h-20 w-20 bg-white border-2 border-black" /> -->

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

<style scoped></style>
