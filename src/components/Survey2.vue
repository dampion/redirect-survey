<template>
  <h1>redirecting...</h1>
</template>

<script>
export default {
  name: 'App',
  created() {
    const list = [
      'https://www.surveycake.com/s/xaD2y',
      'https://www.surveycake.com/s/7MQrZ',
      'https://www.surveycake.com/s/Yx6no',
      'https://www.surveycake.com/s/9BqWr',
    ]
    const numbigfive = Math.floor(Math.random() * list.length)

    location.href = list[numbigfive]
  },
}
</script>
