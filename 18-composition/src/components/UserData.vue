<template>
    <h2 @click="emit('myEvent')">{{ userName }}</h2>
    <h3>{{ props.age }}</h3>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    firstName: String,
    lastName: String,
    age: Number
});

const emit = defineEmits([
    'myEvent'
]);

const userName = computed(() => {
    return props.firstName + ' ' + props.lastName;
});

</script>