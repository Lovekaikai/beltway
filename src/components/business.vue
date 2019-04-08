<template>
  <div id="business">
    <Bheader></Bheader>
    <div class="store">
      <div id="main">
        <div class="context" style="  border-bottom: 1px solid #999999;">
          <el-row>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <div class="box">
                  <img src="../assets/images/taotaoju.png" alt="" srcset="">
                </div>
                <div class="bottom">
                  <img src="../assets/images/logo2.png" alt="" srcset="">
                </div>
              </div>
            </el-col>
            <el-col :span="9" class="middle">
              <div class="grid-content bg-purple">
                <div class="middle-header">广州陶陶居饮食有限公司</div>
                <div class="middle-content" style="margin-top:22px">
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商品名称 :</div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州-和龙市东城镇兴城村，位于北纬41度，与贡米之乡北海道和五常的纬度是一样的，年日照2300-2500小时，无霜期为100-150天，年降雨量500-700毫升，昼夜温差10度以上，最大可达17.5度。
                          地处长白山脚下的海兰江平原，土地肥沃，四季分明，全年雨量充沛，温度适宜，一年一期稻，生育期为150天，属于晚稻。</div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商品名称 :</div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州</div>
                      </el-col>
                    </el-row>

                  </div>
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商品名称 :</div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州</div>
                      </el-col>
                    </el-row>

                  </div>
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商品名称 :</div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州</div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商品名称 :</div>
                      </el-col>
                      <el-col :span="16">
                        <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州</div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="10" class="goodRight">
              <div class="grid-content bg-purple-light">
                <div class="middle-box">
                  <el-row>
                    <el-col :span="6">
                      <div class="grid-content bg-purple line">商品名称 :</div>
                    </el-col>
                    <el-col :span="16">
                      <div class="grid-content bg-purple-light  line-box"> 坐落于延边朝鲜族自治州</div>
                    </el-col>

                  </el-row>
                </div>
                <el-row>
                  <el-col :span="6">
                    <div class="grid-content bg-purple line">商品名称 :</div>
                  </el-col>
                  <el-col :span="18">
                    <div class="grid-content bg-purple-light showImageBox">
                      <div class="imageBox">

                      </div>
                      <div class="imageBox">
                      </div>
                      <div class="imageBox">
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="goodList">
          <div class="ListBox">
            <div class="list">
              <div class="left">
                <div class="shopImage">
                  <img src="../assets/images/shopImage.png" alt="" srcset="">
                </div>
              </div>
              <div class="shopName">
                <span>产品名称</span>
              </div>
              <div class="time">
                <span>入库时间：2019年09月18号 12:34:23</span>
              </div>
              <div class="right">

                <div class="shopDetail">
                  sadfdsafasd
                </div>
                <div class="shopDetail">
                  sadfdsafasd
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Bheader from '@/view/header.vue'
export default {
  components: {
    Bheader
  }
}
</script>
<style lang="less" scoped>
.store {
  overflow: hidden;
  margin-top: 48px;
  margin-bottom: 10px;
  .box {
    width: 215px;
    height: 215px;
    border: 2px dotted saddlebrown;
    margin-bottom: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
    margin-left: 78px;
  }
  .middle {
    .middle-header {
      padding-left: 20px;
      font-size: 32px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(165, 34, 36, 1);
    }
    .middle-content {
      padding-left: 50px;
      .line {
        font-size: 18px;
        text-align: center;
      }
      .line-box {
        vertical-align: middle;
        width: 100%;
        display: inline-block;
        margin-left: 10px;
        line-height: 30px;
        min-height: 30px;
        background: rgba(250, 250, 250, 1);
        font-size: 16px;
        padding-left: 5px;
        border: 1px solid rgba(204, 204, 204, 1);
      }
    }
  }
  .goodRight {
    line-height: 30px;
    margin-top: 60px;
    .line {
      text-align: right;
      vertical-align: middle;
    }
    .line-box {
      vertical-align: middle;
      width: 100%;
      display: inline-block;
      margin-left: 10px;
      line-height: 30px;
      min-height: 30px;
      background: rgba(250, 250, 250, 1);
      font-size: 16px;
      padding-left: 5px;
      border: 1px solid rgba(204, 204, 204, 1);
    }
    .showImageBox {
      display: flex;
      padding-left: 5px;
      flex-wrap: wrap;
      .imageBox {
        width: 180px;
        height: 128px;
        background: red;
        margin: 5px;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.middle-box {
  margin: 8px 0;
}
#main {
  height: 100%;
}

.goodList {
  .ListBox {
    margin: 30px 40px;
  }
  .ListBox:last-child {
    margin: 0 40px 30px;
  }
  .list {
    position: relative;
    height: 420px;
    border-bottom: 1px solid #999999;
    .left {
      float: left;
    }
    .shopName {
      vertical-align: top;
      display: inline-block;
      margin: 30px 0 30px 70px;
      span:first-child {
        margin-right: 10px;
        font-size: 24px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 47px;
      }
      .time {
        position: absolute;
        right: 20px;
        top: 50px;
      }
      .right {
        float: left;

        .shopDetail {
          width: 50%;
        }
      }
    }
    .shopImage {
      margin: 30px 0 30px 0;
      display: inline-block;
    }
  }
  .list:last-child {
    border-bottom: none;
  }
}
</style>
