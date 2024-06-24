<script>
import AuthenticationSection from "../../../iam/components/authentication-section.component.vue";


export default {
  name: 'client-view',
  components: {AuthenticationSection},
  data(){
    return{
      drawer: false,
      items:[
        {label: 'Home', to: '/client/home'},
        {label: 'History', to: '/client/history'},
        {label: 'Service', to : '/client/service'},
        {label: 'Plans', to : '/client/plans'},
        {label: 'Profile', to: '/client/profile'},
        {label: 'Sign out', to: '/sign'},

      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },

}
</script>

<template>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <img src="https://i.ibb.co/rFt5BnP/file.png" alt="file" height="60px" width="auto">
        <p class="text-lg w-10">GlideGo</p>
      </template>
      <template >
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{item.label}}</pv-button>
          </router-link>
        </div>
      </template>
      <template #end>
        <authentication-section/>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"/>
</template>