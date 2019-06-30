<template>
  <div class="container">This is the index page changes.
      <ul>
      <li v-for="(post, index) in users" :key="index">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          {{ post.blog_title }}
        </NuxtLink>
      </li>
    </ul>
    <button @click="getData">getData</button>
  </div>
  
</template>

<script>
import {firebase} from '~/plugins/firebase.js'
export default {
  asyncData() {
 firebase.firestore()
        .collection('blogs')
        .get().then((querySnapshot) => {
          return this.users = querySnapshot.docs.map(doc =>
              Object.assign({ id: doc.id }, doc.data())
    )
  }).catch(err => console.error(err));
},
  data() {
  return {
    users: []
  }
},

  methods: {
    getData() {
      firebase.firestore()
        .collection('blogs')
        .get().then((querySnapshot) => {
            this.users = querySnapshot.docs.map(doc =>
              Object.assign({ id: doc.id }, doc.data())
    )
  })
    }
  }
}
</script>

<style>
</style>
