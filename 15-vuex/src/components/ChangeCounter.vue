<template>
    <button @click="inc">Add 2</button>
    <button @click="incr({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addTwo() {
        //     this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions({
            inc: 'increment',
            incr: 'increase'
        })
    }
}
</script>