<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import { FIREBASE_URL } from '../../App.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(`${FIREBASE_URL}/surveys.json`).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then(data => {
        console.log(data);
        const results = [];
        for (const id in data) {
          results.push({ id, name: data[id].name, rating: data[id].rating });
        }
        this.results = results;
      }).catch((error) => {
        console.error(error);
        this.error = 'Failed to fetch data.'
      }).finally(() => {
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>