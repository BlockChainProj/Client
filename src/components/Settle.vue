<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{detail}}</h2>
    <el-form ref="ruleform" :model="ruleform" :rules="rules" class="ruleForm">
     <el-form-item label="">
        <el-input v-model="billIndex" placeholder="请输入用于支付结算的账单的序号" class='inputClass' @input="change($event)">
          <template slot="prepend">账单序号</template>
        </el-input>
     </el-form-item>
   <div>
    <el-button type="primary" @click="cilckLogin()">交易上链</el-button>
  </div>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '应收账款支付结算',
      detail: '应收账款单据到期时核心企业向下游企业支付相应的欠款'
    }
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
