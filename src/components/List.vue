<template>
   <div class="hello">
    <div class="hello">
    <h1>{{ msg }}</h1>
  <br>
   <div>
    <el-button type="primary" @click="cilckLogin()">更新加载</el-button>
  </div>
  </el-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '列出所有相关账单',
      detail: '供应链上的企业可以利用应收账款单据向银行申请融资'
    }
  },
  methods:{
    change:function(e) {
      this.$forceUpdate()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputClass{
  width:450px
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
