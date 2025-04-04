import { defineStore } from "pinia";
import { ref } from "vue";

export const usePrivileges = defineStore("privilegesStore", () => {
  const privileges = ref([]);

  function set(data) {
    privileges.value = data;
  }

  function getAll() {
    return privileges.value;
  }

  function remove(id) {
    const idx = privileges.value.findIndex((el) => el.privilegeUuid == id);
    if (idx > -1) {
      privileges.value.splice(idx, 1);
    }
  }

  function add(privilege) {
    privileges.value.unshift(privilege);
  }

  function update(id, data) {
    const idx = privileges.value.findIndex((el) => el.privilegeUuid == id);
    if (idx > -1) {
      privileges.value.splice(idx, 1, data);
    }
  }

  return {
    set,
    add,
    remove,
    update,
    getAll,
    privileges,
  };
});
