# EC-SHOP-MOCK-UP MEMO

## create Nuxt project

```
yujiMBP:works yujiteshima$ npx create-nuxt-app ec-shop-mock-up
> Generating Nuxt.js project in /Users/yujiteshima/works/ec-shop-mock-up
? Project name ec-shop-mock-up
? Project description My praiseworthy Nuxt.js project
? Use a custom server framework none
? Choose features to install Progressive Web App (PWA) Support, Linter / Formatter, Prettier, Axios
? Use a custom UI framework bootstrap
? Use a custom test framework jest
? Choose rendering mode Universal
? Author name Yuji Teshima
? Choose a package manager yarn
```

## 初期設定

assets, commponents, layouts, middleware, pages, plugins, static ディレクトリをappディレクトリを作成して、移動させる。

### appディレクトリに移動した事によるpathの修正

```js
// nuxt.config.js
export default {
  mode: 'universal',
  srcDir: 'app', // <- 追記
}
```

テストの設定ファイルのpathも修正しておく。

```js
// jest.config.js
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    // - '<rootDir>/components/**/*.vue',
    // - '<rootDir>/pages/**/*.vue'
    '<rootDir>/app/components/**/*.vue', // <- path変更
    '<rootDir>/app/pages/**/*.vue'       // <- path変更
  ]
}
```

```js
// Logo.spec.js

import { mount } from '@vue/test-utils'
// - import Logo from '@/components/Logo.vue'
import Logo from '@/app/components/Logo.vue' // <- path変更
```


### 一度、動きを確認
```
$ cd ec-shop-mock-up
$ yarn dev -p 3030
```
テストもチェック
```
$ yarn test
```
### linterの設定

lintfixのコマンドを追記しておく

```js
// package.json
"lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore .", // <- 追記
```
### FontAwesome導入

```
$ yarn add nuxt-fontawesome
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome
$ yarn add @fortawesome/free-solid-svg-icons
```

nuxt.config.jsでmodulsにnuxt-fontawesomeを追加

```js
// nuxt.config.js
module.exports = {
 modules: [
  ...
    'nuxt-fontawesome' //ここに追記
  ],

  ...

//この部分を追記
 fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
```
```html
  <i class="fas fa-lock"></i>
```

### sass導入

```
$ yarn add node-sass sass-loader style-loader
```

### 初期設定コメント

ディレクトリの構成は、好みの問題や他にも最適解あるのかもしれないが、Nuxt ビギナーズブックで提示された、appフォルダに集約する方法を採用する。テストファイルを同じディレクトリ構成で作り、可読性を高めたり、単純に自分がこのディレクトリ構成に慣れてきたという為にこのディレクトリ構成でいく。

Pugについては今回は採用しない事とする。 CSSフレームワークのBulmaが自分自身の初採用という事で、ドキュメントと見比べながらの開発となる事が考えられる為。慣れてこればPugで書くほうがスッキリと書けるようになるだろう。

### Git に FirstCommit、　FirstPushしておく。

```
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/yujiteshima/ec-shop-mock-up.git
$ git push -u origin master
```

## Headerの作成

### Headerの仕様

- ブランドロゴある
- 検索フォームがある
- 検索フォームはセレクトとインプットがくっついているもの
- 新規登録リンクがある
- ログインリンクがある
- カートページリンクがある

### Gitのブランチ作成

```
$ git checkout -b create-TheHeader
```

### Header.vue作成
1. app/componentsディレクトリにTheHeader.vueを作成する。
2. testディレクトリにもcomponentsディレクトリを作成して、TheHeader.spec.jsを作成。
3. ついでにLogo.spec.vueもtest/componentsディレクトリに移動しておく。

### TheHeader.spec.js作成
リンクが存在するかどうかのチェック
```js
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TheHeader from '~/app/components/TheHeader.vue'

const localVue = createLocalVue()

describe('components/TheHeader.vue', () => {
  test('TopPageへのリンクが存在する', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  }),
  test('新規登録Pageへのリンクが存在する', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/new')
  }),
  test('ログインPageへのリンクが存在する', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/login')
  }),
})

```
