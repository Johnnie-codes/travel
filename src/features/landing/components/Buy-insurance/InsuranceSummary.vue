<script setup>
import { reactive, ref } from 'vue';
import editicon from "@/assets/EditIcon.svg";
import DeleteIcon from "@/assets/Deleteicon.svg";
import { useApiRequest } from '@/composables/useApiRequest';
import { useQuotaion } from '../quotaion/store/quotaionStore';
import { createPayment } from './api/buyInsuranceApi';
import { toasted } from '@/utils/utils';
import { useRoute } from 'vue-router';

const passengers = ref([
  // { id: 1, name: "Semere Tsadik" },
  // { id: 2, name: "Birhane Araya" },
]);

const route = useRoute()

const addPassenger = () => {
  const newPassenger = { id: passengers.value.length + 1, name: "New Passenger" };
  passengers.value.push(newPassenger);
};

const removePassenger = (id) => {
  passengers.value = passengers.value.filter(passenger => passenger.id !== id);
};

const editPassenger = (id) => {
  const passenger = passengers.value.find(passenger => passenger.id === id);
  if (passenger) {
    const newName = prompt("Enter new name:", passenger.name);
    if (newName) {
      passenger.name = newName;
    }
  }
};
const quotaionStore =useQuotaion();
const pendingPayments = reactive({});
const req = useApiRequest();

function pay() {
    req.send(
        () => createPayment(quotaionStore.quotation.summery?.referenceCode || route.params?.referenceId),
        res => {
            console.log(res); // Log the whole response to understand its structure
            if (res.success) {
                const paymentUrl = res.data.checkout_url; // Access the URL directly from res.data
                if (paymentUrl) {
                    console.log(paymentUrl); // Log the URL to confirm it's defined
                     window.location.href = paymentUrl; // Redirect to the correct URL
                } else {
                    console.error('Payment URL not found in response');
                }
            } else {
                toasted(res.success, 'Please click the upcoming link to pay?', res.error);
            }
        }
    );
}
</script>

<template>
  <div class="relative w-full self-start justify-center flex gap-2 flex-col rounded-lg">
    <div class="bg-[#4C3F3F] h-full p-5 flex rounded-xl flex-col gap-2 border">
      <span class="text-xl text-white font-bold">Insurance</span>

      <div class="p-4 gap-4 flex flex-col bg-white">
        <div>
          <div class="flex p-2 border-b justify-between items-center bg-[#4C3F3F]">
            <div>
              <!-- <span class="text-sm text-white">Etb {{ quotaionStore.quotation.summery?.price }}</span> -->
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-thin text-white">Medical</span>
              <span class="text-sm font-thin text-white">Travel Delay</span>
            </div>
            <div>
              <button class="p-1 font-semibold rounded text-sm h-full bg-white border-2">
                Change
              </button>
            </div>
          </div>
          <div class="flex border-b p-2 justify-between bg-[#4C3F3F]">
            <span class="P-6 font-thin text-white">Destination</span>
            <span class="font-thin text-white">{{ quotaionStore.quotation.summery?.destination }}</span>
          </div>
          <div class="flex p-2 justify-between bg-[#4C3F3F]">
            <span class="P-6 font-thin text-white">{{ quotaionStore.quotation.summery?.duration }} days</span>
            <span class="P-6 font-thin text-white">Duration</span>
          </div>
        </div>

        <div class="bg-[#4C3F3F] h-full flex flex-col gap-2 p-2 rounded-l border">
          <div class="flex justify-between">
            <span class="text-xl text-white font-bold mb-4">Passengers</span>
            <span>{{ passengers.length }}</span>
          </div>
          <div>
            <div
              v-for="passenger in passengers"
              :key="passenger.id"
              class="flex text-white bg-[#635252] p-2 justify-between items-center font-semibold text-md"
            >
              <div class="flex gap-2 font-semibold text-md">
                <span>{{ passenger.id }}</span>
                <span>{{ passenger.name }}</span>
              </div>
              <div class="flex gap-2">
                <button @click="editPassenger(passenger.id)">
                  <img :src="editicon" alt="Edit" />
                </button>
                <button @click="removePassenger(passenger.id)">
                  <img :src="DeleteIcon" alt="Delete" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white h-full p-4 flex flex-col items-center align-middle gap-6 border">
        <span class="font-medium text-lg text-[#090909]">Do you want to add another passenger?</span>
        <div class="w-full h-11 items-center flex gap-4">
          <button
            @click="addPassenger"
            class="font-semibold text-white rounded text-md h-full bg-[#4C3F3F] w-1/3 border-2"
          >
            Yes
          </button>
          <button
            @click="pay"
            class="font-semibold text-md h-full rounded w-2/3 border-2"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
