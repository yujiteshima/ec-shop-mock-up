<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
      <b-container>
        <b-navbar-brand>
          <nuxt-link to="/">EC-SHOP-MOCK-UP</nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav> -->
          <!-- <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          <!-- <b-nav-item> -->
          <b-nav-form>
            <b-form-select
              v-model="selected"
              :options="options"
              size="sm"
              class="select-form"
            ></b-form-select>
            <b-form-input
              v-model="keyword"
              size="sm"
              placeholder="Search"
            ></b-form-input>
            <b-button
              size="sm"
              placeholder="Search"
              variant="success"
              @click="search"
              >Search</b-button
            >
          </b-nav-form>
          <!-- </b-nav-item> -->
          <!-- </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-navbar-nav class="ml-auto mr-5"> -->
            <b-nav-item v-if="!isLogin">
              <nuxt-link to="/login">Login/SignUp</nuxt-link>
            </b-nav-item>
            <b-nav-item v-if="isLogin">
              <a @click="logout">Logout</a>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/cart">
                <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
                <b-badge variant="danger">{{ cartItemCount }}</b-badge>
              </nuxt-link>
            </b-nav-item>
            <!-- </b-navbar-nav> -->
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      keyword: '',
      options: [
        { value: null, text: 'All Item' },
        { value: 'typeA', text: 'A' },
        { value: 'typeB', text: 'B' },
        { value: 'typeC', text: 'C' },
        { value: 'typeD', text: 'D' }
      ],
      // isLogin: true,
      cartItemCount: 3
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogIn
    }
  },
  methods: {
    search() {
      console.log('this is search')
    },
    logout() {
      if (confirm('Logoutしてよろしですか')) {
        this.$store.dispatch('logout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: bisque;
  text-decoration: none;
}
</style>
