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
      'https://www.surveycake.com/s/laa7x',
      'https://www.surveycake.com/s/8llvY',
      'https://www.surveycake.com/s/YxxB2',
      'https://www.surveycake.com/s/0PP6L',
      'https://www.surveycake.com/s/8llv7',
      'https://www.surveycake.com/s/YxxBZ',
      'https://www.surveycake.com/s/9BBw7',
      'https://www.surveycake.com/s/4MMpg',
      'https://www.surveycake.com/s/LzzkP',
      'https://www.surveycake.com/s/VrrDy',
      'https://www.surveycake.com/s/z11B2',
      'https://www.surveycake.com/s/6MMK7',
    ]
    const numbigfive = Math.floor(Math.random() * list.length)

    location.href = list[numbigfive]
  },
}
</script>
