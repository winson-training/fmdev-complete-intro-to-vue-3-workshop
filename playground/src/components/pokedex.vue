<script>
// https://pokeapi.co/api/v2/pokemon?limit=151

import { ref, computed, reactive } from "vue";

export default {
  async setup() {
    const regionName = ref("Kanto");

    const state = reactive({
      elementType: "Lightning",
    });

    const regionNameAllCaps = computed(() => regionName.value.toUpperCase());

    const elementTypeAllCaps = computed(() => state.elementType.toUpperCase());

    const pokedex = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    ).then((response) => response.json());

    const changeRegionName = () => {
      regionName.value = "Johto";
    };

    return {
      changeRegionName,
      regionName,
      pokedex,
      regionNameAllCaps,
      elementTypeAllCaps,
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.pokedex);
  },


};
</script>

<template>
    <h2>{{ regionName }}</h2>
    <h3>{{regionNameAllCaps}}</h3>
    <h3>{{elementTypeAllCaps}}</h3>
    <button @click="changeRegionName">Change Region Name</button>
  <pre>{{ pokedex }}</pre>
</template>
