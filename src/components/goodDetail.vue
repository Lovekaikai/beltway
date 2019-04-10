<template>
    <div id="goodDetail">
        <Bheader></Bheader>
        <div class="store">
            <div id="main">
                <!-- 公司介绍 -->
                <div class="goodList clearfix">
                    <div class="shopImage">
                        <img src="../assets/images/shopImage.png" alt="" srcset="">
                    </div>
                    <div class="goodHeader clearfix">
                        <div class="left">
                            御和之乡（金美晨1号）大米
                        </div>
                        <div class="right">入库时间：2019年09月18号 12:34:23</div>
                    </div>
                    <div class="shopName">
                        商品详情
                    </div>
                    <div class="goodDetail">
                        <el-row class="detail">
                            <el-col :span="6">
                                <div class="grid-content bg-purple pr">参数名次：</div>
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
                                <div class="grid-content bg-purple pr">
                                    工艺流程：</div>
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
                            <el-col :span="5">
                                <div class="grid-content bg-purple pr">产品描述：</div>
                            </el-col>
                            <el-col :span="19">
                                <div class="grid-content bg-purple-light">
                                    <div class="goodInput">

                                        坐落于延边朝鲜族自治州-和龙市东城镇兴城村，位于北纬41度，与贡米之乡北海道和五常的纬度是一样的，年日照2300-2500小时，无霜期为100-150天，年降雨量500-700毫升，昼夜温差10度以上，最大可达17.5度。
                                        地处长白山脚下的海兰江平原，土地肥沃，四季分明，全年雨量充沛，温度适宜，一年一期稻，生育期为150天，属于晚稻。

                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <div class="storeLogo">
            <div id="main">
                <!-- 公司介绍 -->
                <div class="goodList clearfix">
                    <div class="shopImageLogo">
                        <img src="../assets/images/logo2.png" alt="" srcset="">
                    </div>
                    <div class="goodHeader clearfix">
                        <div class="left">
                            企业详情
                        </div>
                    </div>
                    <div class="goodDetail" v-if="companyInfo.name">
                        <el-row class="detail">
                            <el-col :span="6">
                                <div class="grid-content bg-purple pr">商家名称: </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="grid-content bg-purple-light">
                                    <div class="goodInput">
                                        {{companyInfo.name}}
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="detail" v-if="companyInfo.category">
                            <el-col :span="6">
                                <div class="grid-content bg-purple pr">经营品类: </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="grid-content bg-purple-light">
                                    <div class="goodInput">
                                        {{companyInfo.category}}
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="detail" v-if="companyInfo.content">
                            <el-col :span="6">
                                <div class="grid-content bg-purple pr">商家简介: </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="grid-content bg-purple-light">
                                    <div class="goodInput">
                                        <div v-html="companyInfo.content"></div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="rightDetail">
                        <el-row class="detail">
                            <el-col :span="5">
                                <div class="grid-content bg-purple line pr">入库时间:</div>
                            </el-col>
                            <el-col :span="15">
                                <div class="grid-content bg-purple-light ">
                                    <div class="goodInput">
                                        {{$Common.formatTime(1554887014||0)}}
                                    </div>
                                </div>
                            </el-col>

                        </el-row>

                        <el-row class="detail">
                            <el-col :span="5">
                                <div class="grid-content bg-purple line">
                                    商家证书 :</div>
                            </el-col>
                            <el-col :span="19">
                                <div class="grid-content bg-purple-light showImageBox">
                                    <div class="imageBox" v-for="(item,index) in companyInfo.certificate" :key="index">
                                        <img :src="item" alt="" srcset="">
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </div>
            </div>
        </div>
        <div class="imgShow">
            <h3>商品详情图</h3>
            <img src="../assets/images/show.png" alt="" srcset="">
            <img src="../assets/images/food.png" alt="" srcset="">
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
        addtime: '1541721875',
        companyid: null,
        content: null,
        description: null,
        detailimg: ['http://zhuisu.brchainshop.com//ueditor/php/upload/image/20181109/1541721870464295.jpg'],
        id: '58',
        images: ['http://zhuisu.brchainshop.com//ueditor/php/upload/image/20181109/1541721859139102.jpg'],
        list: false,
        name: 'zhiyou',
        others: null,
        parameter: null,
        price: null,
        sort: '0',
        state: null,
        technology: null,
        the: '157' },
      companyInfo: {
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
    this.getGoodDetail()
  },
  methods: {
    getGoodDetail () {
      this.$Common.get('http://bri.brchainshop.com/zerg/public/api/z1/goodsDetail?goodID=58').then((data) => {
        console.log(data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.store,
.storeLogo {
  overflow: hidden;
  min-width: 1200px;
  max-width: 1440px;
  margin: 48px auto 10px;
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
      box-sizing: border-box;
      flex-wrap: wrap;
      .imageBox {
        width: 175px;
        height: 128px;
        background: red;
        margin: 2px;
        img {
          width: 100%;
        }
      }
    }
  }
  .goodList {
    // border-bottom: 1px solid #999999;
    // background: red;
    margin: auto 0;
    min-height: 360px;
    padding: 30px 0 30px 420px;
    position: relative;
    .shopImage {
      position: absolute;
      left: 40px;
      top: 30px;
    }
    .shopImageLogo {
      position: absolute;
      left: 250px;
      top: 30px;
    }
    .goodHeader {
      margin: 15px 0;
      .left {
        float: left;
        margin-left: 35px;
        font-size: 32px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(174, 30, 36, 1);
      }
      .right {
        float: right;
        margin-right: 10px;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        // line-height: 47px;
      }
    }
    .shopName {
      margin-left: 35px;
      font-size: 24px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 47px;
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
      text-align: right;
      font-size: 18px;
      .detail {
        margin: 8px 0;
      }
      .goodInput {
        width: 80%;
        padding-left: 10px;
        // width: 284px;
        min-width: 200px;
        text-align: left;
        min-height: 30px;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 30px;
        background: rgba(250, 250, 250, 1);
        border: 1px solid rgba(204, 204, 204, 1);
      }
    }
    .rightDetail {
      font-size: 18px;
      text-align: right;
      width: 50%;
      //   height: 50px;
      // background: yellow;
      float: left;
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
              width:100%;
         }
        }
      }
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
.storeLogo {
  overflow: hidden;
  min-width: 1200px;
  max-width: 1440px;
  margin: 0 auto 10px;
  .pr {
    margin-right: 10px;
  }
  .goodHeader {
    .left {
      font-size: 24px !important;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1) !important;
    }
  }
  .goodList {
    padding: 0 0 0 420px !important;
  }
}
.imgShow {
  min-width: 1200px;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #999999;
  padding-bottom: 72px;
  text-align: center;
  h3 {
    font-size: 40px;
    font-family: MicrosoftYaHeiLight;
    font-weight: 300;
    color: rgba(165, 34, 36, 1);
    margin-bottom: 72px;
  }
  img {
    width: 80%;
  }
}
</style>
<style lang="less" scoped>
.middle-box {
  margin: 8px 0;
}
#main {
  min-width: 1200px;
  max-width: 1440px;
  //   height: 100%;
  overflow: hidden;
  margin: 0 auto;
}
</style>
