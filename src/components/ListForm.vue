<template>
  <div class="wrapper">
    <div class="container">
      <div class="section-left">
        <div class="form">
          <div class="form__logo">
            <img src="./../assets/image 555.png" alt="" />
          </div>
          <div class="form__info">
            <ul class="form__item">
              <li class="form__list active">Формы</li>
              <li class="form__list">Пользователи</li>
            </ul>
          </div>
          <div>
            <router-link to="/">
              <button class="button__form">Выход</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="section-right">
        <div class="main">
          <div class="form__register">
            <div class="form__title">
              <h1 class="form__title-heading">Формы</h1>
              <router-link to="/register-field">
                <button class="button__green">Создать Форму</button>
              </router-link>
            </div>
            <div>
              <register-field @formSaved="addForm">
                <ul class="form__users">
                  <li
                    class="form__user"
                    v-for="(form, index) in forms"
                    :key="index"
                  >
                    <div class="form__user-block">
                      <h3 class="form__user-title">{{ form.title }}</h3>
                      <span class="form__user-author"
                        >{{ form.author }} {{ form.surname }}</span
                      >
                      <span class="form__user-date">{{
                        form.creationDate
                      }}</span>
                    </div>
                    <div class="form__button__users">
                      <button class="button__edit">Редактировать</button>
                      <button class="button__remove" @click="removeForm(index)">
                        Удалить
                      </button>
                    </div>
                  </li>
                </ul>
              </register-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListForm",
  data() {
    return {
      forms: [
        {
          title: "Форма регистрации участников",
          author: "Автор :",
          creationDate: "Дата создания :",
        },
      ],
    };
  },
  methods: {
    removeForm(index) {
      this.forms.splice(index, 1);
    },
    addForm(formData) {
      this.forms.push(formData);
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.container {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
}
.section-left {
  width: 400px;
}
.form {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  border-radius: 10px;
}
.form__info {
  width: 30%;
  height: 500px;
}

.form__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.form__list {
  margin-bottom: 20px;
}
.form__list.active {
  color: #3ea748;
}
.button__form {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #3ea748;
  color: #3ea748;
  margin-left: 42px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
}
.button__form:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: white;
  transition: 1.4s;
}
.form__logo {
  margin-left: 40px;
  margin-bottom: 30px;
}
.section-right {
  width: 69%;
  height: 100vh;
  overflow: hidden;
  background-color: whitesmoke;
}
.form__title {
  display: flex;
  justify-content: space-between;
  width: 825px;
}
.form__title-heading {
  margin-left: 50px;
}
.button__green {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #3ea748;
  color: white;
  margin-top: 20px;
}
.button__green:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: #3ea748;
  transition: 1.4s;
}
.main {
  margin-top: 70px;
}
.form__register {
  margin-right: 80px;
}
.form__users {
  width: 825px;
}
.form__user {
  display: flex;
  justify-content: space-between;
  height: 190px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
}
.form__user-title {
  width: 300px;
  padding-left: 20px;
  padding-bottom: 8px;
  margin-top: 4px;
}
.form__user-author {
  width: 179px;
  height: 17px;
  opacity: 0.5px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 66px;
}
.form__user-date {
  width: 179px;
  height: 17px;
  top: 149px;
  left: 24px;
  opacity: 0.5px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}
.form__user-block {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form__button__users {
  display: flex;
  flex-direction: column;
}
.button__edit {
  width: 180px;
  height: 44px;
  border: none;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #3ea748;
  background-color: white;
  color: #3ea748;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
}
.button__remove {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #3ea748;
  background-color: white;
  margin-right: 40px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
}
</style>
