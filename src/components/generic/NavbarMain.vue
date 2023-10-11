<script lang="ts" setup>
import HText from "../material/HText.vue";
import { RouterLink } from "vue-router";

export interface RoutesProps {
  name: string;
  link: string;
}

defineProps<{ routes: RoutesProps[] }>();
</script>

<template>
  <div class="navbar px-4 py-4">
    <div class="flex-1 p-2">
      <img src="@/assets/images/small/large_white.png" width="220" />
    </div>
    <ul class="flex flex-row gap-2 md:gap-8 px-1 text-primary">
      <li v-for="(route, index) in routes" :key="index">
        <HText hover :dark="true">
          <RouterLink :to="route.link">
            {{ route.name }}
          </RouterLink>
        </HText>
      </li>
    </ul>
  </div>
</template>
