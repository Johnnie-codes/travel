import { defineStore } from 'pinia'
import { ref } from 'vue'

export const  usePassenger = defineStore('passengerStore', () => {
	const passengers = ref([])
  const done = ref(false)

  function setDone(val) {
    done.value = val
  }

  function getAll() {
    return passengers.value
  }

  function reset() {
    passengers.value = []
    done.value = false
  }

  function add(inventory) {
    passengers.value.unshift(inventory)
  }
  
  function set(data) {
    passengers.value = Array.isArray(data) ? data : (data.passengers?.drugResponse || [])
  }

  function update(id, inventory) {
    console.log(inventory);
    
    const idx = passengers.value.findIndex(el => el.ernpId == id)

    if(idx == -1) return 

    passengers.value.splice(idx, 1, inventory)
  }

  function changeAmount(id, amount) {
    const idx = passengers.value.findIndex(el => el.ernpId == id)

    if(idx > -1) {
      passengers.value[idx].totalAmount = amount
    }
  }
  
  function remove(id) {
    const idx = passengers.value.findIndex(el => el.ernpId == id)

    if(idx > -1) {
      passengers.value.splice(idx, 1)
    } 
  }

  return { passengers, set, remove, getAll, done, setDone, reset, add, update }
})