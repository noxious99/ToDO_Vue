<template>
  <div>
    <p class="w-12 bg-yellow-300 text-center ml-6 p-5">{{ count }}</p>
  </div>
  <button @click="inc" class="px-5 py-3 bg-blue-800 m-2">inc</button>
  <button @click="dec" class="px-5 py-3 bg-red-800 m-2">dec</button>
  <button @click="res" class="px-5 py-3 bg-green-800 m-2">res</button>
  <div><p class="p-5">hello from other component</p></div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc() {
      this.count++;
    },
    dec() {
      if (this.count > 0) {
        this.count--;
      }
    },
    res() {
      this.count = 0;
    },
  },
};
</script>
