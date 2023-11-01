const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: true,
            backgroundColor: ''
        }
    },
    methods: {
        setInputClass(event) {
            const newClass = event.target.value;
            if (newClass === 'user1' || newClass === 'user2') {
                this.inputClass = newClass;
            } else {
                this.inputClass = '';
            }
        },
        setVisible() {
            this.isVisible = !this.isVisible;
        },
        setBackgroundColor(event) {
            this.backgroundColor = event.target.value;
        }
    }
});

app.mount('#assignment');