<template>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
  <NuxtPage />
  <MenuOverlay
    :class="[
      {
        'max-h-[100vh] transition-all duration-200 ease-in visible':
          userStore.isMenuOverlay,
      },
      {
        'max-h-0 transition-all duration-200 ease-out visible':
          !userStore.isMenuOverlay,
      },
    ]"
  />
</template>
<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
let windowWidth = ref(process.client ? window.innerWidth : "");
const route = useRoute();
userStore.isLoading = false;
onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});

watch(
  () => windowWidth.value,
  () => {
    if (windowWidth.value >= 767) userStore.isMenuOverlay = false;
  }
);

watch(
  () => route.fullPath,
  () => {
    userStore.isLoading = true;
  }
);
</script>
