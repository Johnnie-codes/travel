<script setup>
import { useRouter } from 'vue-router';
import { useQuotaion } from './store/quotaionStore';
import Button from '@/components/Button.vue';

const router = useRouter();
const quotaionStore = useQuotaion();


function addPassenger(){
  if(!Object.keys(quotaionStore.quotation.destination)) return

  router.push(
    `/buyInsurance/${quotaionStore.quotation.summery?.referenceCode}`)
}



</script>

<template>
  <div
    class="relative w-full self-start justify-center h-full flex gap-2 flex-col rounded-lg"
  >
    <!-- <div v-if="!summery || !quotaionStore.quotation.summery?.plans.length">
      <img src="/src/assets/planepic.svg" class="min-h-[32.56rem] object-cover" />
    </div> -->
    <div
      class="bg-[#4C3F3F] py-6 h-full w-full flex flex-col gap-6 border rounded-lg"
    >
      <div class="flex flex-col w-11/12 gap-4 mx-auto">
        <span class="text-xl text-white font-bold mb-4 border-b"
          >Quote Summary</span
        >

        <div class="py-1 bg-white rounded-md h-full px-4 w-11/12">
          <div class="grid grid-cols-2 border-b border-dotted mb-4">
            <p class="text-lg font-semibold text-gray-600">Destination</p>
            <p class="text-lg border-l flex font-bold items-end">
              {{ quotaionStore.quotation.summery?.coverRequiredFor }}
            </p>
          </div>
          <div
            class="flex justify-between w-full h-12 rounded-md bg-[#4C3F3F] p-1"
          >
            <div>
              <span class="text-lg text-white">{{ quotaionStore.quotation.summery?.duration }} Days</span>
              <p class="text-sm font-thin text-white">Duration</p>
            </div>
            <span class="text-sm text-gray-500">{{ quotaionStore.quotation.summery?.people }}</span>
          </div>

          <div class="py-1 w-full flex flex-col mt-6 gap-2 rounded-md">
            <div class="flex justify-between border-b border-dotted mb-4">
              <p class="text-lg font-semibold text-gray-600">Premium limit</p>
            </div>
            <div class="flex justify-between bg-[#4C3F3F] rounded-md h-16 mb-4">
              <p class="text-lg font-semibold p-1 text-white">Covered Limit</p>
              <p class="text-lg font-semibold p-1 text-white">
                ETB-{{ quotaionStore.quotation.summery?.coverLimit }}
              </p>
            </div>
            <div class="flex justify-between bg-[#4C3F3F] rounded-md h-16 mb-4">
              <p class="text-lg font-semibold p-1 text-white">Total premium</p>
              <p class="text-lg font-semibold p-1 text-white">
                ETB-{{ quotaionStore.quotation.summery?.premiumAmount }}
              </p>
            </div>
            <div class="flex justify-between bg-[#4C3F3F] rounded-md h-16 mb-4">
              <p class="text-lg font-semibold p-1 text-white">Cover Required For </p>
              <p class="text-lg font-semibold p-1 text-white">
                country-{{ quotaionStore.quotation.summery?.coverRequiredFor }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex ">
          <Button :class="[!quotaionStore.quotation.summery && 'opacity-50 pointer-events-none']" @click.prevent="addPassenger" class="w-full h-10 bg-white font-bold text-md  rounded-md">Add passengers</Button>
        </div>
      </div>
    </div>
  </div>
</template>
