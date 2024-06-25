import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
  state: () => ({
    users: [],
    posts: []
  }),
  actions: {
    async fetchUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.users = response.data
    },
    async fetchPosts(event) {
      const userId = event.target.value
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      this.posts = response.data
    }
  }
})
