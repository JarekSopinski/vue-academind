<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    firstName: String,
    lastName: String,
    age: Number
});

const userName = computed(() => {
    return props.firstName + ' ' + props.lastName;
});

</script>