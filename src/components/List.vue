<template>
   <div class="hello">
    <div class="hello">
    <h1>{{ msg }}</h1>
       <el-container >
    <el-main>
      <el-table :data="ReceiptList">
        <el-table-column prop="0" label="借款者地址" width="200">
        </el-table-column>
        <el-table-column prop="1" label="贷款者地址" width="200">
        </el-table-column>
        <el-table-column prop="2" label="金额" width="120">
        </el-table-column>
        <el-table-column prop="3" label="账单详细信息" width="200">
        </el-table-column>
	    <el-table-column prop="4" label="时间" width="200">
        </el-table-column>
      <el-table-column prop="5" label="是否用于融资" width="200">
        </el-table-column>
      <el-table-column prop="5" label="是否受银行任可" width="200">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
  <br>
   <div>
    <el-button type="primary" @click="cilckLogin()">{{loadinginfo}}</el-button>
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
      ReceiptList:[],
      loadinginfo:'更新加载'
    }
  },
  methods:{
    change:function(e) {
      this.$forceUpdate()
    },
    cilckLogin: function(){
      this.loadinginfo = '加载中'
      var that = this
      this.$axios.request({
        url: 'http://localhost:8085/bills?accountAddress=1',
        method: 'GET',
        responseType: 'json'
      }).then(function (response) {
        // console.log(response.data)
        that.ReceiptList = response.data
	var len = that.ReceiptList.length
	for(var i = 0; i < len; i++){
		 var date = new Date(that.ReceiptList[i][4]);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        	var Y = date.getFullYear() + '-';
          var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var m = date.getMinutes() + ':';
          var s = date.getSeconds();
          that.ReceiptList[i][4] = Y+M+D+h+m+s
          if(that.ReceiptList[i][5])
            that.ReceiptList[i][5]='YES'
          else
            that.ReceiptList[i][5] = 'NO'
          if(that.ReceiptList[i][6])
            that.ReceiptList[i][6]='YES'
          else
            that.ReceiptList[i][6] = 'NO'
        }
        that.loadinginfo = '更新加载'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container{
  width:1400px;
  margin:0 auto;
}
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
