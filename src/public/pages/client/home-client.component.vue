<script>
import ActiveServiceCardComponent from "../../glidego/components/client/active-service-card.component.vue";
import ServiceHistoryComponent from "../../glidego/components/client/service-history.component.vue";
export default {
  name: 'clientView',
  data(){
    return{
      drawer: false,
      items:[
        {label: 'Home', to: '/home'},
        {label: 'History', to: '/history'},
        {label: 'Wallet', to : '/wallet'},
        {label: 'Profile', to: '/profile'},
        {label: 'Sign out', to: 'sign'}
      ]
    }
  },
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
