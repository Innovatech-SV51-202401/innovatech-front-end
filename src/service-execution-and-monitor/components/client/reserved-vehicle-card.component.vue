<template>
  <pv-card class="p-3 reserved-vehicle-card">
    <template #title>{{ vehicle.name }}</template>
    <template #subtitle>Detalles de la Reserva</template>
    <template #content>
      <p>Fecha: {{ formattedDate }}</p>
      <p>Hora: {{ formattedTime }}</p>
    </template>
  </pv-card>
</template>

<script>


export default {
  name: 'ReservedVehicleCard',
  components: {

  },
  props: {
    vehicle: {
      type: Object,
      required: true
    },
    reservationDate: {
      type: Date,
      required: true
    },
    reservationTime: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return this.reservationDate.toDateString();
    },
    formattedTime() {
      return this.reservationTime.label;
    }
  }
};
</script>

<style scoped>
.reserved-vehicle-card {
  margin-bottom: 16px;
}
</style>