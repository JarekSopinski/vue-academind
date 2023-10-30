const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            console.log(value);
            setTimeout(() => {
                this.counter = 0;
            }, [5000]);
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter > 37) {
                return 'Too much!';
            } else {
                return `Result: ${this.counter}`;
            }
        }
    },
    methods: {
        setCounter(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');