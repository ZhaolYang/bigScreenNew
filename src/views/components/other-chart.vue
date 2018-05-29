<template>
  <i-article>
        <article>
            <Demo title="南丁格尔图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-rose.png">
                    </div>
                </div>
                <div slot="desc">
                    <p><a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/chartrose.html" target="_blank">实例参考</a></p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.rose }}</i-code>
            </Demo>

            <Demo title="月份环形图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-monthlypie.png">
                    </div>
                </div>
                <div slot="desc">
                    <p><a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/ringpie.html" target="_blank">实例参考</a></p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.monthlypie }}</i-code>
            </Demo>

            <Demo title="对称柱状图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-symmetrybar.png">
                    </div>
                </div>
                <div slot="desc">
                    <p><a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/symmetrybar.html" target="_blank">实例参考</a></p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.symmetrybar }}</i-code>
            </Demo>

            <Demo title="自定义tooltip+map">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-userdefinetooltip.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        此处tooltip的dom及样式需要另外编写
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/mapcustomtip.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.userdefinetooltip }}</i-code>
            </Demo>

            <Demo title="扇形图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-fan.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        此图表中间的间隔由0值隔开
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/charthalfpie.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.fan }}</i-code>
            </Demo>

            <Demo title="自定义图例">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-userdefinelegend.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/customlegend.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.userdefinelegend }}</i-code>
            </Demo>

            <Demo title="地图下钻">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-deepmap.gif">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        需要引入下钻地图数据
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/mapdrill.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.deepmap }}</i-code>
            </Demo>

            <Demo title="饼图点击旋转">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-rotatepie.gif">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        点击item动态计算旋转角度
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/pierotate.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.rotatepie }}</i-code>
            </Demo>

            <Demo title="图表放大">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/chart-zoom.gif">
                    </div>
                </div>
                <div slot="desc">
                    <p>
                        封装图表放大的方法
                        <a href="http://192.168.201.159/fedemo/pages/echartsdemo/demopage/chartzoomin.html" target="_blank">实例参考</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.zoom }}</i-code>
            </Demo>

        </article>
    </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/otherChart";
import Anchor from "../../components/anchor.vue";
import Demo from "../../components/demo.vue";

export default {
  components: {
    iArticle,
    iCode,
    Anchor,
    Demo
  },
  data() {
      return {
          code: Code
      }
  }
}
</script>

<style scoped>
.img-ct {
    height: 400px;
}

.img-ct:before {
    content: '';
    display: block;
    float:left;
    height: 100%;
}

.demo-img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 400px;
}
</style>

