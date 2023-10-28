const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    // watcher methods execute whenever their connected data values changes
    // last value is always passed as an argument
    // we can also receive two args (newValue and oldValue)
    counter (value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   // will execute whenever 'name' changes (in data)
    //   if (value === '') { this.fullname = ''; }
    //   else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') { this.fullname = ''; }
    //   else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    // Computet props are only revaluated if one of their deps. changes
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
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
