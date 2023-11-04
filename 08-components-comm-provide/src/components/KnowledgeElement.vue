<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'], // functions passed fown from 'provide' in ancestor component
  props: ['id', 'topicName', 'description']
};
</script>