<template>
  <div class="login">
    <no-ssr>
      <firebase-ui />
    </no-ssr>
  </div>
</template>

<script>
import FirebaseUi from '~/components/FirebaseUi'

export default {
  name: 'Login',
  components: {
    FirebaseUi
  }
}
</script>
