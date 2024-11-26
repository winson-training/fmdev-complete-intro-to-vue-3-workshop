<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emailInput = ref('')


const login = () => {
  console.log('login')
  if (emailInput.value.includes('@') && emailInput.value.length > 5) {
    console.log('email is valid')
    router.push("/user")
  } else {
    console.log('email is invalid')
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="emailInput" />
    <button @click="login">Continue with email</button>
  </main>
</template>

<style></style>
