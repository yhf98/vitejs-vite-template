import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  getters: {
    doubleValue(): number {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
