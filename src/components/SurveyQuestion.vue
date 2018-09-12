<template>
<div class='survey-question'>
    <div class='question-input'>
        <input type='radio' id='one' value='One' v-model='picked'>
        <label for='one'>1</label>
    </div>
    {{ question }}
</div>
</template>


<script>
export default {
    
    computed: {
        returnState() {
            return console.log(this.$store.state)
        }, 
    },
    methods: {
        // addAnswer() {
        //     this.$store.commit('addAnswer', picked, 0)
        // }
    },
    props: [ 'question', 'picked' ]
}
</script>