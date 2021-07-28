<template>
  <div class="posts-new">
    <form v-on:submit.prevent="submit()">
      <h1>Make a new Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="newPostParams.body" />
        <small v-if="newPostParams.body.length > 0 && newPostParams.body.length < 10"> Not enough characters</small>
        <small v-if="newPostParams.body.length >=10 && newPostParams.body.length <=100">{{ 100 - newPostParams.body.length }} Remaining characters</small>
        <small v-if="newPostParams.body.length > 100"> Too many characters</small>
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="newPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {
        body: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    postsCreate: function () {
      console.log("creating ne post ...");
      axios.post("/posts", this.newPostParams).then((response) => {
        console.log(response.data);
        this.newPostParams = response.data;
        this.$router.push("/posts");
      });
    },
  },
};
</script>
