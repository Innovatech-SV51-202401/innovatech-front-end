<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("username: ", this.username);
      console.log("password: ", this.password);
    },
  },
};

</script>

<template>
<!-- Desarrollo del logín -->
  <br> <br> <br> <br>
  <div class="p-fluid card">
    <!-- se mostrará el logo -->
    <img src="/src/assets/Logo.png" alt="Logo del startup" height="130" width="170">

    <!-- Implementación del card -->
    <div class="p-field">
      <label for="username">User</label> <br>
      <input id="username" v-model="username" type="text">
    </div> <br>
    <div class="p-field">
      <label for="password">Password</label> <br>
      <input id="password" v-model="password" type="password">
    </div> <br>
    <div class="p-field">
      <button @click="login" type="button" class="btn-input">Login</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  width: 20rem;
  margin: 0 auto;
  border: 2px solid yellowgreen;
  padding: 1rem;
  border-radius: 15px;
}
.btn-input {
  background-color: green;
  color: white;
  border-radius: 10px;
  padding: 0.5rem;
  border: 0;
  padding-left: 26px;
  padding-right: 26px;
}
.btn-input:hover {
  background-color: yellowgreen;
  color: black;
  cursor: pointer;
}
</style>