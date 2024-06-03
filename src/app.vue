<script>
import { defineComponent } from "vue";
import app from "./public/pages/mechanic/mechanic-view.component.vue";
export default defineComponent({
  components: { app }
})


</script>
<template>
  <app></app>
  <main>
    <router-view/>
  </main>
</template>

