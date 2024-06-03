<template>
  <div class="grid nested-grid">
    <div class="col-12 md:col-6">
      <div class="grid">
        <div class="col-12">
          <ActiveHomeCard/>
        </div>
        <div class="col-12">
          <ActiveHomeCard/>
        </div>
        <div class="col-12">
          <ActiveHomeCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveHomeCard from "../profile-management/component/mechanic/mechanic-home.component.vue";

export default {
  components: {
    ActiveHomeCard
  }
};
</script>

