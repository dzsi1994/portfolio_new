<template>
  <div class="container">This is the index page changes.
      <ul>
      <li v-for="(post, index) in users" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.blog_title }}
        </NuxtLink>
      </li>
    </ul>
    <!-- <button @click="getData">getData</button> -->
  </div>
  
</template>

<script>
import {firebase} from '~/plugins/firebase.js'
import axios from 'axios'
export default {
  asyncData () {
    return axios.get('https://portfolio-2c1cd.firebaseio.com/blogs.json')
    .then((res) => {
      return { users: res.data }
    })
  }  
,

  methods: {
    /* getData() {
      firebase.firestore()
        .collection('blogs')
        .get().then((querySnapshot) => {
            this.users = querySnapshot.docs.map(doc =>
              Object.assign({ id: doc.id }, doc.data())
    )
  })
    } */
  }
}
</script>

<style>
</style>
