import firebase from '~/plugins/firebase'

export const state = () => ({
  isLogIn: false,
  user: null
})
export const getters = {
  isLoggedIn: state => state.isLogIn,
  user: state => state.user
}
export const mutations = {
  setUser(state, { user }) {
    console.log('in mutation @ index.js:' + user)
    state.user = user.providerData[0].displayName
    state.isLogIn = true
    console.log('DDDDDDDDDDDDOOOOOOOOOOOOOO')
  },
  logout(state) {
    console.log('do logout mutations')
    state.user = null
    state.isLogIn = false
  }
}

export const actions = {
  logIn({ commit }, user) {
    console.log('do login action')
    commit('setUser', user)
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout in acition Success!!!!!!!!!!')
        commit('logout')
      })
      .catch(error => {
        console.log(`ログアウト時にエラーが発生しました (${error})`)
      })
  }
}
