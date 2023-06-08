import MainLayout from '~/layouts/MainLayout.vue';
<template>
  <div>
    <MainLayout>
      <div id="shoppingcart" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="false" class="flex h-[500px] items-center justify-center">
          <div class="pt-20">
            <img class="mx-auto" width="250" src="~/public/cart-empty.png" />
            <div class="text-xl mt-4 text-center">No items yet?</div>
            <div v-if="true" class="flex text-center">
              <NuxtLink
                to="/auth"
                class="bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
                >Sign In・登録</NuxtLink
              >
            </div>
          </div>
        </div>
        <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
          <div class="md:w-[65%]">
            <div class="bg-white rounded-lg p-4">
              <div class="text-2xl font-bold mb-2">Shopping Cart [0]</div>
            </div>
            <div class="bg-[#feeeef] rounded-lg p-4 mt-4">
              <div class="text-red-500 font-bold">
                Welcome deal applicable 1 item only
              </div>
            </div>
            <div class="bg-white rounded-lg p-4 mt-4">
              <div v-for="product in products">
                <CartItem
                  :product="product"
                  :selectedArray="selectedArray"
                  @selectedRadio="selectedRadio"
                />
              </div>
            </div>
          </div>
          <div class="md:hidden block my-4" />
          <div class="md:w-[35%]">
            <div id="Summary" class="bg-white rounded-lg p-4">
              <div class="text-2xl font-extrabold mb-2">Summary</div>
              <div class="flex items-center justify-between my-4">
                <div class="font-semibold">Total</div>
                <div class="text-2xl font-semibold">
                  $<span class="font-extrabold">{{ totalPriceComputed }}</span>
                </div>
              </div>
              <button
                @click="goToCheckout()"
                class="flex items-center justify-center bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
              >
                Checkout
              </button>
            </div>

            <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
              <div class="text-lg font-semibold mb-2">Payment Methods</div>
              <div class="flex items-center justify-start gap-4 my-4">
                <div v-for="card in cards">
                  <img class="h-6" :src="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import CartItem from "~/components/CartItem.vue";
const selectedArray = ref("");
const selectedRadio = () => {};

const cards = ref(["visa.png", "mastercard.png", "paypal.png", "applepay.png"]);

const products = ref([
  {
    id: 6,
    title: "Product6",
    description: "Product 6",
    url: "https://picsum.photos/id/90/800/800",
    price: 7789,
  },
  {
    id: 7,
    title: "Product7",
    description: "Product 7",
    url: "https://picsum.photos/id/45/800/800",
    price: 9099,
  },
]);

const totalPriceComputed = computed(() => {
  let res = 0;
  products.value.forEach((prod) => (res += prod.price));
  return res / 100;
});
</script>

<style scoped></style>
