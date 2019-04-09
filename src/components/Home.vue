<template>
  <div class="bg">
      <div class="mask" ref="mask"></div>
    <div class="top-logo">
      <img src="../assets/images/组17.png" ref="logo">
      <img src="../assets/images/12.png" class="logo2" ref="logo2">
    </div>
    <div class="search">
      <el-autocomplete
      class="search-box"
        v-model="state4"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
        @focus="handleFocus"
      >
        <el-button slot="append" class="btn-search">追溯查询</el-button>
      </el-autocomplete>
      <div class="hot-sea">
          <ul class="hot-key">
              <li><span>生产类商家</span></li>
              <li><span>服务类商家</span></li>
          </ul>
          <span>入库申请></span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/view/hfooter.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      restaurants: [],
      state4: '',
      timeout: null
    }
  },
  methods: {
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 300 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    handleFocus () {
    //   console.log(this.$refs.logo)
      this.$refs.mask.style.display = 'block'
      this.$refs.logo.style.display = 'none'
      this.$refs.logo2.style.display = 'block'
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>
<style lang="less">
#app{
    overflow: unset;
}
.bg {
  box-sizing: border-box;
  display: flex;
  position: relative;
  min-width: 810px;
  height: 100%;
  min-height: 1080px;
  // padding-top: 20%;
  background: url('../assets/images/组1.png') no-repeat;
  background-size: 100% 100%;
  flex-direction: column;
//   justify-content: center;
  .mask{
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      background-color: #fff;
      z-index: 1;
    }
  .top-logo {
    position: relative;
    height: 80px;
    margin-top: 20%;
    min-width: 810px;
    // margin: 0 auto;
    text-align: center;
    z-index: 3;
    .logo2{
        position: absolute;
        display: none;
        width: 140px;
        height: 140px;
        top: -54%;
        left: 50%;
        margin-left: -74px;
    }
  }
  .search{
      margin: 30px 31%;
      text-align: center;
      z-index: 3;
      .search-box{
          max-width: 800px;
          width: 100%;
          min-width: 500px;
          height:48px;

          .btn-search{
                background:#AE1E24;
                color: #fff;
                width: 120px;
                height: 48px;
                margin-right: -22px;
                border-radius: 0px;
          }
      }
      input{
          height: 48px;
          border-radius: 0px;
                    border:1px solid rgba(174,30,36,1);
      }
      input:focus{
                    border:1px solid rgba(174,30,36,1);
      }
  }
  .hot-sea{
      display: flex;
      padding: 13px 0;
      flex-direction: row;
      justify-content: space-between;
      z-index: 3;
      .hot-key{
        display: flex;
        flex-direction: row;
            li{
                margin: 0 10px;
                span{
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:rgba(77,77,77,1);
                    text-decoration: none;
                }
            }
      }
    span{
        margin-right: 10px;
        font-size:18px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        text-decoration:underline;
        color:rgba(174,30,36,1);
    }
  }
}

</style>
