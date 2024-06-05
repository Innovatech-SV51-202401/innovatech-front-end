<template>
  <div>
    <Card style="width: 40rem; overflow: hidden; margin: 20px">
      <template #header>
        <div class="flex justify-content-center">
          <img :src="perfilImage" :alt="mechanicName" height="180px" width="auto" style="border-radius: 10px; margin: 10px" />
        </div>
      </template>
      <template #title>
        <h4>{{ mechanicName }}</h4>
      </template>
      <template #content>
        <p>Especialidad: {{ mechanicSpecialty }}</p>
        <p>Datos de contacto:</p>
        <ul>
          <li v-for="reference in mechanicReferences" :key="reference">
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
  name: 'MechanicProfile',
  components: {
    Card,
    Button,
    Tag
  },
  data() {
    return {
      mechanicName: 'Santiago Peres de Cuellar',
      perfilImage: "https://i.ibb.co/n0x34pJ/mechanic.jpg",
      mechanicSpecialty: 'Mecánico de vehiculo menores',
      mechanicReferences: [
        'Correo: mecatronic@gmail.com',
        'Numero de telefono: 923143245'
      ]
    };
  }
};
</script>
