<script>

export default {
  name: "navbar",
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
        },
        {
          label:'About Us',
          icon:'pi pi-fw pi-info-circle',

        },
        {
          label:'Services',
          icon:'pi pi-fw pi-car',

        },
        {
          label:'Plans',
          icon:'pi pi-fw pi-dollar',

        },
        {
          label:'Contact us',
          icon:'pi pi-fw pi-phone',

        },
        {
          label: 'Login',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Inicio de sesion',
              icon: 'pi pi-fw pi-user-edit',
            },
            {
              label: 'Crea una cuenta',
              icon: 'pi pi-fw pi-user-plus',
            }
          ]
        },
      ]
    }
  }
}

</script>

<template>
  <Menubar :model="items">
    <template #item="{ item, props }">
      <a v-ripple v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>

<style scoped>

</style>