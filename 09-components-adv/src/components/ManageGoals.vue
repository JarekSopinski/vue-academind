<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>

        <!-- Teleport renders element in another place in DOM based on provided CSS selector -->
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please enter some text...</p>
                <button @click="confirmError">Okay</button>
            </error-alert>
        </teleport>

    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>