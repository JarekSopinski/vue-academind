<template>
  <div class="container">
    <div
      class="block"
      :class="{ animate: animatedBlock }"
    ></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <!-- name="para" is a custom prefix for animation classes -->
    <!-- (.para-enter-active instead of .v-enter-active) -->
    <!-- alternatively we can use props for certain classes, like enter-to-class="our-class" -->
    <Transition name="para">
      <p v-if="paragraphIsVisible">
        This is only visible sometimes...
      </p>
    </Transition>
    <button @click="toggleParagraph">
      Toggle Paragraph
    </button>
  </div>

  <div class="container">
    <Transition name="fade-button" mode="out-in">
      <!-- More than one components can be added under Transition, if they are conditionally visible. -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </Transition>
  </div>

  <base-modal
    @close="hideDialog"
    :open="dialogIsVisible"
  >
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */

}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* Classes toggled by Vue on Transition component - for ADDING */

/* Starting state */
.para-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

/* All states (?) */
.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}

/* End state */
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

/* Classes toggled by Vue on Transition component - for REMOVING */

/* Starting state */
.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

/* All states (?) */
.para-leave-active {
  animation: slide-scale 0.3s ease-out;
}

/* End state */
.para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>