<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  // Components registered here are only available in this component
  components: {
    // 'the-header': TheHeader
    // TheHeader: TheHeader
    TheHeader,
},
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>