<template>
  <Card class="active-service-card">
    <template #title>
      SERVICIO ACTIVO
    </template>
    <template #content>
      <div class="grid grid-nogutter">
        <div class="col-12">
          <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3">
            <div class="md:w-10rem relative">
              <img :src="vehicleImage" alt="Imagen del vehículo" class="block xl:block mx-auto border-round w-full" />
            </div>
            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
              <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                <div>
                  <span class="font-medium text-secondary text-sm">Lugar de recogida:</span>
                  <div class="text-lg font-medium text-900 mt-2">
                    123.456, 123.456
                  </div>
                </div>
              </div>
              <div class="flex flex-column md:align-items-end gap-5">
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-900 font-medium text-sm">2.5</span>
                    <i class="pi pi-clock text-blue-500"></i>
                  </div>
                </div>
                <span class="text-xl font-semibold text-900">15.8 km</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <Button icon="pi pi-times" outlined severity="danger" label="Cancelar"></Button>
                  <Button icon="pi pi-info-circle" label="Ver detalle"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
import Button from "primevue/button";
import Tag from "primevue/tag";

export default {
  name: 'MechanicHome',
  components: {
    Card,
    Button,
    Tag
  },
  data() {
    return {
      vehicleImage: 'ruta/a/tu/imagen.jpg' // Reemplaza con la ruta correcta
    };
  }
};
</script>
