export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
    async fill () {
      this.products = (await import('@/data/products.json')).products.data.items
    }
  }
// getters
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
