import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoles = defineStore('roleStore', () => {
	const role = ref([])

	function set(data) {
		
		role.value = data
		console.log(data);

	}

	function getAll() {
		return role.value
	}

	function remove(id) {
		const idx = role.value.findIndex(el => el.privilegeUuid == id)
		if(idx > -1) {
			role.value.splice(idx, 1)
		}
	}

	function add(privilege) {
		role.value.unshift(privilege)
	}

	function update(id, data) {
		const idx = role.value.findIndex(el => el.privilegeUuid == id)
		if(idx > -1) {
			role.value.splice(idx, 1, data)
		}
	}

	return {
		set,
		add,
		remove,
		update,
		getAll,
		role
	}
})