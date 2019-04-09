<template>
  <div>
    <div class="header">
      <div id="main">
        <el-row>
          <el-col :span="15">
            <div class="grid-content logo bg-purple">
              <img src="../assets/images/logo.png" alt="" srcset="">
            </div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <div class="lang">
                <div class="earth">
                  <img src="../assets/images/earth.png" alt="" srcset="">
                  <span> 简体中文/English</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="middleImg">
      <img src="../assets/images/middleImg.png" alt="" srcset="">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  background: #ae1e24;

  #main {
    min-width: 1200px;
    max-width: 1400px;
    margin: 0 auto;
    height: 127px;
    display: flex;
    background: #ae1e24;
    .logo {
      height: 100%;
      img {
        margin: 24px 0;
        height: 76px;
        width: 60%;
        background: #ae1e24;
      }
    }
  }
}
.middleImg {
  height: 544px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
<style lang="less">
.header {
  .el-row {
    width: 100%;
    .lang {
      cursor: pointer;
      display: inline-block;
      color: #fefefe;
      line-height: 127px;
      font-size: 20px;
      width: 100%;
      text-align: right;
      .earth {
        display: inline-block;
        img {
          vertical-align: middle;
        }
        span:last-child{
          border-bottom:1px solid #fff;
        }
      }

    }
  }
}
</style>
