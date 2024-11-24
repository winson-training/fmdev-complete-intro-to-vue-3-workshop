<script>
import pokedex from './components/pokedex.vue';

export default {
  components: {
    pokedex
  },
}
</script>

<template>
  <h1>New App</h1>
  <!-- <pre>{{ pokedex }}</pre>
  <button @click="fetchPokedex">Fetch Pokedex</button> -->

  <Suspense>
    <template #default>
      <pokedex region="Noland" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style></style>
