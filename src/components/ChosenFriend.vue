<template>
<div id = 'show-friend'>
    <div id = 'show-friend-header'><button id='close-button' @click='close'>&#10006;</button></div>
    <div id = 'show-friend-content'>
<h2>Congratulations! You're a great match for:</h2>
<div id = 'friend-profile'>
<h3>{{ newFriend.name }}</h3>
<img class = 'friend-photo' :src='newFriend.photo' alt='your-new-friend' />
</div>
</div>
</div>

</template>

<script>
export default {
    props: [ 'newFriend' ], 
    methods: {
        close() {
            this.$store.commit('setShowResult', false);
        }
    }

}

</script>
