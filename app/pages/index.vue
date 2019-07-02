<template>
  <b-container>
    <b-row class="top-row mx-1 row-bg">
      <b-col cols="12">
        <div
          class="bg-primary content-col m-1 d-flex align-items-center justify-content-center"
        >
          ここにスライダーを実装する
        </div>
      </b-col>
    </b-row>
    <b-row class="about-row m-1 row-bg2">
      <b-col sm="6">
        <div
          class="bg-success content-col m-1 d-flex align-items-center justify-content-center"
        >
          おすすめとかのテキスト
        </div>
      </b-col>
      <b-col sm="6">
        <div
          class="bg-info content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">
            おすすめのイメージ
          </nuxt-link>
        </div>
      </b-col>
    </b-row>
    <b-row class="topics-row m-1 row-bg">
      <b-col sm="12">
        <div
          class="bg-secondary topic-header m-1 d-flex align-items-center justify-content-center"
        >
          TopicsのHeader
        </div>
      </b-col>
      <b-col sm="6">
        <div
          class="bg-success content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">
            Topicsのイメージ
          </nuxt-link>
        </div>

        Topicsのテキスト
      </b-col>
      <b-col sm="6">
        <div
          class="bg-info content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">
            Topicsのイメージ
          </nuxt-link>
        </div>
        <div>Topicsのテキスト</div>
      </b-col>
    </b-row>

    <b-row class="new-row m-1 row-bg2">
      <b-col cols="6" sm="3">
        <div
          class="bg-success content-col m-1 d-flex flex-column align-items-center justify-content-center"
        >
          <div>新商品のテキスト</div>
          <div>
            <nuxt-link to="#">MORE</nuxt-link>
          </div>
        </div>
      </b-col>
      <b-col cols="6" sm="3">
        <div
          class="bg-info content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">新商品のイメージ</nuxt-link>
        </div>
        <div>新商品名 ¥価格</div>
      </b-col>
      <b-col cols="6" sm="3">
        <div
          class="bg-primary content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">新商品のイメージ</nuxt-link>
        </div>
        <div>新商品名 ¥価格</div>
      </b-col>
      <b-col cols="6" sm="3">
        <div
          class="bg-warning content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">新商品のイメージ</nuxt-link>
        </div>
        <div>新商品名 ¥価格</div>
      </b-col>
    </b-row>

    <b-row class="category-row m-1 row-bg">
      <b-col sm="12">
        <div
          class="bg-success m-1 d-flex align-items-center justify-content-center"
        >
          新商品のテキスト
        </div>
      </b-col>
      <b-col sm="4">
        <div
          class="bg-info content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">カテゴリのイメージ</nuxt-link>
        </div>
      </b-col>
      <b-col sm="4">
        <div
          class="bg-primary content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">カテゴリのイメージ</nuxt-link>
        </div>
      </b-col>
      <b-col sm="4">
        <div
          class="bg-warning content-col m-1 d-flex align-items-center justify-content-center"
        >
          <nuxt-link to="#">カテゴリのイメージ</nuxt-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
div {
  padding: 0 15px 0 0;
}
a {
  color: bisque;
  text-decoration: none;
  &:hover {
    color: firebrick;
  }
}
.row-bg {
  background-color: cadetblue;
}
.row-bg2 {
  background-color: burlywood;
}

.top-row {
  .content-col {
    height: 50vh;
  }
}
.about-row {
  .content-col {
    height: 30vh;
  }
}
.topics-row {
  .content-col {
    height: 30vh;
  }
}
.new-row {
  .content-col {
    height: 30vh;
  }
}
.category-row {
  .content-col {
    height: 30vh;
  }
}
</style>
