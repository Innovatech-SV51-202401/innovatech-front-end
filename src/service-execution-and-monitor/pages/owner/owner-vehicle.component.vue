<script>
export default {
  name: "owner-vehicle",
  title: "Owner-Vehicle",
  data(){
    return {
      vehicles: [
        {id: 1, type: 'Bike'},
        {id: 2, type: 'Scooter'},
        {id: 3, type: 'Bike'},
        {id: 4, type: 'Bike'}
      ]
    }
  }
}
</script>

<template>
  <div class="w-full align-content-center">
    <h1>Vehicles Owner</h1>
    <pv-data-table :value="vehicles" responsive-layout="scroll">
      <pv-column field="id" header="Id"/>
      <pv-column field="type" header="Type"/>
    </pv-data-table>
  </div>
</template>

<style scoped>

</style>