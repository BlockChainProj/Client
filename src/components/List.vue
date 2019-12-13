<template>
   <div class="hello">
    <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="item in ReceiptList">
        </li>
      </ul>
    </div>
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
      detail: '供应链上的企业可以利用应收账款单据向银行申请融资',
      ReceiptList:[]
    }
  },
  methods:{
    change:function(e) {
      this.$forceUpdate()
    },
    cilckLogin: function(){
      var that = this
      this.$axios.request({
        url: 'http://localhost:8085/bills?accountAddress=1',
        method: 'GET',
        responseType: 'json'
      }).then(function (response) {
        // console.log(response.data)
        that.ReceiptList = response.data
        console.log(that.ReceiptList[0])
      })
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
