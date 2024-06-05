<script>
import { defineComponent } from "vue";
import ownerViewComponent from "./public/pages/profile/owner-view.component.vue";
import mechanicViewComponent from "./public/pages/profile/mechanic-view.component.vue";
import MechanicView from "./public/pages/profile/mechanic-view.component.vue";
export default defineComponent({
  components: {MechanicView, ownerViewComponent },
  data() {
    return {
      isMechanic: false, // Cambia este valor para mostrar el componente que desees
    };
  },
})
</script>
<template>
  <mechanic-view v-if="isMechanic"/>
  <owner-view-component v-else/>

  <main>
    <router-view/>
  </main>
</template>