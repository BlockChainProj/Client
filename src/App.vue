<template>
  <div id="app">
<el-menu
  :default-active="this.$route.path"
  :router="true"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
   <h1 id="headTitle">FISCO-BCOS供应链系统金融平台</h1>
   <el-menu-item index="/" >主页</el-menu-item>
   <el-menu-item index="/list">查询账单 </el-menu-item>
  <el-menu-item index="/issue">签发应收账款 </el-menu-item>
  <el-menu-item index="/transfer">应收账款转让</el-menu-item>
  <el-menu-item index="/finace">银行融资</el-menu-item>
  <el-menu-item index="/settle">支付结算</el-menu-item>
  <el-menu-item style='float:right' type="primary" @click="drawer = true">查看公钥地址</el-menu-item>
</el-menu>

</el-row>
    <!--<img src="./assets/logo.png">-->
    <el-drawer
  title="各公司公钥地址"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose"
  :with-header="false">
    <el-table
    @cell-dblclick="celldblclick"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="companyName"
        label="公司名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="公钥地址">
      </el-table-column>
      
    </el-table>

</el-drawer>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
       drawer: false,
      direction: 'rtl',
      tableData: [{
            companyName: '银行',
            address: '0xae8a42872891f7c03d2ffb5b23ca909ae254f38e'
          }
        ,{
            companyName: '公司A',
            address: '0xa599d3672309bd85c66aaa67a0ab5dfff4ba4d88'
          }, {
            companyName: '公司B',
            address: '0x5111806f9ee20565de1325b4f82d1167b7a0a849'
          }, {
            companyName: '公司C',
            address: '0x4d78a5db2536bf7318eb78b1cb51ffe347b71b3e'
          }, ]
    };
  },
   methods: {
      handleClose(done) {
        
            done();
    
      }
      
   }
}
</script>

<style>
.keyItem{
  float:right;
}
#headTitle{
  line-height: 1.2;
  height: 36.8px;
  float: left;
  font-size: 30px;
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #FFD04B;
  width: 500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  margin: 0;
}
.log {
  height: 60px;
}
</style>
