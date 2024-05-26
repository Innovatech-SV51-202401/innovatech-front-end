<script>
//import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
//import navbar from "./registration-management/components/navbar.component.vue";

export default {
  name:'App',
  title: 'GlideGo',
  //components:{
   // vehicleListComponent,
  //  navbar
 // },
  data(){
    return{
      drawer: false,
      vehicles:[],
      items: [
        {label: 'Home', to: '/home-owner'},
        {label: 'Reservation', to: '/reservation-owner'},
        {label: 'Maintenance', to: '/maintenance-owner'},
        {label: 'Wallet', to: '/wallet-owner'},
        {label: 'Profile'}
      ],
    }
  },
}
</script>

<template>

<navbar class="navbar" />
  <pv-toast/>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <h3>GlideGo</h3>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{item.label}}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"/>
  <main>
    <router-view/>
  </main>
</template>