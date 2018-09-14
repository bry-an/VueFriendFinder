// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import SurveyQuestion from './components/SurveyQuestion.vue'

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    showResult: false,
    userAnswers: [],
    surveyQuestions: [
      { text: "My favorite country is Africa.", id: 0 },
      { text: "My mother's maiden name is Bernstein.", id: 1 },
      {
        text:
          "I still feel burned after investing in a laserdisc player in 1997.",
        id: 2
      },
      {
        text:
          "What is the square of the derivative with respect to x of the cosine of x plus the negative square of the integral of the cosine of x dx?",
        id: 3
      },
      {
        text: "My favorite movie of 1936 was the classic  'World War 2'.",
        id: 4
      },
      {
        text:
          "My well-seasoned set of cast iron cookware makes me feel superior to most people.",
        id: 5
      },
      {
        text:
          "I have never gotten over the feeling of abandonment after my father divorced my mother and had a child with another woman.",
        id: 6
      },
      { text: "I find that I just don't care for Diet Coke anymore.", id: 7 },
      {
        text:
          "The word 'decimate' has been over-used so much it no longer retains its original meaning.",
        id: 8
      },
      {
        text: "Sometimes I like to call people and pretend they called me.",
        id: 9
      }
    ],
  },
  mutations: {
    addAnswer(state, payload) {
      // state.userAnswers[payload.index] = payload.answer;
      Vue.set(state.userAnswers, payload.index, payload.answer)
    },
    setShowResult(state, payload) {
      state.showResult = payload;
    }
  },
  getters: {
    surveyComplete: state => state.userAnswers.length === 10
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App, SurveyQuestion },
  template: '<App/>'
})
