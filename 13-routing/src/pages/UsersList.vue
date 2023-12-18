<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false }
  },
  methods: {
    confirmInput() {
      // do something, than change route
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    // Component level navigation guard
    console.log('UsersList Cmp beforeRouteEnter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // Ask user to confirm navigation
    console.log('UsersList Cmp beforeRouteLeave');
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changed!');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>