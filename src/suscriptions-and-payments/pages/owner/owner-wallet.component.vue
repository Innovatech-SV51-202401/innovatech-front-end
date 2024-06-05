<script>
export default {
  name: "wallet-owner",
  title: "Wallet-Owner",
  data(){
    return {
      commission: [
        {date: '2024-05-30', amount: 'S/. ' + 10, vehicle: 'Bike', hour: '16:50'},
        {date: '2024-04-25', amount: 'S/. ' + 5, vehicle: 'Scooter', hour: '16:45'},
        {date: '2024-04-13', amount: 'S/. ' + 10, vehicle: 'Bike', hour: '16:52'},
        {date: '2024-03-29', amount: 'S/. ' + 5, vehicle: 'Scooter', hour: '16:56'},
        {date: '2024-03-01', amount: 'S/. ' + 10, vehicle: 'Bike', hour: '16:54'},
        {date: '2024-02-15', amount: 'S/. ' + 5, vehicle: 'Scooter', hour: '16:50'},
        {date: '2024-02-12', amount: 'S/. ' + 10, vehicle: 'Bike', hour: '17:01'},
        {date: '2024-01-17', amount: 'S/. ' + 5, vehicle: 'Scooter', hour: '16:55'},
        {date: '2024-01-09', amount: 'S/. ' + 13.5, vehicle: 'Bike', hour: '16:47'}
      ]
    }
  }
}
</script>

<template>
  <div class="w-full align-content-center">
    <h1>Wallet Owner</h1>
    <pv-data-table :value="commission" responsive-layout="scroll">
      <pv-column field="date" header="Date"/>
      <pv-column field="hour" header="Hour"/>
      <pv-column field="vehicle" header="Vehicle"/>
      <pv-column field="amount" header="Amount"/>
    </pv-data-table>
  </div>
</template>

<style scoped>

</style>