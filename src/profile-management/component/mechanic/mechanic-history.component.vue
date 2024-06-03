<template>
  <div>
    <DataTable :value="services" responsiveLayout="scroll">
      <Column field="serviceId" header="ID de Servicio"></Column>
      <Column field="vehicleType" header="Tipo de Vehículo"></Column>
      <Column field="state" header="Estado"></Column>
      <Column field="Fecha" header="Fecha"></Column>
      <Column field="Boleta" header="Boleta"></Column>
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
        { serviceId: 'ID001', vehicleType: 'Bicicleta',       state: 'Entregado',       Fecha: '12/05/2024', Boleta: '' },
        { serviceId: 'ID002', vehicleType: 'Scooter',         state: 'Entregado',       Fecha: '12/05/2024', Boleta: '' },
        { serviceId: 'ID003', vehicleType: 'Moto Electrico',  state: 'Entregado',       Fecha: '12/05/2024', Boleta: '' },
        { serviceId: 'ID004', vehicleType: 'Bicicleta',       state: 'Entregado',       Fecha: '12/05/2024', Boleta: '' },
        { serviceId: 'ID005', vehicleType: 'Scooter',         state: 'En manteniento',  Fecha: '---'       , Boleta: '' }
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
