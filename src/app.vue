<script>
import { defineComponent } from "vue";
import OwnerViewComponent from "./public/pages/profile/owner-view.component.vue";
import MechanicView from "./public/pages/profile/mechanic-view.component.vue";
import ClientView from "./public/pages/profile/client-view.component.vue";
export default defineComponent({
  components: {ClientView, MechanicView, OwnerViewComponent },
  data() {
    return {
      userType: 'mechanic', // Cambia este valor para mostrar el componente que desees
    };
  },
  methods: {
    setMechanic() {
      this.userType = 'mechanic';
    },
    setOwner() {
      this.userType = 'owner';
    },
    setClient() {
      this.userType = 'client';
    }
  }
})
</script>
<template>

  <button @click="setMechanic">Mechanic</button>
  <button @click="setOwner">Owner</button>
  <button @click="setClient">Client</button>

  <mechanic-view v-if="userType === 'mechanic'"/>
  <owner-view-component v-else-if="userType === 'owner'"/>
  <client-view v-else/>

  <main>
    <router-view/>
  </main>
</template>