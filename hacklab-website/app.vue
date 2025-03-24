<script setup lang="ts">
  import Navbar from '~/components/common/NavbarCommon.vue';

  const routes = [
    { name: "Nuestros proyectos", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Galería", link: "/" },
    { name: "¿Quiénes somos?", link: "/about" },
  ];
</script>
<template>
  <div>
    <NuxtLayout>
      <Navbar :routes="routes" />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>