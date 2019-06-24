<template>
  <div class="container">
    <h1>Front-End Development & Consulting</h1>I’m a freelance front-end UI developer and trainer specializing in responsive Web design, modern CSS, progressive
    enhancement, and accessibility. I work with my clients to create interfaces and design systems that work for
    everyone, and that are optimized for accessibility and speed. Find out more about my work or hire me.
    <form name="contact" data-netlify="true">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
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

<style>
</style>
