import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuotaion = defineStore("quotation", () => {
  const quotation = ref({
    summery: "",
    destination: {},
    passenger: {},
    dependents: [],
  });

  function setSummery(data) {
    quotation.value.summery = data;
  }

  function setDestination(data) {
    quotation.value.destination = data;
  }

  function setPassenger(data) {
    quotation.value.passenger = data;
  }

  return {
    quotation,
    setDestination,
    setSummery,
    setPassenger,
  };
});
