<script setup>
import navLandig from "./nav.vue";
</script><template>
  <div class="w-full h-full">
    <navLandig />
    <div class="w-full flex bg-[#4C3F3F] justify-center   h-fit">
      <div class=" w-11/12 h-fit align-middle">
        <div class="flex flex-col w-[607px] p-10  gap-12 ">
          <span class="text-white text-6xl text-wrap font-extrabold"
            >Travel with confidence secure your journey today.</span
          >
          <p class="text-white text-md text-wrap font-medium">
            Our comprehensive Travel Insurance offers peace of mind and reliable
            coverage for every journey, whether it’s a vacation, business trip,
            or quick getaway.
          </p>
          <button   @click="$router.push(`/QoutaionReview`)" class="bg-white text-xl font-bold p-3 w-fit rounded-md">Buy Travel Insurance Now</button>
        </div>
      </div>
    </div>
  </div>
</template>