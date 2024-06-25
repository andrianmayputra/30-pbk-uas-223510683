<template>
    <section id="activities">
      <div v-for="(activity, index) in activities" :key="index" class="activity" :class="{ completed: activity.completed }">
        <input type="checkbox" :id="'activity' + index" v-model="activity.completed">
        <label :for="'activity' + index">{{ activity.name }}</label>
        <button @click="cancelActivity(index)">Cancel</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activities: []
      };
    },
    methods: {
      addActivity() {
        const activityName = prompt('Enter the name of the activity:');
        if (activityName) {
          this.activities.push({ name: activityName, completed: false });
        }
      },
      cancelActivity(index) {
        this.activities.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  .activity {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  
  .completed {
    text-decoration: line-through;
    color: #888;
  }
  </style>
  
