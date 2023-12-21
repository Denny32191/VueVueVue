<template>
  <div class="wrapper">
  <div class="container">
    <div class="section-left">
      <div class="form">
        <div class="form__logo">
          <img src="./../assets/image 555.png" alt="" />
        </div>
        <div>
          <button class="button__back">
            <img src="./../assets/arrow-left.png" alt="" />
            <span>назад</span>
          </button>
        </div>
        <div class="form__info">
          <ul class="form__item">
            <li class="form__list">Типы Формы</li>
            <li class="form__list">Сущности</li>
            <li class="form__list active">Поля</li>
            <li class="form__list">Правила показа полей</li>
            <li class="form__list">Другие настройки</li>
          </ul>
        </div>
        <div class="buttons">
          <router-link to="/list-form">
            <button class="button__form-script">Скрипт</button>
            <button class="button__form-save" @click="saveForm">Сохранить</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section-center">
      <div class="field__content">
        <div class="field__info">
          <div>
            <h1 class="field__title">Поля</h1>
          </div>
          <div>
            <h3>Скрытые поля</h3>
          </div>
        </div>
        <div class="field__add">
          <p class="field__add-text">Добавить поле</p>
          <button class="button__add" @click="addField">
            <img src="./../assets/plus.png" alt="" />
          </button>
        </div>
        <div v-for="(field, index) in fields" :key="index">
          <div>
            <p>Поля</p>
            <div class="field__about" v-if="index === 0">
              <div class="field__initials">
                <p>Имя</p>
                <p>Контакт</p>
              </div>
              <div>
                <button class="button__remove" @click="removeField(index)">
                  Удалить поле
                </button>
              </div>
            </div>
            <div class="field__about" v-if="index === 1">
              <div class="field__initials">
                <p>Фамилия</p>
                <p>Контакт</p>
              </div>
              <div>
                <button class="button__remove" @click="removeField(index)">
                  Удалить поле
                </button>
              </div>
            </div>
            <div>
              <input
                type="text"
                class="input__surname"
                v-model="field.surname"
              />
            </div>
            <div class="input__add">
              <input
                type="checkbox"
                class="input_check"
                v-model="field.required"
              />
              <span class="checkbox__text">Сделать поле обязательным</span>
            </div>
          </div>
        </div>
        <div class="field__add">
          <p class="field__add-text">Добавить поле</p>
          <button class="button__add" @click="addField">
            <img src="./../assets/plus.png" alt="" />
          </button>
        </div>
        <div class="field__add">
          <p class="field__add-text">Добавить страницу формы</p>
          <button class="button__add" @click="addPage">
            <img src="./../assets/plus.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="section-right">
      <div class="form__users">
        <div>
          <h3>Форма регистрации участников</h3>
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            class="form__users-registration"
            placeholder="Имя"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Фамилия"
            class="form__users-registration"
          />
        </div>
        <div class="form__consent">
          <input type="checkbox" class="form__user-checkbox" />
          <p class="form__consent-text">
            Нажимая кнопку «Отправить», я принимаю условия политики
            конфиденциальности
          </p>
        </div>
        <div>
          <button class="form__consent-button">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
  data() {
    return {
      fields: [],
      
    };
  },
  methods: {
    addField() {
      this.fields.push(
        {
          surname: "",
          contact: "",
          required: false,
        },
        {
          surname: "",
          contact: "",
          require: false,
        }
      );
    },
    removeField(index) {
      this.fields.splice(index, 1);
    },
    isFormValid() {
      for (const field of this.fields) {
        if (!field.surname || !field.contact) {
          return false;
        }
      }
      return true;
    },
    saveForm() {
      if (!this.isFormValid()) {
        // Проверка, если форма недействительна (например, некоторые поля не заполнены)
        // мы можем принять соответствующие меры или отобразить сообщение об ошибке
        return;
      }

      const formData = {
        title: "Форма регистрации участников",
        author: "Автор :",
        creationDate: "Дата создания :",
        fields: this.fields, // Передаем значения полей в объект формы
      };

      // Вызываем событие "formSaved" и передаем formData в родительский компонент
      this.$emit("formSaved", formData);
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
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  
}
.section-left {
  width: 434px;
  height: 971px;
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
  width: 170px;
}
.form__list.active {
  color: #3ea748;
}
.button__back {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  padding-right: 10px;
}
.buttons {
  text-align: center;
  width: 300px;
}
.button__form-save {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #3ea748;
  color: #3ea748;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
}
.button__form-save:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: white;
  transition: 1.4s;
}
.button__form-script {
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #3ea748;
  color: #3ea748;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  margin-bottom: 20px;
}
.button__form-script:hover {
  transform: scale(1.1) translateY(-5px);
  background-color: white;
  transition: 1.4s;
}
.form__logo {
  margin-left: 40px;
  margin-bottom: 30px;
}
.section-center {
  background-color: whitesmoke;
  width: 503px;
  height: 972px;
  overflow-y: auto;
}
.field__content {
  margin-left: 20px;
}
.field__info {
  margin-top: 88px;
  display: flex;
  flex-direction: column;
}
.field__title {
  font-size: 40px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
}
.field__add {
  display: flex;
  width: 415px;
  height: 71px;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 20px;

  border: 1px dashed green;
}
.field__add-text {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  padding-left: 10px;
  color: #3ea748;
}
.button__add {
  border: none;
  background: none;
}
.field__about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  height: 20px;
  margin-bottom: 10px;
}
.field__initials {
  display: flex;
  width: 140px;
  justify-content: space-between;
}
.button__remove {
  width: 120px;
  height: 20px;
  border-radius: 10px;
  border: none;
  color: #3ea748;
  background: none;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
}
.input__add {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 40px;
}
.input__surname {
  width: 415px;
  height: 70px;
  border: 1px dashed green;
  border-radius: 10px;
  text-indent: 20px;
  outline: none;
}
.input_check {
  width: 24px;
  height: 24px;
}
.checkbox__text {
  width: 192px;
  height: 20px;
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.section-right {
  background-color: #3ea748;
  width: 600px;
}
.form__users {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex-direction: column;
  position: relative;
  background-color: white;
  top: 180px;
  left: 110px;
  width: 394px;
  height: 504px;
}
.form__users-registration {
  width: 269px;
  height: 70px;
  border-radius: 10px;
  background: none;
  border-color: none;
  background-color: whitesmoke;
  border: none;
  outline: none;
  margin-bottom: 12px;
  text-indent: 20px;
}
.form__user-checkbox {
  width: 24px;
  height: 24px;
}
.form__consent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 269px;
  height: 44px;
  margin-bottom: 70px;
}
.form__consent-text {
  width: 224px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}
.form__consent-button {
  width: 269px;
  height: 50px;
  top: 414px;
  left: 40px;
  padding: 16px, 32px, 16px, 32px;
  border-radius: 10px;
  border: 1px;
  gap: 8px;
  background-color: #3ea748;
  color: white;
}
</style>
