const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",

      tasks: [
        {
          text: "task 1",
          done: true,
        },
        {
          text: "task 2",
          done: false,
        },
        {
          text: "task 3",
          done: true,
        },
        {
          text: "task 4",
          done: false,
        },
        {
          text: "task 5",
          done: true,
        },
      ],
    };
  },
});

app.mount("#app");
