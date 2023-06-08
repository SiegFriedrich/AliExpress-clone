<template>
  <div class="flex justity-start my-2">
    <div class="my-auto">
      <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justity-start p-0.5 cursor-pointer"
      >
        <div @click="isSelected = !isSelected">
          <div
            class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
            :class="[
              isHover ? 'border-[#fd374f]' : 'border-gray-300',
              isSelected ? 'bg-[#fd374f]' : '',
            ]"
          >
            <div class="h-[8px] w-[8px] rounded-full bg-white" />
          </div>
        </div>
        <img :src="product.url" class="rounded-md md:w-[150px] w-[90px]" />
      </div>
    </div>
    <div class="overflow-hidden ml-12 w-full">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between truncate">
          <span
            class="sm:block hidden bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
            >Welcome Deal</span
          >
          <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
        <button
          @click="removeFromCart()"
          class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20"></Icon>
        </button>
      </div>
      <div class="text-xl font-semibold">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>
      <p class="text-[#009a66] text-xs font-semibold pt-1">
        Free 11-day delivery over $8.28
      </p>
      <p class="text-[#009a66] text-xs font-semibold pt-1">Free Shipping</p>
      <div class="flex items-center justify-end">
        <button
          @click="removeFromCart()"
          class="sm:hidden block -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20"></Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const props = defineProps(["product", "selectedArray"]);
const { product, selectedArray } = toRefs(props);
const emit = defineEmits(["selecteRadio"]);

const useStore = useUserStore();
let isHover = ref(false);
let isSelected = ref(false);
const removeFromCart = () => {
  useStore.cart.forEach((prod, index) => {
    if (prod.id === product?.value.id) {
      useStore.cart.splice(index, 1);
    }
  });
};

watch(
  () => isSelected.value,
  (val) => {
    emit("selectedRadio", { id: product.value.id, val: val });
  }
);
</script>

<style scoped></style>
