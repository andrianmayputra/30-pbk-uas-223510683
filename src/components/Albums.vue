<template>
    <div>
      <h1>Albums</h1>
      <div v-for="album in albums" :key="album.id">
        <router-link :to="'/albums/' + album.id">{{ album.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useAlbumStore } from '../stores/index.js/album'
  
  export default {
    name: 'Albums',
    setup() {
      const albumStore = useAlbumStore()
      const { albums, fetchAlbums } = albumStore
  
      onMounted(() => {
        fetchAlbums()
      })
  
      return {
        albums
      }
    }
  }
  </script>
  