<template>
  <div>
    <navbarVue></navbarVue>
    <nuxt />
    <div class="what-are-you">
      <div class="what-are-you__title">What are you working on?</div>
      <p>
        Let’s have a conversation! I’d love to hear about what you’re working
        on, and find a way to work together.
      </p>
      <button>Email me</button>
    </div>
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
.what-are-you {
  width: 100vw;
  height: 430px;
  background-color: rgb(28, 44, 53);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.what-are-you__title {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0px;
  color: rgb(176, 251, 188);
  font-size: 48px;
}
.what-are-you p {
  font-size: 18px;
}
button {
  background-image: -webkit-gradient(
    linear,
    right bottom,
    left top,
    from(#5be1bd),
    to(#5be190)
  );
  background-image: linear-gradient(to right, #5be1bd, #5be190);
  color: #fff !important;
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  border: 0;
  border-radius: 2rem;
  white-space: nowrap;
  padding: 1rem 1.5rem;
  line-height: 1.4;
  position: relative;
  text-align: center;
  position: relative;
  min-width: 200px;
  text-transform: uppercase;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
  }
}
</style>
