<template>
    <section id="posts">
      <label for="userSelect">Select User:</label>
      <select id="userSelect" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <div id="postList">
        <div v-for="post in posts" :key="post.id" class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        posts: []
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
      },
      async fetchPosts(event) {
        const userId = event.target.value;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        this.posts = await response.json();
      }
    }
  };
  </script>
  
  <style>
  .post {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  </style>
  
