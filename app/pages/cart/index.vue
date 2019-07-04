<template>
  <b-container>
    <b-row class="pt-3">
      <h2>ショッピングカート</h2>
    </b-row>
    <hr />
    <b-row>
      <b-col class="bg-success text-center">カートの商品</b-col>
      <b-col class="bg-danger text-center">お客様情報</b-col>
      <b-col class="bg-primary text-center">ご注文手続き</b-col>
      <b-col class="bg-info text-center">ご注文内容確認</b-col>
      <b-col class="bg-warning text-center">完了</b-col>
    </b-row>
    <b-row>
      <b-col>Total Price is ¥{{ totalPrice }}</b-col>
    </b-row>
    <b-row>
      <b-col cols="1 bg-success">Delete</b-col>
      <b-col cols="7 bg-danger">ProductInfo</b-col>
      <b-col cols="2 bg-primary">count</b-col>
      <b-col cols="2 bg-info">subTotal</b-col>
    </b-row>
    <b-row
      v-for="item in items"
      :key="item.id"
      class="py-3 border-bottom border-secondary"
    >
      <b-col cols="1" bg-success>
        <span><font-awesome-icon icon="times"></font-awesome-icon></span>
      </b-col>
      <b-col cols="2">
        <b-img src="http://placehold.it/300" fluid></b-img>
      </b-col>
      <b-col cols="5">
        <b-col cols="12">
          {{ item.name }}
        </b-col>
        <b-col cols="12"> ¥{{ item.price }} </b-col>
      </b-col>
      <b-col cols="2">
        <font-awesome-icon icon="minus"></font-awesome-icon>
        <span>{{ item.count }}</span>
        <font-awesome-icon icon="plus"></font-awesome-icon>
      </b-col>
      <b-col cols="2">
        <span>{{ subTotal }}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7"></b-col>
      <b-col cols="3" class="text-right">TotalPrice:</b-col>
      <b-col cols="2">
        <span>{{ totalPrice }}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7"></b-col>
      <b-col cols="5">
        <b-button squared block variant="danger">Go to Checkout</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7"></b-col>
      <b-col cols="5">
        <b-button squared block variant="primary">Continue shopping</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      totalPrice: 1234,
      subTotal: 555,
      items: [
        {
          id: 1,
          name: 'product1',
          price: 100,
          count: 1
        },
        {
          id: 2,
          name: 'product2',
          price: 200,
          count: 1
        },
        {
          id: 3,
          name: 'product3',
          price: 300,
          count: 1
        },
        {
          id: 4,
          name: 'product4',
          price: 400,
          count: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
