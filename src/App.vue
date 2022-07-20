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
      'https://forms.gle/ZAceUHoP1MMAFZAN8',
      'https://forms.gle/jABhLuHTp7JVMYnL8',
      'https://forms.gle/ZYUnipJNA9Sd6kZ6A',
      'https://forms.gle/XtSqtC66b7okZjSt6',
      'https://forms.gle/zBtyiaMrbedPAGvY8',
      'https://forms.gle/sPu1aF4R4piCx6h89',
      'https://forms.gle/4H7cjU1UnUPUEpAn7',
      'https://forms.gle/77ZQeZcW1DozzdNc8',
    ]
    const numbigfive = Math.floor(Math.random() * list.length)

    location.href = list[numbigfive]
  },
}
</script>
