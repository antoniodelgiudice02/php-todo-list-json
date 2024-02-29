const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",

      tasks: [],

      newTask: '',
    };
  },

  methods: {
    fetchTodoList(){
      axios.get('http://localhost/php-todo-list-json/backend/API/get-list.php').then((response) => {console.log(response.data)
      this.tasks = response.data;
    })
    },

    addTask(){

      const task = this.newTask

      this.newTask = ''

      const data = { task }

      const header = {
        headers: {'Content-Type': 'multipart/form-data'}
      }



      axios.post('http://localhost/php-todo-list-json/backend/API/add-task.php', data, header).then((response) => {console.log(response.data)})
    }
  },

  mounted(){
    this.fetchTodoList()
  },
});

app.mount("#app");
