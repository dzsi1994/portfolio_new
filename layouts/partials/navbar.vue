<template>
  <div>
    <header class="container homepage__menu">
      <nav>
        <div class="logo">
          <nuxt-link to="/">Gergo Nagy</nuxt-link>
        </div>
      </nav>
      <div
        class="homepage__menu__burger"
        @click="isNavOpened = !isNavOpened"
        v-bind:class="{ 'st-1': isNavOpened, 'st-2': isNavOpened }"
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
    </header>
    <div class="homepage__overlay" v-bind:class="{ open: isNavOpened }">
      <nav style="width: 100%;">
        <span @click="isNavOpened = !isNavOpened">
          <nuxt-link to="/">Home</nuxt-link>
        </span>
        <span @click="isNavOpened = !isNavOpened">
          <nuxt-link to="/about">About me</nuxt-link>
        </span>
        <span @click="isNavOpened = !isNavOpened">
          <nuxt-link to="/contact">Contact me</nuxt-link>
        </span>
        <span @click="isNavOpened = !isNavOpened">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </span>
        <span @click="isNavOpened = !isNavOpened">
          <nuxt-link to="/uses">Uses</nuxt-link>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_variables.scss';
.homepage {
  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;

    &__burger {
      cursor: pointer;
      z-index: 9998;
      cursor: pointer;

      i {
        display: block;
        width: 35px;
        height: 2px;
        margin: 8px;
        background-color: $font-color;
      }
      i:nth-child(n) {
        -moz-transition: -moz-transform 0.45s
            cubic-bezier(0.43, 0.77, 0.15, 1.5),
          background 0.3s ease;
        -o-transition: -o-transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5),
          background 0.3s ease;
        -webkit-transition: -webkit-transform 0.45s
            cubic-bezier(0.43, 0.77, 0.15, 1.5),
          background 0.3s ease;
        transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5),
          background 0.3s ease;
      }

      &:hover {
        i:nth-child(1) {
          -moz-transform: translate3d(0, -4px, 0);
          -ms-transform: translate3d(0, -4px, 0);
          -webkit-transform: translate3d(0, -4px, 0);
          transform: translate3d(0, -4px, 0);
        }

        i:nth-child(3) {
          -moz-transform: translate3d(0, 4px, 0);
          -ms-transform: translate3d(0, 4px, 0);
          -webkit-transform: translate3d(0, 4px, 0);
          transform: translate3d(0, 4px, 0);
        }
      }
      &.st-1 {
        animation: rotate-back-in 0.8s cubic-bezier(0.2, 0.86, 0.35, 1) forwards;
        -webkit-animation: rotate-back-in 0.8s cubic-bezier(0.2, 0.86, 0.35, 1)
          forwards;
      }
      &.st-2 {
        animation: rotate-back-out 0.85s cubic-bezier(0.2, 0.86, 0.35, 1)
          forwards;
        -webkit-animation: rotate-back-out 0.85s
          cubic-bezier(0.2, 0.86, 0.35, 1) forwards;
        i:nth-child(1) {
          -moz-transform: translate3d(0, 10px, 0) rotate(45deg) scale(1.5);
          -ms-transform: translate3d(0, 10px, 0) rotate(45deg) scale(1.5);
          -webkit-transform: translate3d(0, 10px, 0) rotate(45deg) scale(1.5);
          transform: translate3d(0, 10px, 0) rotate(45deg) scale(1.5);
        }
        i:nth-child(2) {
          opacity: 0;
        }
        i:nth-child(3) {
          -moz-transform: translate3d(0, -10px, 0) rotate(-45deg) scale(1.5);
          -ms-transform: translate3d(0, -10px, 0) rotate(-45deg) scale(1.5);
          -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg) scale(1.5);
          transform: translate3d(0, -10px, 0) rotate(-45deg) scale(1.5);
        }
        &:hover {
          i:nth-child(1) {
            transform: translate3d(0, 10px, 0) rotate(50deg) scale(1.5);
          }
          i:nth-child(3) {
            -moz-transform: translate3d(0, -10px, 0) rotate(-50deg) scale(1.5);
            -ms-transform: translate3d(0, -10px, 0) rotate(-50deg) scale(1.5);
            -webkit-transform: translate3d(0, -10px, 0) rotate(-50deg)
              scale(1.5);
            transform: translate3d(0, -10px, 0) rotate(-50deg) scale(1.5);
          }
        }
      }
    }
  }
  &__overlay {
    position: fixed;
    background-color: #333;
    top: 100vh;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: top 0.4s;
    -moz-transition: top 0.4s;
    -ms-transition: top 0.4s;
    -o-transition: top 0.4s;
    transition: top 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9;
    &.open {
      top: 0;
    }

    span {
      width: 90%;
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.3, 0, 0, 1);
      transition: transform 0.3s cubic-bezier(0.3, 0, 0, 1);
      font-size: 2em;
      background-color: rgba(0, 0, 0, 0.02);
      position: relative;
      padding: 30px 0;
      &:before,
      &:after {
        content: ' ';
        opacity: 0;
        height: 75%;
        width: 100%;
        left: 0;
        position: absolute;
        -moz-transition: -moz-transform 0.4s cubic-bezier(0.65, 0.15, 0, 1);
        -o-transition: -o-transform 0.4s cubic-bezier(0.65, 0.15, 0, 1);
        -webkit-transition: -webkit-transform 0.4s
          cubic-bezier(0.65, 0.15, 0, 1);
        transition: transform 0.4s cubic-bezier(0.65, 0.15, 0, 1);
      }
      &:before {
        top: 0;
        -moz-transform: translate3d(-100%, 0, 0);
        -ms-transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        background-color: #2e2e2e;
        z-index: -1;
      }
      &:after {
        bottom: 0;
        -moz-transform: translate3d(100%, 0, 0);
        -ms-transform: translate3d(100%, 0, 0);
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        -moz-transition-delay: 125ms;
        -o-transition-delay: 125ms;
        -webkit-transition-delay: 125ms;
        transition-delay: 125ms;
        background-color: #2d2d2d;
        z-index: -2;
      }
      &:hover {
        &:after,
        &:before {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      &:nth-of-type(1) {
        -webkit-transition-delay: 0.36s;
        transition-delay: 0.36s;
      }

      &:nth-of-type(2) {
        -webkit-transition-delay: 0.45s;
        transition-delay: 0.45s;
      }

      &:nth-of-type(3) {
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
      }

      &:nth-of-type(4) {
        -webkit-transition-delay: 0.65s;
        transition-delay: 0.65s;
      }
      a {
        border-bottom: none;
      }
    }

    &__close {
      position: absolute;
      color: #fff;
      top: 0px;
      right: 30px;

      &:hover {
        cursor: $font-color;
      }
    }
  }
}
@keyframes rotate-back-out {
  0% {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  45% {
    -moz-transform: rotate(185deg);
    -ms-transform: rotate(185deg);
    -webkit-transform: rotate(185deg);
    transform: rotate(185deg);
  }

  100% {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

@keyframes rotate-back-in {
  0% {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  45% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
