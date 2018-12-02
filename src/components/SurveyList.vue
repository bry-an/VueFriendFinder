/* eslint-disable */
<template>
<div id = 'survey'>
<div id='questions'>
    <p class='questions-header'>Please answer each question on a scale of <strong>1</strong> to <strong>5</strong>
    </p>
        <p class='questions-header'>Select 1 if you <strong>VEHEMENTLY DISAGREE</strong> &rarr; Select 5 if you <strong>WHOLE-HEARTEDLY AGREE</strong></p>
    <SurveyQuestion v-for='question in questions' :question='question.text' :index='question.id' :key='question.id'>kitten</SurveyQuestion>
    <button id="result" v-if='showButton' @click='setShowResult(true); getNewFriend()'>Show me my partner!</button>
    <ChosenFriend v-if='result' :newFriend='newFriend'></ChosenFriend>


</div>


</div>
</template>
<script>
import SurveyQuestion from "./SurveyQuestion.vue";
import ChosenFriend from "./ChosenFriend.vue"
import friends from '@/data/friends.js'

export default {
  data ()  {
    return {
      showResult: false, 
      newFriend: {}
    }
  },
  methods: {
    getNewFriend () {
      let friend = friends.friendFinder(this.$store.state.userAnswers)
      console.log(friend);
      this.newFriend = friend;
    }, 
    setShowResult(bool) {
      this.$store.commit('setShowResult', bool);
    }
  }, 
  computed: {
    questions () {
      return this.$store.state.surveyQuestions;
    },
    userAnswers () {
      return this.$store.state.userAnswers
    }, 
    showButton () {
      return this.userAnswers.length === 10 && !this.userAnswers.includes(undefined)
    },
    result() {
      return this.$store.state.showResult
    } 
  }, 
  components: { SurveyQuestion, ChosenFriend }
};
</script>
