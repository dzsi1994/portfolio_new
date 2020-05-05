<template>
  <footer class="container">
    <p class="copyright">
      © {{ currentYear }} Copyright Gergo Nagy. All rights reserved.
    </p>
    <p class="details">
      This site is built with Vue.js +
      <a>Nuxt.js</a> and hosted on Netlify. The source code is hosted on
      <a target="_blank">Github</a>.
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 60px 0;
  text-align: center;
}
.copyright {
  font-weight: 700;
}
.details {
  font-size: 0.75em;
  font-weight: 400;
}
</style>
