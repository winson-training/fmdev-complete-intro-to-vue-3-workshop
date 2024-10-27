<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    user2: {
      type: Object,
      required: true,
    },
  },
  emits: ["update-name"],
};
</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <p>Favourite food: {{ user.food }}</p>
  <hr />
  <h2>User #2: {{ user2.name }}</h2>
  <p>Favourite food: {{ user2.food }}</p>
  <button @click="$emit('update-name', 'John Wick 3')">Update name</button>
  <hr />
</template>
