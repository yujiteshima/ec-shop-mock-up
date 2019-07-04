<template>
  <b-container>
    <b-row>
      <b-col md="6" class="bg-success d-none d-md-block">
        <b-row>
          <b-col cols="12" class="py-3">
            <b-img src="http://placehold.it/300" fluid class="main-img"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
          <b-col cols="4" class="pb-3">
            <b-img src="http://placehold.it/300" fluid></b-img>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="bg-success d-md-none">
        <b-col class="py-3">
          <b-carousel
            id="carousel-2"
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
            <b-carousel-slide img-src="http://placehold.it/300"
              ><h1>First slide</h1></b-carousel-slide
            >

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="http://placehold.it/300">
              <h1>Second slide</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="http://placehold.it/300"
              ><h1>Third slide</h1></b-carousel-slide
            >
          </b-carousel>
        </b-col>
      </b-col>
      <b-col md="6" class="bg-primary">
        <h2 class="pt-3">Product 1</h2>
        <hr />
        <h2 class="pt-2">¥ 1296</h2>
        <hr />
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <b-button squared block variant="outline-danger">Insert Cart</b-button>
        <br />
        <b-button squared block variant="danger">Add Favorite List</b-button>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
        <p>text text text text text text text text text text text text</p>
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
    },
    handleScroll: function(evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  }
}
</script>
<style lang="scss" scoped>
.main-img {
  width: 100%;
}
</style>
