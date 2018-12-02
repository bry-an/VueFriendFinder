import Vuex from "vuex"
import Vue from 'vue'
import state from "./state"

Vue.use(Vuex)

export default new Vuex.Store({
    state,

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