<template>
  <div class="user-wrap">
    <div class="left-link">
      <router-link :to="{ name: 'User', params: { id: prevUser() } }">
        Prev
      </router-link>
    </div>
    <div class="user" v-if="user">
      <img :src="user.avatar" :alt="user.first_name" />
      <h1>{{ user.first_name }} {{ user.last_name }}</h1>
      <h2>{{ user.email }}</h2>
    </div>
    <div class="right-link">
      <router-link :to="{ name: 'User', params: { id: nextUser() } }">
        Next
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user", "users"],
  methods: {
    prevUser() {
      const { id } = this.$route.params;

      if (Number(id) === 1) {
        return Number(this.users.length);
      } else {
        return Number(id) - 1;
      }
    },
    nextUser() {
      const { id } = this.$route.params;

      if (Number(id) === Number(this.users.length)) {
        return 1;
      } else {
        return Number(id) + 1;
      }
    }
  }
};
</script>

<style>
.user-wrap {
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 70rem;
}

.user {
  margin-top: 3rem;
}
</style>
