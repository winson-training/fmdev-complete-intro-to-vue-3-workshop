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

    return {
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
  computed: {
    regionNameLowerCase() {
      return this.regionName.toLowerCase();
    },  
  },
  methods: {
    changeRegionName() {
      this.regionName = "Johto";
    },
  },
  created() {
    console.log("created");
    console.log(this.pokedex);
    console.log(this.regionName);
  },
};
</script>

<template>
    <h2>{{ regionName }}</h2>
    <h3>{{regionNameAllCaps}}</h3>
    <h3>{{elementTypeAllCaps}}</h3>
    <h4>{{regionNameLowerCase}}</h4>
    <button @click="changeRegionName">Change Region Name</button>
  <pre>{{ pokedex }}</pre>
</template>
