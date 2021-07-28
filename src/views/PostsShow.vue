<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <p>{{ post.id }}</p>
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <img v-bind:src="post.image">
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      post: [],
    };
  },
  created: function () {
    this.postShow();
  },
  methods: {
    postShow: function () {
      console.log("showing a post...");
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>
