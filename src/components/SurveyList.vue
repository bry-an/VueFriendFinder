/* eslint-disable */
<template>
<div id='questions'>
    <p class='questions-header'>Please answer each question on a scale of <strong>1</strong> to <strong>5</strong>
    </p>
        <p class='questions-header'>Select 1 if you <strong>VEHEMENTLY DISAGREE</strong> &rarr; Select 5 if you <strong>WHOLE-HEARTEDLY AGREE</strong></p>
    <SurveyQuestion v-for='question in questions' :question='question.text' :key='question.key'>kitten</SurveyQuestion>
</div>
</template>
<script>
import SurveyQuestion from "./SurveyQuestion.vue";

export default {
  data:  
      function () {

      return {
      questions: [
        { text: "My favorite country is Africa.", id: 1 },
        { text: "My mother's maiden name is Bernstein.", id: 2 },
        {
          text:
            "I still feel burned after investing in a laserdisc player in 1997.",
          id: 3
        },
        {
          text:
            "What is the square of the derivative with respect to x of the cosine of x plus the negative square of the integral of the cosine of x dx?",
          id: 4
        },
        {
          text: "My favorite movie of 1936 was the classic  'World War 2'.",
          id: 5
        },
        {
          text:
            "My well-seasoned set of cast iron cookware makes me feel superior to most people.",
          id: 6
        },
        {
          text:
            "I have never gotten over the feeling of abandonment after my father divorced my mother and had a child with another woman.",
          id: 7
        },
        { text: "I find that I just don't care for Diet Coke anymore.", id: 8 },
        {
          text:
            "The word 'decimate' has been over-used so much it no longer retains its original meaning.",
          id: 9
        },
        {
          text: "Sometimes I like to call people and pretend they called me.",
          id: 10
        }
      ]
      }
  },
  components: { SurveyQuestion }
};
</script>
