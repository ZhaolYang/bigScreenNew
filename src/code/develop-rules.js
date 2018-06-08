let code = {};

code.lib = `
-- css  // 全局css、字体资源
    -- fonts  // 三方字体包
    -- libs  // 三方css库
    common.css  // 重置样式和公共样式
    a.css  // 页面css
-- js
    -- libs  // 三方库、常用插件
    common.js  // 公共js
    a.js // 页面js
-- images 图片资源
-- mock //模拟数据
    jquery.mockjax.js  // mockjax插件
    _testa.js // 页面a的模拟数据文件
readme.txt  // readme
a.html //页面html
`;

code.import = `
// a.html:
// 引入jQuery和echarts
<script src="./js/lib/jquery-1.11.0.min.js"></script>
// 默认引入4.1.0版本echarts，另外也提供3.x版本echarts便于切换
<script src="./js/lib/echarts4.1.0.min.js"></script>

<!-- 测试数据，后台对接后请删除mock路径下引用 -->
<script src="./mock/jquery.mockjax.js"></script> // 引入mockjax用于模拟数据
<script src="./mock/_testa.js"></script> // 引入模拟数据

<!-- mustache引入，如需滚动列表，额外引入scrollBox -->
<script src="./js/libs/mustache.js"></script>
<!-- 注意，scrollBox不支持table元素的列表滚动 -->
<script src="./js/libs/jquery.scrollbox.min.js"></script> 

<script src="./js/a.js"></script> // 引入页面脚本
`;

code.js = `
;(function($){
  // 定义配置及图表变量，图表对对象命名一定要注意语义化，不能用类似chartpie，chartbar，chart1，chart2的命名方式
  var chartOption, chartA, chartB;

  function initChart() {
    chartOption = {
      // 此处为图表a初始化配置
    };
    chartA = echarts.init(document.getElementById("chartAId"));
    chartA.setOption(chartOption);

    chartOption = {
      // 此处为图表b初始化配置
    };
    chartB = echarts.init(document.getElementById("chartBId"));
    chartB.setOption(chartOption);
  }
  // 初始化所有图表
  initChart();

  function renderChartA(data) {
    // 此处为渲染图表a的数据处理方法
  }

  function renderChartB(data) {
    // 此处为渲染图表b的数据处理方法
  }

  // 渲染列表方法
  function renderList(data) {
    var $listContainer = $("#list-container"),
      $ul = $("#list"),
      temp = $("#list-temp").html(),
      renderData = data.concat(data); // 如果存在斑马线背景的列表样式，将渲染数据数量*2，确保数据量为偶数，避免因为奇数条数据导致的背景色跳动问题。

    $ul.empty().append(Mustache.render(temp, { listData: data })); // 渲染

    $ul.find("li:odd").css({
      backgroundColor: "#e6f1ff"
    }); //dom渲染完成后，通过js添加斑马线背景色

    $listContainer.scrollbox(); //启动列表滚动效果，一般无需传入额外配置，默认效果即可
  }

  // 定义数据请求方法
  function getData() {
    $.ajax({
      url: "mockUrl",
      type: "post",
      dataType: "json",
      contentType: "application/json",
      data: {},
      success: function(data) {
        // 请求到数据后分别调用各图表的渲染方法
        renderChartA(data.dataA);
        renderChartB(data.dataB);

        // 渲染列表
        renderList(data.listData);
      }
    });
  }

  getData();
}(jQuery))
`;

code.mockjs = `
// 通常会定义一个生成随机数的getRandom方法
function getRandom(num) {
  return Math.floor(Math.random() * num);
}

$.mockjax({
  url: "mockUrl", // 此处的url和js中ajax请求的url一致
  status: 200,
  responseTime: 800, // 响应时间，可通过配置此项来模拟网络不稳定的情况
  contentType: "application/json",
  response: function(settings) {
    this.responseText = {
      dataA: {
        // 此处为图表a的模拟数据，数据类型不限，根据实际需求模拟
      },
      dataB: {
        // 此处为图表b的模拟数据，数据类型不限，根据实际需求模拟
      },
      listData: [
        {
          name: "张三"
        },
        {
          name: "李四"
        },
        {
          name: "王五"
        }
      ] // 列表数据示例
    };
  }
});
`;

code.chartdemo = `
// 引入资源： china.js
option = {
    legend: {
        // 特殊处理legend数据
        formatter: function(params) {
            return ...;
        }
    },
    // ...
};
`;

code.notes = `
// 每个 js 文件头部必须要有声明式注释，包含文件简述、作者、发布日期、版本等基本信息。
/*!
 * 某网站项目
 * author: 张三(注意不要使用英文缩写)
 * date: 2015-03-12
 * versiuon: v1.1.0
 */

// 模块头部的注释
/**
 * 对模块进行简要说明
 */

// 一般的代码注释，统一采用 // 进行注释，需要多行语句进行说明的，新增一行即可
`;

export default code;
