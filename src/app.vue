<script>
import { defineComponent } from "vue";
import App from "./public/pages/mechanic/mechanic-view.component.vue";
export default defineComponent({
  components: { App }
})


</script>
<template>
  <app></app>
  <main>
    <router-view/>
  </main>
</template>

