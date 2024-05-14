<template>
  <br> <br>
  <div class="register-card">
    <img class="logo" src="src/assets/Logo.png" alt="Logo">

    <h2>Register As:</h2>

    <div class="button-group">
      <br>
      <PrimeButton class="buton" label="Owner" @click="registerAsOwner" />
      <br> <br>
      <PrimeButton class="buton" label="User" @click="registerAsUser" />
      <br> <br>
      <PrimeButton class="buton" label="Mechanic" @click="registerAsMechanic" />
    </div>
  </div>
</template>

<script>
import PrimeButton from 'primevue/button';

export default {
  components: { PrimeButton },
  methods: {
    registerAsOwner() {
      // Lógica para crear cuenta como Owner
      console.log("Crear cuenta como Owner");
      // Redirigir a la página de registro como Owner
      this.$router.push({ name: "owner-register" });
    },
    registerAsUser() {
      // Lógica para crear cuenta como User





      console.log("Crear cuenta como User");
      // Redirigir a la página de registro como User
      this.$router.push({ name: "user-register" });
    },
    registerAsMechanic() {
      // Lógica para crear cuenta como Mechanic
      console.log("Crear cuenta como Mechanic");
      // Redirigir a la página de registro como Mechanic
      this.$router.push({ name: "mechanic-register" });
    }
  }
}
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.register-card {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: dimgrey;
  text-align: center;
}

.button-group {
  justify-content: space-between;
  margin-top: 20px;
}

.buton {
  width: 100%;
  text-align: center;
  margin: 10px 0;
  color: black;
  background-color: #a0e034;
  border-color: #a0e034;
}
</style>