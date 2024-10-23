<template>
  <ul class="flex items-center justify-between bg-slate-300">
    <div>
      <li
        class="bg-slate-400 font-semibold px-5 py-4 hover:bg-slate-800 hover:text-white duration-200"
      >
        <router-link to="/">Home</router-link>
      </li>
    </div>
    <div class="flex">
      <li
        class="bg-slate-400 font-medium px-5 py-4 hover:bg-slate-800 hover:text-white duration-200"
      >
        <router-link to="/About">About</router-link>
      </li>
      <li
        class="bg-slate-400 font-medium px-5 py-4 hover:bg-slate-800 hover:text-white duration-200"
      >
        <router-link to="/FAQ">FAQ</router-link>
      </li>
    </div>
  </ul>
</template>

<script>
export default {};
</script>
