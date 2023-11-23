<template>
  <!-- <h1>redirecting...</h1> -->
  <h1>商品選擇</h1>

  <button @click="showProduct('Adidas Stan Smith', 'UK7、UK9', 'https://www.adidas.co.uk/advantage-base-court-lifestyle-shoes/GW7105.html?utm_campaign=TW_BLOG_WK1311_1911_23&utm_medium=bitly&utm_source=Tuesday&forceSelSize=8.5')">鞋子1</button>
  <button @click="showProduct('NIKE COURT ROYALE 2 NN DX5939', 'UK7', 'https://shopee.tw/product/17457518/18988009704?utm_campaign=-&utm_content=127956-5134f67b45f842e3af45a9dee8dd746a--103092&utm_medium=affiliates&utm_source=an_16233370000&utm_term=a8rpgwwyc8ej')">鞋子2</button>
  <button @click="showProduct('FRED PERRY Logo Sports shoes', 'UK9', 'https://shopee.tw/*Mars*%E5%85%A8%E6%96%B0%E7%9C%9F%E5%93%81-%E8%B6%85%E6%90%B6%E6%89%8B-FRED-PERRY-Logo-Sports-shoes-%E7%9A%AE%E9%9D%A9-%E9%81%8B%E5%8B%95-%E4%BC%91%E9%96%92%E9%9E%8B-i.1227464.4932967938?sp_atk=0b795a33-f6d2-4337-8b38-07f84277bcd0&xptdk=0b795a33-f6d2-4337-8b38-07f84277bcd0')">鞋子3</button>
  <button @click="showProduct('Coach - North South Mini Tote - 3500', '', 'https://ca.coachoutlet.com/en/products/north-south-mini-tote/CM249.html?utm_campaign=TW_BLOG_WK1311_1911_23&utm_medium=bitly&utm_source=Tuesday')">包包1</button>
  <button @click="showProduct('Michael Kors 經典十字紋牛皮雙拉鏈殺手包', '小號', 'https://www.wallettw.com/michael-kors-69.html')">包包2</button>

  <div id="productInfo"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    // const list = [
    //   'https://forms.gle/ZAceUHoP1MMAFZAN8',
    //   'https://forms.gle/jABhLuHTp7JVMYnL8',
    //   'https://forms.gle/ZYUnipJNA9Sd6kZ6A',
    //   'https://forms.gle/XtSqtC66b7okZjSt6',
    //   'https://forms.gle/zBtyiaMrbedPAGvY8',
    //   'https://forms.gle/sPu1aF4R4piCx6h89',
    //   'https://forms.gle/4H7cjU1UnUPUEpAn7',
    //   'https://forms.gle/77ZQeZcW1DozzdNc8',
    // ]
    // const numbigfive = Math.floor(Math.random() * list.length)

    // location.href = list[numbigfive]
  },
  methods: {
    showProduct(name, size, link) {
      var info = "商品名稱：" + name + "<br>尺寸：" + size + "<br>購買連結：<a href='" + link + "' target='_blank'>" + link + "</a>";
      document.getElementById("productInfo").innerHTML = info;
    }
  },
}

</script>
