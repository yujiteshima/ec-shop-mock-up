<template>
  <b-container>
    <b-row class="top-row mx-1 row-bg">
      <b-col cols="12">
        <!-- <div
          class="bg-primary content-col m-1 d-flex align-items-center justify-content-center"
        >
          ここにスライダーを実装する
        </div> -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide
            caption="Blank Image"
            img-blank
            img-alt="Blank image"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
              est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
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

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 0 0 0 0;
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
