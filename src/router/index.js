import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Posts from "../views/PostsIndex.vue";
import NewPosts from "../views/PostsNew.vue";
import ShowPosts from "../views/PostsShow.vue";
import EditPosts from "../views/PostsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/posts",
    name: "PostsIndex",
    component: Posts,
  },
  {
    path: "/posts/new",
    name: "PostsNew",
    component: NewPosts,
  },
  {
    path: "/posts/:id/edit",
    name: "PostsEdit",
    component: EditPosts,
  },
  {
    path: "/posts/:id",
    name: "PostsShow",
    component: ShowPosts,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
