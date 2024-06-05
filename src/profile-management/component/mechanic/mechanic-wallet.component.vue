<template>
  <div>
    <center><h2>Pagos de servicio</h2></center>
    <DataTable :value="payments" responsiveLayout="scroll">
      <Column field="date" header="Fecha"></Column>
      <Column field="amount" header="Monto"></Column>
      <Column field="service" header="Servicio"></Column>
      <Column field="vehicle" header="Vehículo"></Column>
      <Column headerStyle="width:4rem">
        <template #body="slotProps">
          <Button icon="pi pi-download" @click="downloadReceipt(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import jsPDF from 'jspdf';

export default {
  components: {
    DataTable,
    Column,
    Button
  },
  data() {
    return {
      payments: [
        { date: '2024-05-01', amount: 150.00, service: 'Arreglo de rueda de bici', vehicle: 'Bicicleta' },
        { date: '2024-04-15', amount: 80.00, service: 'Cambio de aceite de la moto', vehicle: 'Moto electric' },
        { date: '2024-03-20', amount: 200.00, service: 'Mantenimiento general de scooter', vehicle: 'Scooter' }
      ]
    };
  },
  methods: {
    downloadReceipt(payment) {
      const doc = new jsPDF();
      doc.text(`Boleta de pago         N° 001`, 70, 30);
      doc.text(`Fecha de servicio: ${payment.date}`, 20, 50);
      doc.text(`Monto:     S/${payment.amount.toFixed(2)} soles`, 20, 60);
      doc.text(`Servicio:     ${payment.service}`, 20, 70);
      doc.text(`Vehículo:     ${payment.vehicle}`, 20, 80);

      // Guardar el PDF con un nombre único
      const fileName = `recibo_mechanic${payment.date}.pdf`;
      doc.save(fileName);

      console.log('Descargando recibo:', payment);
    }
  }
};
</script>