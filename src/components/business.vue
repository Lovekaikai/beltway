<template>
  <div id="business">
    <Bheader></Bheader>
    <div class="store">
      <div id="main">
        <!-- 公司介绍 -->
        <div class="context" style="  border-bottom: 1px solid #999999;    padding-bottom: 15px;">
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <div class="box">
                  <img :src="info.icon" alt="" srcset="">
                </div>
                <div class="bottom">
                  <img src="../assets/images/logo2.png" alt="" srcset="">
                </div>
              </div>
            </el-col>
            <el-col :span="10" class="middle">
              <div class="grid-content bg-purple">
                <div class="middle-header">{{info.name|| ""}}</div>
                <div class="middle-content" style="margin-top:22px">
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商家名称 :</div>
                      </el-col>
                      <el-col :span="16" v-if="info.name">
                        <div class="grid-content bg-purple-light  line-box">{{info.name}}</div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="middle-box">
                    <el-row>
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">经营品类 :</div>
                      </el-col>
                      <el-col :span="16" v-if="info.category">
                        <div class="grid-content bg-purple-light  line-box"> {{info.category}}</div>
                      </el-col>
                    </el-row>

                  </div>
                  <div class="middle-box">
                    <el-row v-if="info.content">
                      <el-col :span="6">
                        <div class="grid-content bg-purple line">商家简介 :</div>
                      </el-col>
                      <el-col :span="16"  >
                        <div class="grid-content bg-purple-light  line-box"> <div v-html="info.content"></div></div>
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
                    <el-col :span="8">
                      <div class="grid-content bg-purple line">入库时间 :</div>
                    </el-col>
                    <el-col :span="10">
                      <div class="grid-content bg-purple-light  line-box"> {{$Common.formatTime(1554887014||0)}}</div>
                    </el-col>
                  </el-row>
                </div>
                <el-row  v-if="info.certificate.length">
                  <el-col :span="8">
                    <div class="grid-content bg-purple line">
                      商家证书 :</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content bg-purple-light showImageBox" >
                      <div class="imageBox" v-for="(item,index) in info.certificate" :key="index">
                          <img :src="item" alt="" srcset="">
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 公司介绍 -->
        <div class="goodList">
          <div class="shopImage">
            <img src="../assets/images/shopImage.png" alt="" srcset="">
          </div>
          <div class="goodHeader clearfix">
            <div class="left">
              产品名称
            </div>
            <div class="right">入库时间：2019年09月18号 12:34:23</div>
          </div>
          <div class="goodDetail">
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">规格参数：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">生产许可证：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">执行标准：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">工艺流程：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">包装方式：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>

          </div>
          <div class="rightDetail">
            <el-row class="detail">
              <el-col :span="6">
                <div class="grid-content bg-purple pr">产品描述：</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <div class="goodInput">
                    35小包/打包
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <Bfooter></Bfooter>
  </div>
</template>
<script>
import Bheader from '@/view/header.vue'
import Bfooter from '@/view/footer.vue'
export default {
  components: {
    Bheader,
    Bfooter
  },
  data () {
    return {
      info: {
        'id': '157',
        'name': '云天化集团',
        'address': '云南省昆明市滇池路1417号',
        'corporation': '张文学',
        'certificate': [
          'http://zhuisu.brchainshop.com//ueditor/php/upload/image/20180510/1525939703241324.jpg',
          'http://zhuisu.brchainshop.com//ueditor/php/upload/image/20180510/1525939703241324.jpg',
          'http://zhuisu.brchainshop.com//ueditor/php/upload/image/20180510/1525939703241324.jpg'
        ],
        'icon': 'http://zhuisu.brchainshop.com//ueditor/php/upload/image/20180625/1529895016288369.png',
        'type': '其他有限责任公司',
        'category': '投资、投资咨询，',
        'contact': '400-860-191',
        'time': 1554887014,
        content: '<p style="text-indent: 2em; line-height: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(89, 89, 89);">广州玛皇世箱包有限公司是箱包皮具、皮料、五金等产品专业生产加工的公司，拥有完整、科学的质量管理体系。广州玛皇世箱包有限公司的诚信、实力和产品质量获得业界的认可。欢迎各界朋友莅临参观、指导和业务洽谈。</span></p>'
      }
    }
  },
  created () {
    this.getCompanyDetail()
  },
  // 获取企业详情
  methods: {
    getCompanyDetail () {
      let cmpId = 158
      this.$Common.get(`http://bri.brchainshop.com/zerg/public/api/z1/companyOneInfo?id=${cmpId}`).then((data) => {
        console.log(data)
      }).catch((data) => {
        console.log(data)
      })
    }
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
        min-width: 415px;
        vertical-align: middle;
        width: 100%;
        display: inline-block;
        // margin-left: 10px;
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
        img{
          width: 100%;
        }
      }
    }
  }
  .goodList {
    overflow: hidden;
    border-bottom: 1px solid #999999;
    // background: red;
    margin: auto 40px;
    min-height: 360px;
    padding: 30px 0 30px 420px;
    position: relative;
    .shopImage {
      position: absolute;
      left: 0;
      top: 30px;
    }
    .goodHeader {
      // padding-left:2%;
      .left {
        float: left;
        // margin-left: 35px;
        font-size: 24px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        // line-height: 47px;
      }
      .right {
        float: right;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 47px;
      }
    }
    .clearfix:after {
      content: ""; //设置内容为空
      height: 0; //高度为0
      line-height: 0; //行高为0
      display: block; //将文本转为块级元素
      visibility: hidden; //将元素隐藏
      clear: both//清除浮动;
    }
    .goodDetail {
      width: 50%;
      min-height: 50px;
      // background: yellow;
      float: left;
      // text-align: right;
      font-size: 18px;
      .detail {
        margin: 8px 0;
      }
      .goodInput {
        // width: 284px;
        padding-left: 10px;
        text-align: left;
        min-height: 30px;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 38px;
        line-height: 30px;
        background: rgba(250, 250, 250, 1);
        border: 1px solid rgba(204, 204, 204, 1);
      }
    }
    .rightDetail {
      font-size: 18px;
      text-align: right;
      width: 50%;
      height: 50px;
      // background: yellow;
      float: left;
      .goodInput {
        text-align: left;
        padding-left: 5px;
        // width: 284px;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 38px;
        min-height: 30px;
        line-height: 30px;
        background: rgba(250, 250, 250, 1);
        border: 1px solid rgba(204, 204, 204, 1);
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
  min-width: 1360px;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
}
</style>
