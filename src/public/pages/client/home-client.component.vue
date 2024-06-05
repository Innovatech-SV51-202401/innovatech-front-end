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

<script>
import ActiveServiceCardComponent from "../../glidego/components/client/active-service-card.component.vue";
import ServiceHistoryComponent from "../../glidego/components/client/service-history.component.vue";
export default {
  components: {
    ActiveServiceCardComponent,
    ServiceHistoryComponent
  }
};
</script>

<style scoped>
/* Estilos si son necesarios */
</style>
