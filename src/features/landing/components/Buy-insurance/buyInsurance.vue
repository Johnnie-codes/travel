<script setup>
import { ref, computed } from "vue";
import { useQuotaion } from "../quotaion/store/quotaionStore";
import NavWhite from "../Home/navWhite.vue";
import footers from "../Home/footer.vue";
import InsuranceSummary from "./InsuranceSummary.vue";
import AddPassengerForm from "./AddPassengerForm.vue";
import AddDependantsForm from "./AddDependantsForm.vue";
import AddDestinationForm from "./AddDestinationForm.vue";
import About from "../Home/about.vue";

// Access the Pinia store
const quotaionStore = useQuotaion();
const active = ref("Main Member");

// Computed property to check passenger count
const passengersCount = computed(
  () => quotaionStore.quotation.passengers.length
);

// Computed property to determine available components
const components = [
  {
    name: "Main Member",
    com: AddPassengerForm,
  },
  {
    name: "Destination",
    com: AddDestinationForm,
  },
  { name: "Dependants", com: AddDependantsForm },
];

function goTo(name) {
  active.value = name;
}

function next() {
  const idx = components.findIndex((c) => c.name === active.value);
  if (idx < components.length - 1) {
    active.value = components[idx + 1].name;
  }
}
</script>

<template>
  <div class="w-full h-full">
    <NavWhite />
    <div class="flex py-10 justify-center">
      <div class="grid grid-cols-2 gap-x-20 gap-y-8 w-3/4 h-full">
        <span class="col-span-2 text-md font-bold">Quotations</span>
        <div class="flex flex-col gap-3">
          <div class="flex gap-2">
            <button
              @click="goTo('Main Member')"
              :class="[active == 'Main Member' && 'bg-primary text-white']"
              class="px-4 py-2 rounded-md cursor-pointer"
            >
              Main Member
            </button>
            <button
              @click="goTo('Destination')"
              :class="[active == 'Destination' && 'bg-primary text-white']"
              class="px-4 py-2 rounded-md cursor-pointer"
            >
              Destination
            </button>
            <button
              @click="goTo('Dependants')"
              :class="[active == 'Dependants' && 'bg-primary text-white']"
              class="px-4 py-2 rounded-md cursor-pointer"
            >
              Dependants
            </button>
          </div>
          <div></div>
          <template :key="name" v-for="{ com, name } in components">
            <component
              :next="next"
              v-if="active === name"
              :is="com"
              :goTo="goTo"
            />
          </template>
        </div>
        <InsuranceSummary />
      </div>
    </div>
    <About />
    <footers />
  </div>
</template>

<!-- <PdfPagePdf :user="{name: 'Hallo JOJO'}" /> -->
