<script setup>
import LoginForm from "../components/LoginForm.vue";
</script>
<template>
 <div class="md:grid md:grid-cols-2 h-screen sm:flex sm:flex-col overflow-scroll ">
  <div class="h-screen flex flex-col justify-start items-center bg-[#B59798] w">
   <div class="flex flex-col items-center pt-10 gap-4 h-[9vh]">
  <img class="w-[9.18vh] h-[9.18vh]" src="../assets/nyala.jpg" />
</div>


  <div class="flex flex-col items-center pt-10 w-[423px] h-[21.11vh] text-white font-semibold gap-4" style="font-family: 'Monument Extended'; font-size: 20px; font-weight: 400; line-height: 26px; letter-spacing: 0.06em; text-align: center; text-underline-position: from-font; text-decoration-skip-ink: none;">
  Travel with confidence<br> secure your journey<br> today.
  <h1 style="font-family: 'Montserrat'; font-size: 16px; font-weight: 400; line-height: 24px; text-align: center; text-underline-position: from-font; text-decoration-skip-ink: none;">
  Our comprehensive Travel Insurance offers peace of mind and reliable coverage for every journey,<br> whether it’s a vacation, business trip, or quick <br>getaway.
</h1>
</div>
<div>
</div>
<div class="flex relative top-16  pt-5 left-20">
  <img class="w-[560px]  h-[40.33vh]" src="../assets/Frame.png" />
</div>

</div>


        <LoginForm />
      </div>
   
</template>
<style scoped>
.page-container {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* This is needed for positioning the background container */
}

.background-image {
  position: absolute; /* Position it behind the form */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/addisAbaba.svg'); /* Adjust to your image path */
  background-size: cover; /* Ensure the image covers the entire screen */
  background-position: center; /* Center the background image */
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
}
</style>