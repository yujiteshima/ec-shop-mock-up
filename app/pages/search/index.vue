<template>
  <b-container>
    <b-row>
      <b-col
        v-for="product in products"
        :key="product.id"
        sm="4"
        class="text-center d-flex justify-content-center"
      >
        <b-card
          :title="product.name"
          img-src="http://placehold.it/300"
          img-alt="Image"
          img-height="200px"
          img-width="200px"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 item-card"
        >
          <b-card-text>
            <p>¥ {{ product.price }}</p>
            <p>count : {{ product.count }}</p>
          </b-card-text>
          <b-button class="d-flex justify-content-center" variant="primary">
            INSERT CART
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      products: [
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
