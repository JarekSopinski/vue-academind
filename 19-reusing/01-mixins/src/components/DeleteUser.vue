<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert';

export default {
  components: {
    // components config can't be shared in mixins
    UserAlert
  },
  data() {
    // component's data are merged with data from mixin
    // in case of the same keys, value from the component has priority
    return {
      alertTitle: 'Delete user'
    }
  },
  mixins: [alertMixin]
};
</script>