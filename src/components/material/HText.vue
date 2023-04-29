<template>
  <div
    :class="[
      size,
      dark ? 'text-primary' : 'text-secondary',
      hover
        ? 'hover:text-secondary hover:cursor-pointer hover:scale-105 active:scale-110 select-none'
        : null,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
type fontSizes =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

interface IHText {
  size?: fontSizes;
  hover?: boolean;
  dark?: boolean;
}
withDefaults(defineProps<IHText>(), {
  size: "text-base",
  dark: true,
});
</script>

<style scoped></style>
