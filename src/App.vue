<template>
  <div class="container">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> */_\*
        <router-link to="/about">About</router-link> */_\*
        <!-- <router-link to="/test">Test</router-link> */_\* -->
        <router-link to="/signup">Signup</router-link> */_\*
        <router-link to="/login">Login</router-link> */_\*
        <router-link to="/logout">Logout</router-link> */_\*
        <router-link to="/posts">Posts</router-link> */_\*
        <router-link to="/posts/new">Create Post</router-link>
        <!-- <router-link to="/posts/:id">Show Post</router-link> -->
      </div>
      <p>Is Logged In?{{ isLoggedIn() }}</p>
      <p>user id?{{ getUserId() }}</p>
      <router-view />
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      console.log("getting user id");
      return localStorage.getItem("user_id");
    },
  },
};
</script>