<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { useCounterStore } from './stores/counter.ts';

const store = useCounterStore();
</script>

<template>
  <HelloWorld msg="Pinia" />
  <h1>{{ store.count }}</h1>
  <div>
    <button @click="store.increment">增加</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
