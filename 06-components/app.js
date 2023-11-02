const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '111 222 333',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '333 222 111',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
