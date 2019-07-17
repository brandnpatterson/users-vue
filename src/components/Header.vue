<template>
  <div class="header">
    <ul>
      <li>
        <router-link :to="{ name: 'Users' }">Users</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
}
.header {
  margin: 0 auto;
  width: 25rem;
}
</style>
