<style scoped>
.hotword {
  position: relative;
  width: 100%;
  height: 330px;
}
.hotword > div {
  position: absolute;
  border-radius: 50%;
  text-align: center;
}
.hotword01 {
  top: 40px;
  left: 80px;
  width: 80px;
  height: 80px;
  line-height: 35px;
  background-color: #f5ffb3;
  animation: bubbleMove 3s ease-in-out infinite;
}
.hotword02 {
  top: 150px;
  left: 70px;
  width: 60px;
  height: 60px;
  line-height: 25px;
  background-color: #c6eeff;
  animation: bubbleMove 5s ease-in-out infinite;
}
.hotword03 {
  top: 240px;
  left: 100px;
  width: 70px;
  height: 70px;
  line-height: 30px;
  background-color: #e3b3ff;
  animation: bubbleMove 7s ease-in-out infinite;
}
.hotword04 {
  top: 80px;
  left: 190px;
  width: 70px;
  height: 70px;
  line-height: 30px;
  background-color: #e3b3ff;
  animation: bubbleMove 7s ease-in-out infinite;
}
.hotword05 {
  top: 180px;
  left: 210px;
  width: 80px;
  height: 80px;
  line-height: 35px;
  background-color: #e3b3ff;
  animation: bubbleMove 3s ease-in-out infinite;
}
.hotword06 {
  top: 80px;
  right: 100px;
  width: 70px;
  height: 70px;
  line-height: 30px;
  background-color: #8bddff;
  animation: bubbleMove 3s ease-in-out infinite;
}
.hotword07 {
  top: 180px;
  right: 120px;
  width: 80px;
  height: 80px;
  line-height: 35px;
  background-color: #f5ffb3;
  animation: bubbleMove 5s ease-in-out infinite;
}
.hotword08 {
  top: 100px;
  right: 200px;
  width: 90px;
  height: 90px;
  line-height: 40px;
  background-color: #f5ffb3;
  animation: bubbleMove 4s ease-in-out infinite;
}
.hotword09 {
  top: 230px;
  right: 220px;
  width: 70px;
  height: 70px;
  line-height: 35px;
  background-color: #f5ffb3;
  animation: bubbleMove 6s ease-in-out infinite;
}
@keyframes bubbleMove {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}
.chart-box {
  height: 300px;
}
#chart,
#chart2 {
  width: 100%;
  height: 300px;
}
.chart-car {
  display: block;
  margin: 40px auto;
  width: 500px;
}
</style>
<template>
    <i-article>
        <article>
            <Demo title="浮动气泡">
                <div slot="demo">
                    <div class="box">
                        <div class="hotword">
                            <div class="hotword01">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword02">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword03">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword04">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword05">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword06">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword07">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword08">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                            <div class="hotword09">
                                <p>国土局</p>
                                <span>1100</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>浮动气泡采用最简单的dom上下浮动动画实现，无需js</p>
                </div>
                <i-code lang="HTML" slot="code">{{ code.bubble }}</i-code>
            </Demo>

            <Demo title="echarts词云">
                <div slot="demo">
                    <div class="chart-box">
                        <div id="chart"></div>
                    </div>
                </div>
                <div slot="desc">
                    <p>Echarts词云，需要额外引入对应的js文件
                        <a href="./assets/echarts-wordcloud.min.js" download>echarts-wordcloud.min.js</a>
                        </p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.cloudWord }}</i-code>
            </Demo>

            <Demo title="标签化">
                <div slot="demo">
                    <div class="chart-box">
                      <img class="chart-car" src="../../images/chartlabeleg.png" />
                    </div>
                </div>
                <div slot="desc">
                    <p>Echarts词云，基于图片轮廓渲染</p>
                </div>
                <i-code lang="javascript" slot="code">{{ code.mask }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Demo from "../../components/demo.vue";
import Code from "../../code/cloudWord";
const echarts = require("echarts");
require("echarts-wordcloud");

export default {
  components: {
    iArticle,
    iCode,
    Demo
  },
  data() {
    return {
      code: Code
    };
  },
  computed: {},
  methods: {
    initChart() {
      let colorarr = [
        "#f5ffb3",
        "#c6eeff",
        "#8bddff",
        "#e3b3ff",
        "#678b86",
        "#367ab3"
      ];
      let chart = echarts.init(document.getElementById("chart"));
      chart.setOption({
        series: [
          {
            type: "wordCloud",
            name: "hotword",
            gridSize: 30,
            sizeRange: [15, 28],
            rotationRange: [0, 0],
            shape: "circle",
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color: function() {
                  var x = colorarr.length;
                  var rand = parseInt(Math.random() * x);
                  return colorarr[rand];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#fff",
                color: "pink"
              }
            },
            data: [
              { name: "张三", value: 110 },
              { name: "A区08市监局", value: 100 },
              { name: "国税局", value: 100 },
              { name: "80后", value: 100 },
              { name: "非常满意", value: 250 },
              { name: "男性同胞", value: 90 },
              { name: "星期三", value: 100 },
              { name: "政策法规", value: 230 },
              { name: "A区08市监局", value: 100 },
              { name: "9:30-10:30", value: 150 },
              { name: "国税局", value: 100 },
              { name: "非常满意", value: 100 },
              { name: "服务质量问题", value: 120 },
              { name: "男性同胞", value: 120 },
              { name: "张三", value: 100 }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>