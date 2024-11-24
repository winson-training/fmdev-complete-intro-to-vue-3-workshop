<script setup>
// https://pokeapi.co/api/v2/pokemon?limit=151

import { ref, computed, reactive, defineProps, defineEmits } from "vue";
import BaseButton from "./base-button.vue";

const regionName = ref("Kanto");

const props = defineProps({
  region: {
    type: String,
    default: "Kanto",
  },
  elementType: {
    type: String,
    default: "Lightning",
  },
});

const emit = defineEmits(["change-region"]);

const state = reactive({
  elementType: "Lightning",
});

const regionNameAllCaps = computed(() => regionName.value.toUpperCase());

const elementTypeAllCaps = computed(() => state.elementType.toUpperCase() + "!!!" + props.region);

const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(
  (response) => response.json()
);

const changeRegionName = () => {
  regionName.value = "Johto";
  emits("change-region");
};
</script>

<template>
  <h2>{{ regionName }}</h2>
  <BaseButton />

  <h3>{{ regionNameAllCaps }}</h3>
  <h3>{{ elementTypeAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre>{{ pokedex }}</pre>
</template>
