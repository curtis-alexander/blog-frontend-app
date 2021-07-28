<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <p>Search Titles: <input v-model="inputSearch"></p>
    <div class="row" is="transition-group" appear enter-active-class="animated pulse" leave-active-class="animated fadeOut">
      <div v-for="post in filterBy(posts, inputSearch, 'title')" v-bind:key="post.id">
        <p>Id: {{ post.id }}</p>
        <a v-bind:href="`/posts/${post.id}`">
        <p>Title: {{ post.title }}</p>
        </a>
        <p>Body: {{ post.body }}</p>
          <img v-bind:src="post.image" />
          <p><router-link v-bind:to="`/posts/${post.id}/edit`">Edit</router-link></p>
        <hr />
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to the Posts Page!",
      posts: [],
      inputSearch: "",
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("in index");
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
