import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("userStore", () => {
  const users = ref([]);

  function set(data) {
    users.value = data;
  }

  function getAll() {
    return users.value;
  }

  function remove(id) {
    const idx = users.value.findIndex((el) => el.userUuid == id);
    if (idx > -1) {
      users.value.splice(idx, 1);
    }
  }

  function add(user) {
    users.value.unshift(user);
  }

  function update(id, data) {
    const idx = users.value.findIndex((el) => el.userUuid == id);
    if (idx > -1) {
      users.value.splice(idx, 1, data);
    }
  }

  return {
    set,
    add,
    remove,
    update,
    getAll,
    users,
  };
});
