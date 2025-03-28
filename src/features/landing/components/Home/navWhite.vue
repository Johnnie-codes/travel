<script setup>
import niyala from "@/assets/niyala.svg"
</script>
<template>
  <div class="w-full flex justify-center  h-16 bg-white">
    <div class="  flex items-center w-11/12 justify-between  ">
      <div class="text-white p-4 items-center">
        <img :src="niyala" alt="">
      </div>
      <div class="flex gap-5 items-center">
        <button @click.prevent="$router.push('/Home')"  class="text-[#4C3F3F]">Home</button>
        <button @click.prevent="$router.push('/Terms')" class="text-[#4C3F3F]">Terms and Policies</button>
        <button @click.prevent="$router.push('/Renew')"  class="text-[#4C3F3F]">Renew your policy</button>
        <button @click.prevent="$router.push('/Claims')"  class="text-[#4C3F3F]">Claim</button>
      </div>
      <div class="flex gap-5 items-center">
        <button  @click="$router.push('/signin')" class="text-black  w-30 h-9">login</button>
        <button @click="$router.push('/QoutaionReview')" class="text-white px-2 bg-[#4C3F3F] w-30 h-9 rounded-md">Get A Quote</button>
      </div>
    </div>

  </div>
</template>