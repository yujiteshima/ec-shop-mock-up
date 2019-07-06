<template>
  <div class="login">
    <no-ssr>
      <firebase-ui />
    </no-ssr>
    <h1 v-if="isLogIn">Login してるよ</h1>
    <h1 v-if="!isLogIn">Login してないよ！</h1>
    <b-button @click="login">logintest</b-button>
  </div>
</template>

<script>
// import mapGetters from 'vuex'
import FirebaseUi from '~/components/FirebaseUi'
// import auth from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
export default {
  name: 'Login',
  components: {
    FirebaseUi
  },
  data() {
    return {
      user: null,
      isLogIn: false
    }
  },
  // computed:{
  //   ...mapGetters
  // },
  async mounted() {
    // const user = await this.authen()
    const user = await new Promise((resolve, reject) => {
      // authでよい。auth()ではエラーになる。
      firebase.auth().onAuthStateChanged(user => resolve(user))
      console.log('do---------ing')
    })
    if (user) {
      this.$store.commit('setUser', { user })
      this.user = user
      console.log('doooooooooooooo:' + user)
    }
    // if (this.user && !this.isLogIn) {
    //   this.isLogIn = true
    // }
    // (function(user) {
    //   if (user) {
    //     console.log(user)
    //     console.log('User is signed in.')
    //     this.$store.dispatch('logIn', {
    //       user
    //     })
    //   } else {
    //     console.log(user)
    //     console.log('No user is signed in.')
    //   }
    // })
    // currentUser プロパティを使用しても、現在ログインしているユーザーを取得できます。ユーザーがログインしていない場合、currentUser は null です。
    // const user = firebase.auth().currentUser

    // if (user) {
    //   console.log(user)
    //   console.log('User is signed in.')
    // } else {
    //   console.log(user)
    //   console.log('No user is signed in.')
    // }

    if (user != null) {
      user.providerData.forEach(function(profile) {
        console.log('  Sign-in provider: ' + profile.providerId)
        console.log('  Provider-specific UID: ' + profile.uid)
        console.log('  Name: ' + profile.displayName)
        console.log('  Email: ' + profile.email)
        console.log('  Photo URL: ' + profile.photoURL)
      })
    }
  },
  methods: {
    login() {
      const user = firebase.auth().currentUser
      this.$store.dispatch('logIn', {
        user
      })
    }
  }
}
</script>
