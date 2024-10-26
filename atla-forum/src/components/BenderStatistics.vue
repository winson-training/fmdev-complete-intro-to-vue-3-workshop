<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
 
  computed: {
    benderStatistics() {
      const elements = ["Air", "Earth", "Fire", "Water"];
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
      };

      this.characters.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1;
          }
        });
      });

      return statistics;
    },
  },
};
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li
      v-for="(stat, type) in benderStatistics"
      :key="`bendstats-${stat}-${type}`"
    >
      {{ type }}: {{ stat }}
    </li>
  </ul>
  <h2>Characters</h2>
  <p v-if="characters.length === 0">There are no characters</p>
  <ul v-else-if="characters.length % 2 === 0">
    <li v-for="(character, index) in characters" :key="`char-${index}`">
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐ Favorite</button>
    </li>
  </ul>
</template>
