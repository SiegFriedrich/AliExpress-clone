<template>
  <div class="flex justity-start my-2">
    <img :src="product.url" class="rounded-md md:w-[150px] w-[90px]" />

    <div class="overflow-hidden pl-2">
      <div class="flex items-center justify-between truncate">
        <span
          class="sm:block hidden bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
          >Welcome Deal</span
        >
        <div class="truncate sm:pl-2">{{ product.title }}</div>
      </div>

      <div class="text-xl font-semibold">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>

<style scoped></style>
