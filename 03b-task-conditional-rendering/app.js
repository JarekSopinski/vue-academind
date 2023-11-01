const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            isListHidden: false
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        setListHidden() {
            this.isListHidden = !this.isListHidden;
        }
    }
});

app.mount('#assignment');