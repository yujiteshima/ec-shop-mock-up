<template>
  <button @click="googleLogin">googleでログイン</button>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Home',
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
