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
        signInSuccessUrl: '/',
        // 規約ページへのジャンプ先を設定出来る。
        tosUrl: '/tos',
        // プライバシーポリシーへのジャンプ先を設定出来る。
        privacyPolicyUrl: '/privacy-policy',
        // ここに設定する内容は不明、要学習の後、コメントを入れること！！！！！！！！！！！！！！！！
        callbacks: {
          signInSuccessWithAuthResult: function() {
            console.log('signInSuccessWithAuthResult')
          },
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
