<template>
  <b-container fluid>
    <b-row class="py-3">
      <b-col cols="12" class="text-center demo"
        >このデモサイトはFirebaseとHerokuで稼働しています。</b-col
      >
      <b-col cols="12" class="text-center"
        >{{ user }}様、いらっしゃいませ！！！</b-col
      >
    </b-row>
    <b-row>
      <b-col cols="12" class="display-3 text-center">EC-SHOP-MOCK-UP</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="1" class="p-3 text-center d-none d-md-block">Category1</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">|</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">Category2</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">|</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">Category3</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">|</b-col>
      <b-col sm="1" class="p-3 text-center d-none d-md-block">Category4</b-col>
    </b-row>
  </b-container>
</template>

<script>
// import mapGetters from 'vuex'
export default {
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 3rem;
}
</style>
