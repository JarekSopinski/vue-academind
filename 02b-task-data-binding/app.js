const app = Vue.createApp({
    data() {
        return {
            name: 'Jon',
            age: 18,
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
        }
    },
    methods: {
        getAgeInFiveYears() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');