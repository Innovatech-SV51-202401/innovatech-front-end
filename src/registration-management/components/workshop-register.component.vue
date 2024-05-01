<script>
import {Workshop} from "../model/workshop.entity.js";

export default {
  name: "workshop-register",
  data() {
    return {
      workshop: new Workshop()
    };
  },
  methods: {
    registerWorkshop() {
      console.log("Datos del taller:", this.workshop);
      this.resetForm();
    },
    resetForm() {
      this.workshop = new Workshop();
    }
  }
}

</script>

<template>
  <div>
    <h2>Registrar Local de Mantenimiento</h2>
    <form @submit.prevent="registerWorkshop">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="workshop.name" required>
      </div>
      <div>
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="workshop.description" required></textarea>
      </div>
      <div>
        <label for="address">Dirección:</label>
        <input type="text" id="address" v-model="workshop.address" required>
      </div>
      <div>
        <label for="phone">Teléfono:</label>
        <input type="tel" id="phone" v-model="workshop.phone" required>
      </div>
      <div>
        <label for="idProprietor">ID Propietario:</label>
        <input type="text" id="idProprietor" v-model="workshop.idProprietor" required>
      </div>
      <button type="submit">Registrar Local</button>
    </form>
  </div>
</template>

<style scoped>

</style>