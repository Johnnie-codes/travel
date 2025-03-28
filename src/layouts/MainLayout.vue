<script setup>
import Button from "@/components/Button.vue";
import NavBar from "@/components/NavBar.vue";
import navs from "@/config/navs";
import { provide, ref, watch } from "vue";
import { RouterLink } from "vue-router";
const inputData = ref("");

const grouped = Object.groupBy(navs, (el) => el.type);

const search = ref("");
provide("search", search.value);
watch(
  () => search.value,
  () => {
    console.log("gggg", search.value);
  }
);
</script>

<template>
  <div class="flex h-full w-full overflow-hidden">
    <div class="__drawer w-drawer-width">
      <div class="p-4 h-20 flex gap-4 items-center justify-center">
        <span class="font-bold text-base-clr text-lg">Awash INSURANCE</span>
      </div>
      <div
        class="show-scrollbar flex flex-col justify-start !p-2 !px-6 gap-1 h-[calc(100%-10rem)]"
      >
        <template :key="name" v-for="(navs, name) in grouped">
          <div class="px-4" v-if="name">
            <p class="border-t border-base-clr1 text-xs text-base-clr pt-4">
              {{ name }}
            </p>
          </div>
          <RouterLink
            :key="nav.name"
            v-for="nav in navs"
            class="flex rounded transition-all duration-200 ease-linear hover:bg-gray-200"
            :to="nav.path"
          >
            <Button
              class="!h-12 flex-1 max-w-full flex items-center pl-5 gap-3"
            >
              <div class="grid place-items-center rounded">
                <IIcon :style="{ fontSize: '18px' }" :icon="nav.icon" />
              </div>
              <span>{{ nav.name }}</span>
            </Button>
          </RouterLink>
        </template>
      </div>
    </div>
    <div class="flex flex-col w-[calc(100%-var(--drawer-width))]">
      <div class="h-navbar-height flex items-center jub gap-4 px-5">
        <NavBar v-model="search" class="w-full" :title="$route.name" />
      </div>
      <div
        class="h-[calc(100%-var(--navbar-height))] show-scrollbar bg-base-clr2 w-full"
      >
        <RouterView :search="search" :inputData="inputData" class="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.__drawer .router-link-exact-active {
  background-color: theme("colors.primary");
  color: rgb(var(--base-clr2));
}
</style>
