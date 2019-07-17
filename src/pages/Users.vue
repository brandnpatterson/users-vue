<template>
  <div class="users-wrap">
    <ul class="users">
      <li :key="user.id" v-for="user in users">
        <router-link :to="{ name: 'User', params: { id: user.id } }">
          {{ user.first_name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: ["users"]
};
</script>

<style>
.users {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 50rem;
}
</style>
