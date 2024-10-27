<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  emits: ["favorite"],
  methods: {
    favoriteCharacter(character) {
      this.$emit("favorite", character);
    },
  },
};
</script>

<template>
  <div class="card">
    <p>{{ character.name }}</p>
    <button @click="favoriteCharacter(character)">⭐ Favorite</button>
  </div>
</template>
