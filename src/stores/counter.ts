// Utilities
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

const NAME = 'COUNTER_STORE'

export const useCounterStore = defineStore(NAME, () => {
  const count = ref(useLocalStorage('count', 0))

  function init() {
    count.value = 0
  }

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return { count, init, increment, decrement }
})
