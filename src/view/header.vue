<template>
    <div class="header">
        <div id="main">
            <el-row>
                <el-col :span="18">
                    <div class="grid-content bg-purple">
                        <div class="logo">
                            <img src="../assets/images/logo.png" alt="" srcset="">
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
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
  height: 127px;
  width: 100%;
  background: #ae1e24;
  #main {
    height: 127px;
    display: flex;
    background: #ae1e24;
    .logo {
      height: 100%;
      width: calc(100% - 230px);
      img {
        margin: 24px 0;
        height: 76px;
        background: #ae1e24;
      }
    }

    //   }
  }
  .middleImg {
    height: 544px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
<style lang="less">
.header {
  .el-row {
    width: 100%;
    .lang {
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
      }
    }
  }
}
</style>
