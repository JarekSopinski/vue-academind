<template>
  <section>

    <base-card>
      <!-- #header is shorthand for v-slot:header -->
      <template #header>
        <!-- this will go to a slot with name 'header' -->
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- this will go to default (unnamed) slot (not required) -->
      <template #default>
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