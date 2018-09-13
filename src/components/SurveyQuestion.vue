<template>
<div class='survey-question'>
    <div id='question-display'>
    {{ question }}
    </div>
    <div class='question-input'>
        <input type='radio' @change='addAnswer' v-model='answer' value='1'>1
        <input type='radio' @change='addAnswer' v-model='answer' value='2'>2
        <input type='radio' @change='addAnswer' v-model='answer' value='3'>3
        <input type='radio' @change='addAnswer' v-model='answer' value='4'>4
        <input type='radio' @change='addAnswer' v-model='answer' value='5'>5
    </div>
</div>
</template>


<script>
export default {
    computed: {
        answers () {
            return this.$store.getters.getAnswers;
        }, 
    },
    methods: {
        addAnswer() {
            this.$store.commit('addAnswer', {
                index: this.index, 
                answer: this.answer
             });
        }
    },
    props: [ 'question', 'answer', 'index' ]
}
</script>