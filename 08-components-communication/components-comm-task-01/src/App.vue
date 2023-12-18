<template>
    <active-user :username="username" :age="age" />
    <user-data @on-add-user="setUser" />
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                age: ''
            }
        },
        methods: {
            setUser(username, age){
                this.username = username;
                this.age = age;
            }
        }
    }
</script>