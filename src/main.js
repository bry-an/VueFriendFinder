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
    userAnswers: []
  }, 
  mutations: {
    addAnswer (state, payload) {
      state.userAnswers[payload.index] = payload.answer;
    }
  }, 
  getters: {
    returnAnswers: state => {
      console.log(state.userAnswers);
    }
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App, SurveyQuestion},
  template: '<App/>'
})
