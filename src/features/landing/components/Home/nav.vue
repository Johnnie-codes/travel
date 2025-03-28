<script setup>
import niyala from "@/assets/niyala.svg"
</script>
<template>
  <div class="w-full flex justify-center  h-16 bg-[#4C3F3F]">
    <div class="  flex items-center w-11/12 justify-between  ">
      <div class="text-white p-4 items-center">
        <img :src="niyala" alt="">
      </div>
      <div class="flex gap-5 items-center">
        <button @click.prevent="$router.push('/')"  class="text-white">Home</button>
        <button @click.prevent="$router.push('/Terms')" class="text-white">Terms and Policies</button>
        <button @click.prevent="$router.push('/Renew')"  class="text-white">Renew your policy</button>
        <button @click.prevent="$router.push('/Claims')"  class="text-white">Claim</button>
      </div>
      <div class="flex gap-5 items-center">
        <button @click="$router.push('/signin')" class="text-white  w-30 h-9">Login</button>
        <button @click="$router.push('/QoutaionReview')" class="text-black px-2 bg-white w-30 h-9 rounded-md">Get A Quote</button>
      </div>
    </div>

  </div>
</template>