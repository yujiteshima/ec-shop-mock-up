<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'Login',
  mounted: function() {
    if (process.browser) {
      // const firebaseui = require('firebaseui')
      // firebaseui-jaをインストールしてあレバ下記のように記載する事で日本語化される。
      const firebaseui = require('firebaseui-ja')
      // firebaseuiをインスタン化する
      const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
      // ここで、
      // let ui = firebaseui.auth.AuthUI.getInstance();
      // if (!ui) {
      //  ui = new firebaseui.auth.AuthUI(firebase.auth());
      // }
      // としているのは、SPAでサイトを構築した場合にError: An AuthUI instance already existsとなるのを防ぐ為。

      const config = {
        signInOptions:
          // authProvidersを設定できる。ここではプラグインで設定している。
          [
            authProviders.Google,
            authProviders.Facebook,
            authProviders.Twitter,
            authProviders.Github,
            authProviders.Email,
            authProviders.Phone,
            authProviders.Anonymous
          ],
        // signInが成功した時のジャンプ先
        // どこから来たかでジャンプ先を変えたり出来るのか？？？？？？？？？？？？？？？
        signInSuccessUrl: '/cart',
        // 規約ページへのジャンプ先を設定出来る。
        tosUrl: '/tos',
        // プライバシーポリシーへのジャンプ先を設定出来る。
        privacyPolicyUrl: '/privacy-policy',
        // ここに設定する内容は不明、要学習の後、コメントを入れること！！！！！！！！！！！！！！！！
        // An object of developers callbacks after specific events. <- from github-document
        // つまりui.startした処理が終わった後にここの内容が実行されるという事か？
        // スピナーの停止とかの為の状態変更に使えば良いのか？
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            console.log(authResult)
            console.log(redirectUrl)
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
          },
          // signInSuccessWithAuthResult: function() {
          //   console.log('signInSuccessWithAuthResult')
          // },
          uiShown: function() {
            console.log('uiShown')
          }
        }
      }
      // このui.startで指定したidの要素に、configのオプション内容でレンダリングされる。
      ui.start('#firebaseui-auth-container', config)
    }
  }
}
</script>

<style src="~~/node_modules/firebaseui/dist/firebaseui.css"></style>

<style lang="scss" scoped>
// #firebaseui-auth-container {
//   height: 100px;
//   width: 100px;
// }
</style>
