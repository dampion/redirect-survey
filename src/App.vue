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
      'https://www.surveycake.com/s/3MpeR',
      'https://www.surveycake.com/s/qa3mm',
      'https://www.surveycake.com/s/kaYQ4',
      'https://www.surveycake.com/s/Vr9Bn',
      'https://www.surveycake.com/s/la9LP',
      'https://www.surveycake.com/s/6MleO',
      'https://www.surveycake.com/s/aLNr4',
      'https://www.surveycake.com/s/DnzbX',
    ]
    const numbigfive = Math.floor(Math.random() * list.length)

    location.href = list[numbigfive]
  },
}
</script>
