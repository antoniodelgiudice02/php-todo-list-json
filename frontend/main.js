const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",

      tasks: []
    };
  },

  methods: {
    fetchTodoList(){
      axios.get('http://localhost/php-todo-list-json/backend/API/get-list.php').then((response) => {console.log(response.data)
      this.tasks = response.data;
    })
      
    }
  },

  mounted(){
    this.fetchTodoList()
  },
});

app.mount("#app");
