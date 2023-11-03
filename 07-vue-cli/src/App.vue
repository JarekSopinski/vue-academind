<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li v-for="f in friends" :key="f.id">{{ f.name }}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 4567 890',
                        email: 'manuel@localhost.com'
                    },
                    {
                        id: 'julie',
                        name: 'Julie Jones',
                        phone: '0123 4567 890',
                        email: 'julie@localhost.com'
                    }
                ]
            }
        }
    }
</script>