import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      forms: [
        {
          title: "Форма регистрации участников",
          author: "Автор:",
          creationDate: "Дата создания:",
        },
      ],
    };
  },
  mutations: {
    removeForm(state, index) {
      state.forms.splice(index, 1);
    },
    addForm(state, formData) {
      state.forms.push(formData);
    },
  },
});

export default store;
  