<template>
  <div class="reservation-page">
    <div class="filter-and-list-section">
      <div class="filter-section">
        <VehicleFilterComponent @filter-vehicles="handleFilter" @clear-filter="clearFilter" />
      </div>
      <div class="services-section">
        <VehicleListComponent :vehicles="filteredVehicles" @reserve-vehicle="showReserveComponent" />
      </div>
    </div>
    <div class="reserve-and-reserved-section">
      <div v-if="showReserve" class="reserve-section">
        <ReserveServiceComponent :vehicle="selectedVehicle" @confirm-reservation="confirmReservation" />
      </div>
      <div class="reserved-vehicles-section">
        <h2>Vehículos Reservados</h2>
        <div class="reserved-vehicles-grid">
          <ReservedVehicleCard
              v-for="vehicle in reservedVehicles"
              :key="vehicle.id"
              :vehicle="vehicle"
              :reservationDate="vehicle.reservationDate"
              :reservationTime="vehicle.reservationTime"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ReservedVehicleCard from "../../components/client/reserved-vehicle-card.component.vue"
import ReserveServiceComponent from "../../components/client/reserve-service.component.vue";
import VehicleFilterComponent from "../../components/client/vehicle-filter.component.vue";
import VehicleListComponent from "../../components/client/vehicle-list.component.vue";
import ActiveServiceCardComponent from "../../components/client/active-service-card.component.vue";
export default {
  components: {
    ReservedVehicleCard,
    ReserveServiceComponent,
    VehicleFilterComponent,
    VehicleListComponent,
    ActiveServiceCardComponent
  },
  data() {
    return {
      vehicles: [
        { id: 1, name: 'BICICLETA - AVANT H40-D', image: "/src/assets/rural-bicycle.jpg", type: 'rural-bicycle', distance: 100, duration: 10 , pickup: 'Centro'},
        { id: 2, name: 'BICICLETA – ZEGA GRAVEL', image: "/src/assets/rural-bicycle-2.jpg", type: 'rural-bicycle', distance: 80, duration: 8, pickup: 'Centro' },
        { id: 3, name: 'BICICLETA PLEGABLE TERN LINK A7', image: "/src/assets/urban-bike.jpg", type: 'urban-bike', distance: 120, duration: 12, pickup: 'Centro' },
        { id: 4, name: 'BICICLETA DE PASEO GW FRIDAY AZUL', image: "/src/assets/urban-bike-2.jpg", type: 'urban-bike', distance: 50, duration: 5, pickup: 'Centro' },
        { id: 5, name: 'BICICLETA KTM ULTRA RIDE 29 SHIMANO', image: "/src/assets/mountain-bike.jpg", type: 'mountain-bike', distance: 140, duration: 35, pickup: 'Este' },
        { id: 6, name: 'BICICLETA KTM MONT CHICAGO 292 SHIMANO', image: "/src/assets/mountain-bike-2.jpg", type: 'mountain-bike', distance: 210, duration: 55, pickup: 'Centro' },
      ],
      filteredVehicles: [],
      reservedVehicles: [],
      showReserve: false,
      selectedVehicle: null
    };
  },
  methods: {
    handleFilter(filterCriteria) {
      this.filteredVehicles = this.vehicles.filter(vehicle => {
        return (
            (!filterCriteria.selectedVehicle || vehicle.type === filterCriteria.selectedVehicle.code) &&
            (!filterCriteria.pickup || vehicle.pickup.includes(filterCriteria.pickup))
        );
      });
    },
    showReserveComponent(vehicle) {
      this.selectedVehicle = vehicle;
      this.showReserve = true;
    },
    confirmReservation({ vehicle, date, time }) {
      this.reservedVehicles.push({ ...vehicle, reservationDate: new Date(date), reservationTime: time });
      this.filteredVehicles = this.filteredVehicles.filter(v => v.id !== vehicle.id);
      this.showReserve = false;
    },
    clearFilter() {
      this.filteredVehicles = this.vehicles;
    }
  },
  mounted() {
    this.filteredVehicles = this.vehicles;
  }
};
</script>

<style scoped>
.reservation-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.filter-and-list-section {
  display: flex;
  gap: 2rem;
}

.filter-section, .services-section {
  flex: 1;
}

.reserve-and-reserved-section {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.reserve-section {
  flex: 1;
}

.reserved-vehicles-section {
  flex: 2;
  margin-top: 2rem;
}

.reserved-vehicles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>