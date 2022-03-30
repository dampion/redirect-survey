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
    const list = [
      'https://www.surveycake.com/s/Z8kl2',
      'https://www.surveycake.com/s/3M36b',
      'https://www.surveycake.com/s/XWAZr',
      'https://www.surveycake.com/s/4Mong',
    ]
    const numbigfive = Math.floor(Math.random() * list.length)

    location.href = list[numbigfive]
  },
}
</script>
