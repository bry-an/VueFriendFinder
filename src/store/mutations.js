import Vue from "vue"
export default {
  addAnswer(state, payload) {
    // state.userAnswers[payload.index] = payload.answer;
    Vue.set(state.userAnswers, payload.index, payload.answer);
  },
  setShowResult(state, payload) {
    state.showResult = payload;
  }
};
