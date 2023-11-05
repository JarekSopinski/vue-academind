<template>
  <section>

    <base-card>
      <template v-slot:header>
        <!-- this will go to a slot with name 'header' -->
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- this will go to default (unnamed) slot (not required) -->
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
/* scoped - styles will be available only for this component */
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>