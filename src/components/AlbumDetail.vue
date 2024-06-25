<template>
    <div>
      <h1>Album Detail</h1>
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAlbumStore } from '../stores/index.js/album'
  
  export default {
    name: 'AlbumDetail',
    setup() {
      const route = useRoute()
      const albumStore = useAlbumStore()
      const { photos, fetchPhotos } = albumStore
  
      onMounted(() => {
        fetchPhotos(route.params.id)
      })
  
      return {
        photos
      }
    }
  }
  </script>
  