<script setup>  
import navLandig from "../components/Home/nav.vue";  
import Input from "@/components/new_form_elements/Input.vue";  
import Select from "@/components/new_form_elements/Select.vue";  
import plane from "@/assets/planepic.svg";  
import footers from "../components/Home/footer.vue";  
import about from "../components/Home/about.vue"; 
import niyala from "@/assets/niyala.svg";  
import InsuranceSummary from "../components/Buy-insurance/InsuranceSummary.vue";  
import PaymentReview from "../payment/PaymentReview.vue";  
import paymentOptions from "../payment/paymentOptions.vue";
</script>  

<template>  
  <div class="w-full h-full">  
    <div class="w-full flex justify-center h-16 bg-white">  
      <div class="flex items-center w-11/12 justify-between">  
        <div class="text-white p-4 items-center">  
          <img :src="niyala" alt="" />  
        </div>  
        <div class="flex gap-5 items-center">  
          <button class="text-[#4C3F3F]">Home</button>  
          <button class="text-[#4C3F3F]">Terms and Policies</button>  
          <button class="text-[#4C3F3F]">Renew your policy</button>  
          <button class="text-[#4C3F3F]">Claim</button>  
        </div>  
        <div class="flex gap-5 items-center">  
          <button @click="$router.push('/login')" class="text-[#4C3F3F] w-30 h-9">login</button>  
          <button @click="$router.push('/QoutaionReview')" class="text-black bg-[#4C3F3F] w-30 h-9 rounded-md">Get Quote</button>  
        </div>  
      </div>  
    </div>  

    <div class="flex py-10 justify-center">  
      <div class="grid grid-cols-2 gap-x-20 gap-y-8 w-3/4 h-full ">  
        <span class="col-span-2 text-md font-bold">Quotations</span>  
        <PaymentReview /> 
        <paymentOptions /> 

      

        <!-- <PaymentReview /> -->  
      </div>  
    </div>  
    <about />  
    <footers />  
  </div>  
</template>  
