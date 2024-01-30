<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Set Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const firstName = ref('');
const lastName = ref('');
const userAge = ref(100);

watch(userAge, (newValue, oldValue) => {
  console.log('Old age ', oldValue);
  console.log('New age ', newValue);
});

watch([firstName, lastName], (newValues, oldValues) => {
  console.log('Old names ', oldValues);
  console.log('New names ', newValues);
});

const userName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

const setAge = () => {
  userAge.value += 1;
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>