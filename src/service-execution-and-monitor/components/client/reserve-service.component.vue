<template>
  <Card class="p-4">
    <template #title>
      Reservar {{ vehicle.name }}
    </template>
    <template #content>
      <div class="p-field">
        <label for="date">Fecha</label>
        <Calendar id="date" v-model="selectedDate" :disabledDates="disabledDates" :minDate="today" class="w-full"></Calendar>
      </div>
      <div class="p-field" v-if="selectedDate">
        <label for="time">Hora</label>
        <Dropdown id="time" v-model="selectedTime" :options="availableTimes" placeholder="Selecciona una hora" class="w-full"></Dropdown>
      </div>
      <Button label="Confirmar Reserva" icon="pi pi-check" @click="confirmReservation" class="mt-4 w-full" :disabled="!selectedTime" />
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

export default {
  name: 'ReserveServiceComponent',
  components: {
    Card,
    Calendar,
    Dropdown,
    Button
  },
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      today: new Date(),
      availableTimes: []
    };
  },
  watch: {
    selectedDate(newDate) {
      if (newDate) {
        this.updateAvailableTimes(newDate);
      }
    }
  },
  methods: {
    updateAvailableTimes(date) {
      const hours = [...Array(12).keys()].map(i => i + 7); // Horas de 7 a 19
      const currentHour = new Date().getHours();
      const currentDate = new Date().toLocaleDateString();
      const selectedDate = date.toLocaleDateString();

      this.availableTimes = hours
          .filter(hour => selectedDate !== currentDate || hour > currentHour)
          .map(hour => ({
            label: `${hour}:00 - ${hour + 1}:00`,
            value: `${hour}:00 - ${hour + 1}:00`
          }));
    },
    confirmReservation() {
      this.$emit('confirm-reservation', {
        vehicle: this.vehicle,
        date: this.selectedDate,
        time: this.selectedTime
      });
    }
  }
};
</script>

<style scoped>
.p-field {
  margin-bottom: 1rem;
}
</style>
