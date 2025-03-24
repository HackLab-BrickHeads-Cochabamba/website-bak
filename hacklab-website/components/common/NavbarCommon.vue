<script lang="ts" setup>

export interface RoutesProps {
  name: string;
  link: string;
}

withDefaults(defineProps<{ routes?: Array<RoutesProps> }>(), {
  routes: () => []
});
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <div class="w-[120px] md:w-[180px] p-2">
        <NuxtImg src="hacklab/large_white.png" />
      </div>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-4 md:flex hidden">
        <li v-for="route in routes" :key="route.name">
          <a>
            <NuxtLink :to="route.link">{{ route.name }}</NuxtLink>
          </a>
        </li>
      </ul>
      <div class="dropdown dropdown-end md:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/> </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
          <li v-for="route in routes" :key="route.name">
            <a>
              <NuxtLink :to="route.link">{{ route.name }}</NuxtLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
