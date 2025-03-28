<script setup>
import navLandig from "./components/Home/nav.vue";
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";
import plane from "@/assets/planepic.svg";
import footers from "./components/Home/footer.vue";
import about from "./components/Home/about.vue";
import niyala from "@/assets/niyala.svg";
import quotationReview from "./components/quotaion/QuoteSummary.vue"
import { shallowRef, ref } from "vue";
import QuotaionForm from "./components/quotaion/form/QuotaionForm.vue";
import QuoteSummary from "./components/quotaion/QuoteSummary.vue";
import GetQuotation from "./components/GetQuotation.vue";
import { useQuotaion } from "./components/quotaion/store/quotaionStore";
import navWhite from "./components/Home/navWhite.vue";

// const components = shallowRef([
//   {
//     name: 'Ask Quotation',
//     components: {
//       first: {
//         com: GetQuotation,
//         props: {}
//       },
//       second: {
//         com: QuoteSummary,
//         props: {
//           summery: null
//         }
//       }
//     }
//   },
//   {
//     name: 'Display Quotation',
//     components: {
//       first: GetQuotation,
//       second: QuoteSummary
//     }
//   },
//   {
//     name: 'User Info',
//     components: {
//       first: '',
//       second: ''
//     }
//   },
//   {
//     name: 'Payment',
//     components: {
//       first: '',
//       second: ''
//     }
//   }
// ])

const quotaionStore = useQuotaion()
const activeComp = ref('Ask Quotation')
const data = ref({})

function changeActive(name, data) {
  if(data) {
    data.value[activeComp.value] = data
  }

  activeComp.value = name

}
</script>
<template>
  <div class="w-full h-full">
    <navWhite />
    
    <div class="flex py-10 justify-center">
      <div class="grid grid-cols-2 gap-x-20 gap-y-8 w-4/5">
        <span class="col-span-2 text-md font-bold">Quotations</span>
          <div class="flex flex-col  gap-6">
            <GetQuotation
            />
          </div>
          <QuoteSummary
            :summery="quotaionStore.quotation.summery"
          />
      </div>
    </div>
    <about />
    <footers />
  </div>
</template>