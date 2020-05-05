<template>
  <div class="container">
    <div class="contact">
      <div class="contact__text">
        <h1>Hi, it’s nice to meet you.</h1>
        <p>
          Do you have a project that could use my front-end skills? My favorite
          projects have been those where I’ve joined a team from the get-go and
          worked closely with the designers to bring great user experiences to
          life. If you believe a modern, performant, and accessible front-end
          foundation for your UI is worth investing in, then you're already my
          favorite client!
        </p>
        <p>
          Do you have a project that could use my front-end skills? My favorite
          projects have been those where I’ve joined a team from the get-go and
          worked closely with the designers to bring great user experiences to
          life. If you believe a modern, performant, and accessible front-end
          foundation for your UI is worth investing in, then you're already my
          favorite client!
        </p>
      </div>
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
    };
  }
};
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  &__text {
    grid-row: 1;
    grid-column: 2 / 7;
    line-height: 32px;
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
        background: #241f2e;
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
        background: #241f2e;
        color: #fff;
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid transparent;
        height: 160px;
        resize: none;
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
  }
}
</style>
