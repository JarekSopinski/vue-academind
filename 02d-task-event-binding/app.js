const app = Vue.createApp({
    data() {
        return {
            input1: '',
            input2: ''
        }
    },
    methods: {
        handleButtonClick() {
            alert('Button clicked');
        },
        setInput1(event) {
            this.input1 = event.target.value;
        },
        setInput2(event) {
            this.input2 = event.target.value;
        }
    }
});

app.mount('#assignment');