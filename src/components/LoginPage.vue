<template>
  <div class="wrapper">
  <div class="container">
    <div class="section-left">
    <div>
      <div>
        <div class="login__image">
        <img src="./../assets/image 555.png" alt="" />
      </div>
    </div>
      <div class="login__title">
        <h1>Авторизация</h1>
      </div>
      <div>
        <input class="login__input" type="text" />
      </div>
      <div>
        <input class="password__input" type="text" />
      </div>
      <div class="button__login">
        <router-link to="/list-form">
          <button class="button__green">Вход</button>
        </router-link>
      </div>
    </div>
  </div>
    <div class="section-right">
      <div class="">
      <img class="icon1" src="./../assets/image 407.png" alt="" />
      <img class="icon2" src="./../assets/image 408.png" alt="" />
      <img class="icon3" src="./../assets/image 410.png" alt=""/>
      <img class="icon4" src="./../assets/image 411.png" alt=""/>
      <img class="icon5" src="./../assets/image 406.png" alt="">
      <img class="icon6" src="./../assets/image 409.png" alt="">
    </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  components: {
    
  },
  methods: {
 
  }
};
</script>

<style scoped>
.wrapper{
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
}
.section-left {
  display: flex;
  min-width: 624px;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  border-radius: 10px;
}
.login__image {
  margin-right: 200px;
}
.login__title {
  margin-right: 100px;
  font-weight: 700;
  font-size: larger;
}
.section-right {
  float: right;
  background-color: #3EA748;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}
.login__input {
  width: 350px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 14px;
  background-color: whitesmoke;
  border: none;
  outline-width: 0;
}
.password__input {
  width: 350px;
  height: 70px;
  background-color: whitesmoke;
  border-radius: 14px;
  border: none;
  margin-bottom: 40px;
  outline-width: 0;
}

.button__green {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #3EA748;
  color: white;

 
}
.button__green:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: #3EA748;
  transition: 1.4s;
}
.section-right {
  position: relative;
}
.icon1 {
  position: absolute;
  bottom: 634px;
  left: 48px;
}
.icon2 {
  position: absolute;
  top: -285px;
  left:526px;

}
.icon3 {
  position: absolute;
  top: 280px;
  right: 600px;
  width: 455px;
  height: 432px;
}
.icon4 {

  position: absolute;
  top: 100px;
  right: 180px;
}
.icon5 {
  position: absolute;;
  bottom: -24px;
  right: 1030px;
}
.icon6 {
  position: absolute;
  bottom: -18px;
  left: 650px;
}
</style>
