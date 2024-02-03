<template>
    <h2 @click="emit('myEvent')">{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import { 
    computed, defineProps, defineEmits, inject, 
    onBeforeMount, onMounted, 
    onBeforeUpdate, onUpdated, 
    onBeforeUnmount, onUnmounted
} from 'vue';

onBeforeMount(() => console.log('onBeforeMount'));
onMounted(() => console.log('onMounted'));
onBeforeUpdate(() => console.log('onBeforeUpdate'));
onUpdated(() => console.log('onUpdated'));
onBeforeUnmount(() => console.log('onBeforeUnmount'));
onUnmounted(() => console.log('onUnmounted'));

const props = defineProps({
    firstName: String,
    lastName: String
});

const emit = defineEmits([
    'myEvent'
]);

const age = inject('userAge'); // inject should be read-only for receiving components!

const userName = computed(() => {
    return props.firstName + ' ' + props.lastName;
});

</script>