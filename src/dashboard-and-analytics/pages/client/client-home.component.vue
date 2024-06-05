<script>
import ActiveServiceCardComponent from "../../../service-execution-and-monitor/components/client/active-service-card.component.vue"
import ServiceHistoryComponent from "../../../profile-management/component/client/client-service-history.component.vue"
export default {
  name: 'HomeClient',
  components: {
    ActiveServiceCardComponent,
    ServiceHistoryComponent
  }
};
</script>
<template>
  <div class="grid nested-grid">
    <div class="col-12 md:col-6">
      <ServiceHistoryComponent/>
    </div>
    <div class="col-12 md:col-6">
      <div class="grid">
        <div class="col-12">
          <ActiveServiceCardComponent/>
        </div>
        <div class="col-12">
          <ActiveServiceCardComponent/>
        </div>
        <div class="col-12">
          <ActiveServiceCardComponent/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos si son necesarios */
</style>