<script setup>
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";

import { ref } from "vue";

const colorPref = ref("papayawhip");
</script>

<template>
  <div class="wrapper">
    <h2> {{  colorPref   }}</h2>
    <input type="color" v-model="colorPref" />
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Ramen' }" />
  </div>
</template>

<style>
html {
  font-family: Arial, sans-serif;
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPref);
}

.button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
