<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product.id">
          <!-- {{ product }} -->
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import ProductComponent from "~/components/ProductComponent.vue";

const products = [
  {
    id: 1,
    title: "Product1",
    description: "Product 1",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 2,
    title: "Product2",
    description: "Product 2",
    url: "https://picsum.photos/id/71/800/800",
    price: 9999,
  },
  {
    id: 3,
    title: "Product3",
    description: "Product 3",
    url: "https://picsum.photos/id/23/800/800",
    price: 8879,
  },
  {
    id: 4,
    title: "Product4",
    description: "Product 4",
    url: "https://picsum.photos/id/54/800/800",
    price: 786,
  },
  {
    id: 5,
    title: "Product5",
    description: "Product 5",
    url: "https://picsum.photos/id/71/800/800",
    price: 201,
  },
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
  {
    id: 8,
    title: "Product8",
    description: "Product 8",
    url: "https://picsum.photos/id/87/800/800",
    price: 19999,
  },
  {
    id: 9,
    title: "Product9",
    description: "Product 9",
    url: "https://picsum.photos/id/28/800/800",
    price: 2999,
  },
  {
    id: 10,
    title: "Product10",
    description: "Product 10",
    url: "https://picsum.photos/id/287/800/800",
    price: 699,
  },
];
</script>

<style scoped></style>
