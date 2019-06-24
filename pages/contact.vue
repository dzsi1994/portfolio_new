<template>
  <div class="container">
    <div class="contact">
      <div class="contact__text">
        <h1>Front-End Development & Consulting</h1>
        <p>
          I’m a freelance front-end UI developer and trainer specializing in responsive Web design, modern CSS, progressive
          enhancement, and accessibility. I work with my clients to create interfaces and design systems that work for
          everyone, and that are optimized for accessibility and speed. Find out more about my work or hire me.
        </p>
      </div>
      <form name="contact" data-netlify="true" class="contact__form">
        <div class="form-element">
          <input type="text" name="name" placeholder="Full name">
        </div>
        <div class="form-element">
          <input type="email" name="email" placeholder="Email">
        </div>
        <div class="form-element">
          <textarea name="message" placeholder="Here your message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact me',
      meta: [
        { name: 'description', content: 'Just send me an email' },
        { name: 'keywords', content: 'frontend, freelance, work' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  &__text {
    grid-row: 1;
    grid-column: 2 / 7;
  }
  &__form {
    grid-column: 8 / 12;
    grid-row: 1;
    font-weight: 300;
    font-size: 0.9em;
    padding: 2em 0;
    .form-element {
      margin-bottom: 20px;
      input {
        font-family: inherit;
        width: 100%;
        background: #312d3c;
        color: #fff;
        border-radius: 8px;
        border: 2px solid transparent;
        padding: 1rem;
        &:focus {
          border-color: #5be1bd;
          outline: none;
        }
      }
      textarea {
        font-family: inherit;
        width: 100%;
        background: #312d3c;
        color: #fff;
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid transparent;
        &:focus {
          border-color: #5be1bd;
          outline: none;
        }
      }
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
      -webkit-transition: 70ms;
      transition: 70ms;
      position: relative;
      min-width: 200px;
      text-transform: uppercase;
    }
  }
}
</style>
