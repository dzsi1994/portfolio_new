<template>
  <div>
    <navbarVue></navbarVue>
    <nuxt/>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import navbarVue from './partials/navbar.vue'
import footerVue from './partials/footer.vue'

export default {
  components: {
    navbarVue,
    footerVue
  }
}
</script>

<style>
</style>
