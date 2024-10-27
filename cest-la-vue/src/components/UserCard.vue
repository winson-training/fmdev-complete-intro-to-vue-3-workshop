<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li class="user-card">
    <h4>{{ user.name }}</h4>
    <p>{{ user.email }}</p>
  </li>
</template>

<style>
.user-card {
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  list-style:none;
}
</style>
