<template>
  <div v-if="!formShow">
    <button
      @click="setFormShow"
      class="px-8 py-4 bg-blue-300 mt-5 rounded-full shadow-md shadow-slate-500 hover:bg-blue-800 duration-200 hover:text-white"
    >
      Add More Task!
    </button>
  </div>
  <div v-else>
    <form @submit.prevent="addTask">
      <input
        type="text"
        v-model="form.title"
        placeholder="Enter Your New Task"
        class="bg-slate-200 px-5 py-2 rounded-lg mr-4 mt-4 text-black border-blue-500 border-2"
      />
      <button
        type="submit"
        class="bg-blue-800 rounded-full px-5 py-2 text-white"
      >
        Add Task!
      </button>
      <button
        @click="setFormShow"
        class="ml-10 p-2 w-10 h-10 rounded-full bg-red-200 text-red-800 border-2 border-red-950"
      >
        X
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      formShow: false,
      form: {
        title: "",
        userId: 7,
        completed: false,
      },
    };
  },
  methods: {
    setFormShow() {
      this.formShow = !this.formShow;
    },
    addTask() {
      const newId = Date.now() % 10;
      const newTask = {
        ...this.form,
        id: newId,
      };
      this.$store.dispatch("addTodo", newTask);
      this.form.title = "";
      this.setFormShow();
    },
  },
};
</script>
