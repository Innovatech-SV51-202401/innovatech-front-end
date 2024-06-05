<template>
  <div>
    <h1>Lista de Vehículos</h1>
    <div class="vehicles-list-container">
      <div class="vehicles-list">
        <pv-card v-for="vehicle in paginatedVehicles" :key="vehicle.id" class="vehicle-card p-3">
          <template #content>
            <div class="card-content">
              <img :src="vehicle.image || 'placeholder.png'" :alt="vehicle.name" class="vehicle-image" />
              <div class="vehicle-info">
                <h2>{{ vehicle.name }}</h2>
                <h3>{{ vehicle.type }}</h3>
                <p>Distancia: {{ vehicle.distance }} km</p>
                <p>Duración: {{ vehicle.duration }} min</p>
                <p>Recogida: {{ vehicle.pickup }}</p>
                <pv-button label="Reservar" @click="reserve(vehicle)" class="reserve-button p-mt-auto"></pv-button>
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
    <pv-paginator :first="first" :rows="rows" :totalRecords="vehicles.length" @page="onPageChange"></pv-paginator>
  </div>
</template>

<script>

export default {
  name: 'VehicleListComponent',
  components: {
  },
  props: {
    vehicles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      first: 0,
      rows: 3
    };
  },
  computed: {
    paginatedVehicles() {
      return this.vehicles.slice(this.first, this.first + this.rows);
    }
  },
  methods: {
    reserve(vehicle) {
      this.$emit('reserve-vehicle', vehicle);
    },
    onPageChange(event) {
      this.first = event.first;
      this.rows = event.rows;
    }
  }
};
</script>

<style scoped>
.vehicles-list-container {
  max-height: 400px; /
  overflow-y: auto;
  margin-bottom: 16px;
}

.vehicles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.vehicle-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
}

.vehicle-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 16px;
}

.vehicle-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.reserve-button {
  align-self: flex-end;
  margin-top: auto;
}
</style>
