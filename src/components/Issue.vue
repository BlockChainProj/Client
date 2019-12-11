<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{detail}}</h2>
    <el-form ref="ruleform" :model="ruleform" :rules="rules" class="ruleForm">
      <el-form-item label="">
        <el-input v-model="lendKey" placeholder="请输入贷款方公钥" class='inputClass'  @input="change($event)">
          <template slot="prepend">公钥</template>
        </el-input>
     </el-form-item>
     <el-form-item label="">
        <el-input v-model="money" placeholder="请输入借款金额/元" class='inputClass'  @input="change($event)">
          <template slot="prepend">金额</template>
        </el-input>
     </el-form-item>
   <br>
   <div>
      <el-input
        type="textarea"
        placeholder="请输入借款信息"
        v-model="textarea"
        maxlength="30"
        show-word-limit
        class="inputClass"
        @input="change($event)"
      >
      </el-input>
   </div>
   <br>
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
      msg: '签发应收账款',
      detail: '公司间商品交易签订应收账款单据',
      ruleForm:{
        publicKey:'',
      },
      rules:{
        publicKey:[
          {required: true, message:' ', trigger:'blur'}
        ]
      }
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
.el-form-item__error{
  top:50px;
  position:relative;
}
.inputClass{
  width:500px;
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
