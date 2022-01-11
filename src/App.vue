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

    location.href = [
      'https://www.surveycake.com/s/DnQGz',
      'https://www.surveycake.com/s/laXqr',
      'https://www.surveycake.com/s/naWXm',
      'https://www.surveycake.com/s/aLo7p',
      'https://www.surveycake.com/s/B2XyV',
      'https://www.surveycake.com/s/paWmV',
      'https://www.surveycake.com/s/16bN1',
      'https://www.surveycake.com/s/DnQA7',
      'https://www.surveycake.com/s/gobLq',
      'https://www.surveycake.com/s/G29XK',
      'https://www.surveycake.com/s/RN3a8',
      'https://www.surveycake.com/s/eA4bm',
    ][numbigfive]
  },
}
</script>
