let code = {};

code.commafy = `
function toThousand(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
`;

code.max = `
// arr 数组
// key 需要获取最大值的字段
getMax: function (arr, key) {
  var max = 0,
      len = arr.length;
  for (var i = 0; i < len; i++) {
      var item = arr[i][key];
      if (max < item) max = item;
  }
  return max;
}

var arr = [{key:166},{key:200},{key:33}];
console.log(getMax(arr,'key)); //200
`;

code.sum = `
// arr 数组/ 
// key 需要求和的字段
getSum: function(arr, key) {
  var sum = 0,
    len = arr.length;
  for(var i=0;i<len;i++) {
    sum += arr[i][key];
  }
  return sum;
}

var arr = [{key:11},{key:22},{key:33}];
console.log(getSum(arr,'key)); //66
`;

code.getValArr = `
// arr 数组
// key 需要获取值的字段
getValArr: function (arr, key) {
  var val = [],
      len = arr.length;
  for (var i = 0; i < len; i++) {
      val.push(arr[i][key]);
  }
  return val;
}

var arr = [{key:11},{key:22},{key:33}];
console.log(getValArr(arr,'key)); // [11,22,33]
`;

code.renderNum = {
  html: `
<ul>
  <li>
    <p>
      立案量：
      <span id="sp-dailySet">0</span>
    </p>
    <p>
      处罚量：
      <span id="sp-dailyPun">0</span>
    </p>
  </li>
  <li>
    <p>
      立案量：
      <span id="sp-monthlySet">0</span>
    </p>
    <p>
      处罚量：
      <span id="sp-monthlyPun">0</span>
    </p>
  </li>
  <li>
    <p>
      立案量：
      <span id="sp-yearlySet">0</span>
    </p>
    <p>
      处罚量：
      <span id="sp-yearlyPun">0</span>
    </p>
  </li>
</ul>
  `,
  js: `
  // space 命名空间
  // data 渲染数据
  renderNum: function (space, data) {
    for (var i in data) {
        if (Object.prototype.hasOwnProperty.call(data, i)) {
            var $dom = $('#' + space + '-' + i);
            if ($dom.length > 0) {
                $dom.text(data[i]);
            }
        }
    }
  }
  
  // 数据
  var data = {
    dailySet: getRandom(50),
    dailyPun: getRandom(20),
    monthlySet: getRandom(500),
    monthlyPun: getRandom(200),
    yearlySet: getRandom(5000),
    yearlyPun: getRandom(2000)
  }
  // 使用
  // 'sp'对应dom元素的id前缀
  renderNum('sp',data);
  `
}

code.resizeChart = `
// 定义一个定时器变量，做函数节流
var timer = null;
$(window).on('resize', function () {
  // 获取所有echarts容器的jQuery对象
  var $echarts = $('.echart-item');
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    $.each($echarts, function (i, e) {
      // 调用echarts的api获取图表实例，执行缩放
      var chart = echarts.getInstanceByDom(e);
      chart.resize();
    })
  }, 50)
})
`;

code.autoTooltip = `
/**
 * 定时切换echarts图表tooltip
 * @param chart 图表对象
 * @param length 图表数据的长度
 */
showTooltip: function(chart, length) {
  chart.dataLength = length;
  chart.currentIndex = 0;
  clearInterval(chart.timer);
  chart.timer = setInterval(function() {
    if (chart.currentIndex === chart.dataLength) {
      chart.currentIndex = 0;
    }
    chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: chart.currentIndex
    });
    chart.currentIndex++;
  }, 2000);
}
`;

code.getPercent = `
/**
 * 获取百分比
 * @param max 最大值
 * @param data 数值
 * @param fixed 小数点精确位数(不传默认为0)
 */
getPercent: function(max, data, fixed) {
  var _fixed = fixed || 0;
  var percent = (data / max * 100).toFixed(fixed) + '%';
  return percent;
}
`;

export default code;