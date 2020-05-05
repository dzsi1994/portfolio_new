<template>
  <div class="container">
    <h1>Front-End Development & Consulting</h1>
    I’m a freelance front-end UI developer and trainer specializing in
    responsive Web design, modern CSS, progressive enhancement, and
    accessibility. I work with my clients to create interfaces and design
    systems that work for everyone, and that are optimized for accessibility and
    speed. Find out more about my work or hire me.
  </div>
  <!-- <div class="container">This is the index page changes.
      <ul>
      <li v-for="(post, index) in users" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.blog_title }}
        </NuxtLink>
      </li>
    </ul>
  </div> -->
</template>

<script>
import axios from 'axios';
export default {
  /* asyncData() {
    return axios
      .get('https://portfolio-2c1cd.firebaseio.com/blogs.json')
      .then(res => {
        return { users: res.data };
      });
  } */
};
</script>

<style></style>
