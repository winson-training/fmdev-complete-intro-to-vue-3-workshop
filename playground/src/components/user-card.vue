<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
  methods: {
    tellParentChangeName() {
      this.$emit("change-name");
    },
  },
};
</script>

<template>
  <h2>User: {{ user.name }}</h2>
  <p>Favorite Food: {{ user.food }}</p>
  <button @click="tellParentChangeName">Change Name</button>
</template>
