<script>
import { defineComponent } from "vue";
import ownerViewComponent from "./public/pages/profile/owner-view.component.vue";
import mechanicViewComponent from "./public/pages/profile/mechanic-view.component.vue";
import MechanicView from "./public/pages/profile/mechanic-view.component.vue";
export default defineComponent({
  components: {MechanicView, ownerViewComponent }
})

</script>
<template>
  <!-- <owner-view-component></owner-view-component> -->
  <mechanic-view/>
  <main>
    <router-view/>
  </main>
</template>

