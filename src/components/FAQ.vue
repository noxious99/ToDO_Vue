<template>
  <div>counter: {{ $store.state.counter }}</div>
  <div>
    <button @click="$store.dispatch('increaseCounter')">increase</button>
  </div>
  <div>
    <button @click="$store.dispatch('decreaseCounter')">decrease</button>
  </div>
</template>

<script>
export default {
  name: "FAQ",
};
</script>
