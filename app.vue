<template>
  <div class="app">Nuxt app</div>
  <Icon name="home" />
  <button @click="test">Nuxt app test</button>
</template>

<script lang="ts" setup>
useHead({
  title: 'Nuxt app',
  htmlAttrs: { lang: 'en' },
})
const test = () =>{
  return true;
}
</script>

<style lang="postcss">
.app {
  @apply p-4 text-primary font-bold;
}
</style>
