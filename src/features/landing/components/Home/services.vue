  
  <script setup>  
  import ServiceCard from "./ServiceCard.vue";
  import mobileandhands from "./mobileAndHand.svg"
  </script><template>  
<div class="flex gap-10 justify-between">
    <img :src="mobileandhands" alt="">

    <div class=" mt-30 p-20  w-[510px] h-[611px] ">  
      <h1 class="text-4xl font-bold mb-4">Our Insurance Services</h1>  
      <p class="text-lg mb-8">  
        Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!  
      </p>  
      
      <div class="space-y-4 ">  
        <ServiceCard  
          title="Affordable coverage"  
          description="Things on a very small scale behave like nothing that you have any direct experience"  
          icon="📊"  
          :isHighlighted="true"  
        />  
        <ServiceCard  
          title="Balanced coverage"  
          description="Things on a very small scale behave like nothing that you have any direct experience"  
          icon="✔️"  
        />  
        <ServiceCard  
          title="Comprehensive coverage"  
          description="Things on a very small scale behave like nothing that you have any direct experience"  
          icon="✉️"  
        />  
      </div>  
    </div> 
</div> 
  </template>  
