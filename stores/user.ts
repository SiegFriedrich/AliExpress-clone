import {defineStore} from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({
        isMenuOverlay : false,
        isLoading : false,
        cart: [{
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
          },],
        checkout: [],
    }),
    persist:true
})