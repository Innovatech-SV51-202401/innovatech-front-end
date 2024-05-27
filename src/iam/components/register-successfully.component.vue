<script>
export default {
  name: "register-successfully",
  created() {
    document.body.style.backgroundColor = '#FFFFFF';

  },
  methods:{
    goToLogin(){
      this.$router.push(`/login`)
    },
    cleanCss() {
      document.body.style.backgroundColor = '';
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
      <h1>¡SUCCESSFUL <br> REGISTRATION!</h1>
      <p>Successfully registered account</p>
      <div class="buttons">
        <button class="btn" @click="goToLogin(); cleanCss()">  Accept </button>
      </div>
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
  color: black;
}

/*logo*/
.img-logo {
  width: 20px;
  margin: 0 auto;
  height: 130px;
}

/* Botones */
.buttons {
  margin-top: 40px;
}

.btn {
  background-color: green;
  border: none;
  color: white;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 45%;
  font-size: 16px;
  margin: auto auto 40px auto;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Open Sans', sans-serif;

}

.btn:hover {
  background-color: greenyellow;
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