<template>
  <div id="app">
    <Header />
    <router-view :users="users" :user="filterUser()" />
  </div>
</template>

<script>
import Header from "./components/Header";
import { getUsers } from "./api";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    this.users = await getUsers();
  },
  methods: {
    filterUser() {
      return this.users.find(user => user.id === Number(this.$route.params.id));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
}
</style>
