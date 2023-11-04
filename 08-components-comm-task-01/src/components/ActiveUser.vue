<template>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
export default {
    props: {
        username: String,
        age: String
    }
}
</script>