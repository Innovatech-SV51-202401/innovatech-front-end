<template>
  <div>
    <Card style="width: 40rem; overflow: hidden; margin: 20px">
      <template #header>
        <div class="flex justify-content-center">
          <img :src="perfilImage" :alt="clientName" height="180px" width="auto" style="border-radius: 10px; margin: 10px" />
        </div>
      </template>
      <template #title>
        <h3>{{typeProfile}}</h3>
        <h4>{{ clientName }}</h4>
      </template>
      <template #content>
        <p>Suscription: {{ typeSuscription }}</p>
        <p>Datos de contacto:</p>
        <ul>
          <li v-for="reference in clientReferences" :key="reference">
            {{ reference }}
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from "primevue/button";
import Tag from "primevue/tag";

export default {
  name: 'ClientProfile',
  components: {
    Card,
    Button,
    Tag
  },
  data() {
    return {
      clientName: 'Santiago Peres de Cuellar',
      typeProfile: 'Client',
      typeSuscription: 'Gold1',
      perfilImage: "https://i.ibb.co/n0x34pJ/mechanic.jpg",
      clientReferences: [
        'Correo: mecatronic@gmail.com',
        'Numero de telefono: 923143245'
      ]
    };
  }
};
</script>