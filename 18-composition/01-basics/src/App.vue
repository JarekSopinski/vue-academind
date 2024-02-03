<template>
  <section class="container">
    <UserData
      :firstName="firstName"
      :lastName="lastName"
    />
    <button @click="setAge">Set Age</button>
    <div>
      <input
        type="text"
        placeholder="First Name"
        v-model="firstName"
      >
      <input
        type="text"
        placeholder="Last Name"
        ref="lastNameInput"
      >
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const firstName = ref('');
const lastName = ref('');
const userAge = ref(100);

const lastNameInput = ref(null); // ref for input is the same as ref for value

provide('userAge', userAge);

watch(userAge, (newValue, oldValue) => {
  console.log('Old age ', oldValue);
  console.log('New age ', newValue);
});

watch([firstName, lastName], (newValues, oldValues) => {
  console.log('Old names ', oldValues);
  console.log('New names ', newValues);
});

const setAge = () => {
  userAge.value += 1;
}

const setLastName = () => {
  lastName.value = lastNameInput.value.value; // value of ref + value of input
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
}</style>