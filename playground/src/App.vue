<script setup>
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";
</script>

<template>
  <!-- <pre>{{ pokedex }}</pre>
  <button @click="fetchPokedex">Fetch Pokedex</button> -->

  <BaseCounter />
  <UserCard :user="{ name: 'Ben', food: 'hamburgr' }" />
</template>

<style></style>
