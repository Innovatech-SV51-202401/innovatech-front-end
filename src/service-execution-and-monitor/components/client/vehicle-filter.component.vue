<template>
  <pv-card class="p-4">
    <template #title>
      Filtrar Servicios
    </template>
    <template #content>
      <div class="p-field">
        <label for="vehicle">Tipo de Vehículo</label>
        <pv-dropdown id="vehicle" v-model="selectedVehicle" :options="vehicleTypes" optionLabel="name" placeholder="Selecciona un vehículo" class="w-full"></pv-dropdown>
      </div>
      <div class="flex gap-3 mt-1">
        <pv-button label="Filtrar" icon="pi pi-filter" @click="filterServices"  class="w-full" />
        <pv-button label="Remover Filtros" icon="pi pi-times" @click="clearFilters" outlined class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<script>


export default {
  name: 'VehicleFilterComponent',
  data() {
    return {
      selectedVehicle: null,
      vehicleTypes: [
        { name: 'Bicicleta Rural', code: 'rural-bicycle' },
        { name: 'Bicicleta urbana', code: 'urban-bike' },
        { name: 'Bicicleta montañera', code: 'mountain-bike' },
      ]
    };
  },
  methods: {
    filterServices() {
      this.$emit('filter-vehicles', {
        selectedVehicle: this.selectedVehicle
      });
    },
    clearFilters() {
      this.selectedVehicle = null;
      this.$emit('clear-filters');
    }
  }
};
</script>

<style scoped>

</style>
