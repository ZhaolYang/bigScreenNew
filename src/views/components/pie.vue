<template>
  <i-article>
        <article>
            <Anchor title="百分比系列" h2></Anchor>
            <Demo title="圆环百分比">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type1.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>常用于表示某类数据的占比，如满意度数据，百分比，描述等内容都可以通过echarts进行配置，样式通过富文本标签实现</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.percent1 }}</i-code>
            </Demo>

            <Demo title="类仪表盘百分比+渐变色">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type10.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>看起来是仪表盘，其实是饼图，数据渲染前需要将value按照饼图的角度比例调整。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.guagepie }}</i-code>
            </Demo>

            <Demo title="满意度组合">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type6.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>这个组合出现N次了，当你遇到的时候，直接来copy吧</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.satisfypie }}</i-code>
            </Demo>

            <Anchor title="数值系列" h2></Anchor>
            <Demo title="半环">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type2.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>此图表经常出现，实际灌入数据后效果很差，慎用。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.num1 }}</i-code>
            </Demo>

            <Demo title="常用面积图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type3.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>此图表经常出现。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.area }}</i-code>
            </Demo>

            <Demo title="富文本标签">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type4.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>标签通过富文本配置实现。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.richpie }}</i-code>
            </Demo>

            <Demo title="双类环形图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type5.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>此类图表通常内圈为大类数据，外圈为大类下的小类。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.doublepie }}</i-code>
            </Demo>

            <Demo title="带时间轴的环形图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type7.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>虽说是个简单的时间轴环形图，但配起来还是挺麻烦的，所以整理进来以供自取。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.timelinepie }}</i-code>
            </Demo>

            <Demo title="选中状态环形图">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type8.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>选中状态用于突出表示某一项数据。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.selectedpie }}</i-code>
            </Demo>

            <Demo title="成对数据">
                <div slot="demo">
                    <div class="img-ct">
                        <img class="demo-img" src="../../images/pie-type9.png">
                    </div>
                </div>
                <div slot="desc">
                    <p>数据是一对一对展示的，如图。</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.couplepie }}</i-code>
            </Demo>
            
        </article>
    </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/pie";
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