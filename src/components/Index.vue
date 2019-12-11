<template>
  <div class="hello">
  <img src="../assets/FISCO_BCOS_Logo.jpg" width="300px" >
    <h1>{{ msg }}</h1>
    <h3>基于已有的开源区块链系统FISCO-BCOS，以联盟链为主</h3>
    <h3>实现供应链应收账款资产的溯源、流转</h3>
    </ul>
    <h2>使用框架</h2>
    <ul>
      <li>
        <a
          href="https://cn.vuejs.org/"
          target="_blank"
        >
          Vue.js
        </a>
      </li>
      <li>
        <a
          href="https://element.eleme.cn/#/zh-CN"
          target="_blank"
        >
          Element-UI
        </a>
      </li>
      <li>
        <a
          href="https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/index.html"
          target="_blank"
        >
          FISCO-BCOS
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用基于区块链的供应链金融平台'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  margin-top:20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
