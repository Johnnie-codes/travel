import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInsurance = defineStore('insurance', () => {
    const insurance = ref({
        destination: {},
        summery: ''
    })

    function setSummery(data) {
        insurance.value.summery = data
    }

    function setDestination(data) {
        insurance.value.destination = data
    }

    return {
        insurance,
        setDestination,
        setSummery
    }
})