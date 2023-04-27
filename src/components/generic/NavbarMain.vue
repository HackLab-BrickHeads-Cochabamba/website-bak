<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import DarkThemeSwitch from "./DarkThemeSwitch.vue";

export interface RoutesProps {
  name: string;
  route: string;
}

export default defineComponent({
  props: {
    routes: {
      type: Array as PropType<RoutesProps[]>,
      default: () => [],
    },
  },
  components: { DarkThemeSwitch },
});
</script>

<template>
  <nav class="bg-neutral-900 border-gray-200 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="/images/hacklab_heads.png"
          class="h-6 mr-3 sm:h-9"
          alt="HackLab Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          HackLab BrickHeads
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
        >
          <li v-for="(route, index) in routes" :key="index">
            <a
              :href="route.route"
              aria-current="page"
              class="text-white hover:text-gray-300 p-2"
              >{{ route.name }}</a
            >
          </li>
          <li>
            <DarkThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
