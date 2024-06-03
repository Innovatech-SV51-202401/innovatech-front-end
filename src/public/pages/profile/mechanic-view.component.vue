<script>
export default {
  name: 'app',
  data(){
    return{
      drawer: false,
      items:[
        {label: 'Home', to: '/home'},
        {label: 'History', to: '/history'},
        {label: 'Wallet', to : '/wallet'},
        {label: 'Profile', to: '/profile'},
        {label: 'Close Sesion', to: 'sign'}
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <img src="https://i.ibb.co/rFt5BnP/file.png" alt="file" height="60px" width="auto">
        <p class="text-lg w-10">GlideGo</p>
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
</template>

