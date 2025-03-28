<script setup lang="ts">
  import Navbar from '~/components/common/NavbarCommon.vue';
  import Footer from '~/components/common/FooterCommon.vue';

  const routes = [
    { name: "¿Quiénes somos?", link: "#about" },
    { name: "¿Qué hacemos?", link: "#our-work" },
    { name: "Blog", link: "/blog" },
    { name: "Galería", link: "/" },
    { name: "Contacto", link: "/" },
  ];
  const socials = [
    { name: "Facebook", link: "https://www.facebook.com/HackLabBrickHeads" },
    { name: "Instagram", link: "https://www.instagram.com/hacklabbrickheads/" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/hacklab-brickheads-cochabamba/" },
    { name: "Tiktok", link: "https://www.tiktok.com/@hacklab.brickheads" },
    { name: "YouTube", link: "https://www.youtube.com/@HackLabBrickHeads" },
  ];
</script>
<template>
  <div>
    <NuxtLayout>
      <Navbar :routes="routes" />
      <NuxtPage/>
      <Footer :socials="socials"/>
    </NuxtLayout>
  </div>
</template>