<template>
  <div>
    <DataTable :value="services" responsiveLayout="scroll">
      <Column field="serviceId" header="ID de Servicio"></Column>
      <Column field="vehicleType" header="Tipo de Vehículo"></Column>
      <Column field="duration" header="Tiempo de Uso (horas)"></Column>
      <Column field="distance" header="Distancia Recorrida (km)"></Column>
    </DataTable>
    <div class="flex justify-content-end mt-4">
      <Button label="Ver Completo" icon="pi pi-angle-double-right" @click="viewCompleteHistory" />
    </div>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
  components: {
    DataTable,
    Column,
    Button
  },
  data() {
    return {
      services: [
        { serviceId: 's1', vehicleType: 'Camión', duration: 3, distance: 50 },
        { serviceId: 's2', vehicleType: 'Sedán', duration: 1.5, distance: 30 },
        { serviceId: 's3', vehicleType: 'SUV', duration: 2, distance: 40 },
        { serviceId: 's4', vehicleType: 'Moto', duration: 0.5, distance: 10 },
        { serviceId: 's5', vehicleType: 'Camioneta', duration: 2.5, distance: 35 },
        { serviceId: 's6', vehicleType: 'Bus', duration: 4, distance: 60 },
        { serviceId: 's7', vehicleType: 'Bicicleta', duration: 1, distance: 20 },
        { serviceId: 's8', vehicleType: 'Furgoneta', duration: 3.5, distance: 45 },
        { serviceId: 's9', vehicleType: 'Convertible', duration: 2.2, distance: 32 },
        { serviceId: 's10', vehicleType: 'Camión', duration: 3.1, distance: 55 }
        // Añadir más servicios si es necesario
      ]
    };
  },
  methods: {
    viewCompleteHistory() {
      // Lógica para ver el historial completo, podría redirigir a otra página o cargar más datos
      alert('Mostrar historial completo');
    }
  }
};
</script>

<style scoped>
.mt-4 {
  margin-top: 1rem;
}
</style>