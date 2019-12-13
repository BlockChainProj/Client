<template>
  <div class="hello">
    <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{detail}}</h2>
    <el-form ref="ruleform" :model="ruleform" :rules="rules" class="ruleForm">
      <el-form-item label="" prop="publicKey">
        <el-input v-model="borrowKey" placeholder="应收账款的借款方公钥" class='inputClass'  @input="change($event)">
          <template slot="prepend">公钥A</template>
        </el-input>
     </el-form-item>
     <el-form-item label="" prop="publicKey">
        <el-input v-model="newLendKey" placeholder="应收账款的新贷款方公钥" class='inputClass'  @input="change($event)">
          <template slot="prepend">公钥B</template>
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
        placeholder="请输入转移应收账款的用途"
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '应收账款转让',
      detail: '公司间可以利用持有的应收账款单据作为资本进行交易，转让应收账款'
    }
  },
  methods:{
    change:function(e) {
      this.$forceUpdate()
    },
    cilckLogin: function(e){
      this.$message({
          message: '上链成功！',
          type: 'success'
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.inputClass{
  width:500px;
}
</style>
