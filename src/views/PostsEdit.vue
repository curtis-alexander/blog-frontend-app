<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title: </label>
        <input type="text" v-model="editPostParams.title" />
      </div>
      <div>
        <label>Body: </label>
        <input type="text" v-model="editPostParams.body" />
      </div>
      <div>
        <label>Image: </label>
        <input type="text" v-model="editPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <br />
    <button v-on:click="deletePost">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editPostParams: {},
      errors: [],
    };
  },
  created: function () {
    console.log("edit page...");
    this.getPost();
  },
  methods: {
    submit: function () {
      axios
        .patch(`/posts/${this.$route.params.id}`, this.editPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/posts/${this.$route.params.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getPost: function () {
      console.log("in get post method");
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editPostParams = response.data;
      });
    },
    deletePost: function () {
      console.log("deleting post...");
      axios.delete(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/posts");
      });
    },
  },
};
</script>