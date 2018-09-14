<template>
<div class='survey-question'>
    <div id='question-display'>
    {{ question }}
    </div>
    <div class='question-input'>
        <input type='radio' @change='addAnswer' v-model='internalAnswer' value='1'>1
        <input type='radio' @change='addAnswer' v-model='internalAnswer' value='2'>2
        <input type='radio' @change='addAnswer' v-model='internalAnswer' value='3'>3
        <input type='radio' @change='addAnswer' v-model='internalAnswer' value='4'>4
        <input type='radio' @change='addAnswer' v-model='internalAnswer' value='5'>5
    </div>
</div>
</template>


<script>
export default {
    data() {
        return {
            internalAnswer:'' 
        }
    }, 
    methods: {
        addAnswer() {
            this.$store.commit('addAnswer', {
                index: this.index, 
                answer: this.internalAnswer
             });
        }
    },
    props: [ 'question', 'index' ]
}
</script>