<template>
  <div>
    <div class="background-image"></div>
    <div class="container">
      <header>
        <h1>Futsal Activities</h1>
        <nav>
          <button @click="showTodos">Todos</button>
          <button @click="showPosts">Post</button>
        </nav>
        <button @click="addActivity">Add Activity</button>
      </header>
      <main>
        <Todos v-if="view === 'todos'" />
        <Posts v-if="view === 'posts'" />
      </main>
      <footer>
        &copy; 2024 Futsal Activities App
      </footer>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import Posts from './components/Posts.vue';

export default {
  components: {
    Todos,
    Posts
  },
  data() {
    return {
      view: 'todos'
    };
  },
  methods: {
    showTodos() {
      this.view = 'todos';
    },
    showPosts() {
      this.view = 'posts';
    },
    addActivity() {
      this.$refs.todos.addActivity();
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/images.jpeg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

nav {
  display: flex;
  gap: 10px;
}

nav button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

nav button:hover {
  background-color: #0056b3;
}

h1 {
  color: #333;
}

footer {
  margin-top: 20px;
  text-align: center;
  color: #777;
}
</style>
