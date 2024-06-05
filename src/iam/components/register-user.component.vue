<script>
export default {
  name: "register-user",
  data() {
    return {
      type: "",

    }
  },
  created() {
    document.body.style.backgroundColor = '#FFFFFF';
  },
  methods:{
    cleanCss() {
      document.body.style.backgroundColor = '';
    },
    typeSelection(type){
      this.type = type;
      console.log(this.type)
    },
    goToRegisterUserInformation(){
      this.$router.push(`register/${this.type}`)
    }
  }
}
</script>

<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
      <div class="fadeIn first">
        <img class="img-logo" src="../../assets/Logo.png" id="icon" alt="User Icon"/>
      </div>
      <h3>Register as</h3>
      <!-- Botones -->
      <div class="buttons">
        <button class="btn" @click="typeSelection('owner');goToRegisterUserInformation()"> &nbsp <i class="pi pi-user"/> &nbsp Owner </button>
        <button class="btn" @click="typeSelection('user');goToRegisterUserInformation()"> &nbsp <i class="pi pi-user"/> &nbsp User </button>
        <button class="btn" @click="typeSelection('mechanic');goToRegisterUserInformation()"> &nbsp <i class="pi pi-user"/> &nbsp Mechanic </button>
      </div>
      <!-- Go to Log in
      <div>
        <p> <i class="pi pi-minus"/> <router-link to="/login"  @click.native="cleanCss"> Log in</router-link> <i class="pi pi-minus"/> </p>
      </div> -->
    </div>
  </div>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

/* General */
p {
  font-family: 'Open Sans', sans-serif;
}

h1 {
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}

/*logo*/
.img-logo {
  width: 20px;
  margin: 0 auto;
  height: 130px;
}

/* Formulario */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

#formContent {
  border-radius: 10px;
  background: #FFFFFF;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  border: 2px solid forestgreen;
  text-align: center;
}

/* Botones */
.buttons {
  margin-top: 0;
}

.btn {
  background-color: #7E9EEE;
  border: none;
  color: #000;
  padding: 8px 0;
  padding-left: 50px;
  text-align: left;
  text-decoration: none;
  display: block;
  width: calc(60% - 10px);
  font-size: 16px;
  margin: auto auto 20px auto;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}

.btn:hover {
  background-color: #9EEE7E;
  color: #fff;
  font-weight: 700;
}

/* Animaciones */
.fadeInDown {
  animation: fadeInDown 1s both;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Otros */
*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

</style>