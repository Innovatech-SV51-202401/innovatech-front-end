<template>
  <div class="d-flex justify-content-center">
    <Card style="width: 40rem; overflow: hidden; margin: 20px; text-align-center">
      <template #header>
        <div class="flex justify-content-center">
          <img :src="perfilImage" :alt="mechanicName" height="180px" width="auto" style="border-radius: 10px; margin: 10px" />
        </div>
      </template>
      <template #title>
        <div class="flex justify-content-center">
          <h4>{{ mechanicName }}</h4>
        </div>
      </template>
      <template #content>
        <div class="text-center">
          <h3>{{ mechanicSpecialty }}</h3>
          <h3>------------- Contacto -------------</h3>
          <p>Correo: <Tag value="owner@gmail.com" severity="info" /></p>
          <p>Telefono: <Tag value="  926 334 654" severity="info" /></p>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from "primevue/button";
import Tag from "primevue/tag";

export default {
  name: 'OwnerProfile',
  components: {
    Card,
    Button,
    Tag
  },
  data() {
    return {
      mechanicName: 'Lizbeth Lium Paredes',
      perfilImage: "https://i.ibb.co/n0x34pJ/mechanic.jpg",
      mechanicSpecialty: 'Owner'
    };
  }
};
</script>