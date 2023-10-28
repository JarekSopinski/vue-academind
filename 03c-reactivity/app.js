const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    // watcher methods execute whenever their connected data values changes
    // last value is always passed as an argument
    // we can also receive two args (newValue and oldValue)
    name(value) {
      // will execute whenever 'name' changes (in data)
      if (value === '') { this.fullname = ''; }
      else {
        this.fullname = value + ' ' + 'Schwarzmuller';
      }
    }
  },
  computed: {
    // Computet props are only revaluated if one of their deps. changes
    // fullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Schwarzmuller';
    // }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
