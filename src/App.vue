<template>
  <h1>redirecting...</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    const numbigfive = Math.floor(Math.random() * 10)
    if (numbigfive>4) {
      location.href = 'https://www.surveycake.com/s/G29GP' 
    } else {
      location.href = 'https://www.surveycake.com/s/DnQGz'
    }
  },
}
</script>
