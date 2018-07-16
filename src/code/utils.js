let code = {};

code.commafy = `
function toThousand(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
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
 * @param interval 时间间隔，默认3s
 */
showTooltip: function (chart, length, interval) {
  chart.dataLength = length;
  chart.currentIndex = 0;
  clearInterval(chart.timer);
  chart.timer = setInterval(function () {
      if (chart.currentIndex === chart.dataLength) {
          chart.currentIndex = 0;
      }
      chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: chart.currentIndex
      });
      chart.currentIndex++;
  }, interval || 3000);
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

code.active = `
/**
 * 为元素绑定高亮行为,采用jq的事件委托
 * @param $ct 事件委托监听元素
 * @param target 事件目标
 * @param successFn 触发回调
 * @param event 触发行为，不传默认click
 * @param activeClass 高亮类名，不传默认为‘active’
 */
activeDom: function ($ct, target, successFn, event, activeClass) {
  var cls = activeClass || 'active';
  $ct.on(event || 'click', target, function (e) {
      var $this = $(this);
      if($this.hasClass(cls)) return;
      $this.addClass(cls).siblings().removeClass(cls);
      // successFn接收点击事件和点击目标的jq对象作为参数
      successFn(e, $this);
      // 返回父容器jq对象，可以链式执行其他操作
      return $ct;
  })
}
`;

code.debounce = `
/**
 * 函数防抖
 * @param func 执行函数
 * @param delay 延迟时间，不传默认160ms
 */
debounce: function (func, delay) {
  var timeout;
  return function (e) {
    clearTimeout(timeout);
    var context = this,
      args = arguments;
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay || 160)
  };
}
`;

code.throttle = `
/**
 * 函数节流
 * @param func 执行函数
 * @param threshhold 延迟时间，不传默认160ms
 */
throttle: function (func, threshhold) {
  var timeout,
    start = new Date,
    threshhold = threshhold || 160;
  return function () {
    var context = this,
      args = arguments,
      curr = new Date() - 0;
    clearTimeout(timeout); //总是干掉事件回调
    if (curr - start >= threshhold) {
      fn.apply(context, args); //只执行一部分方法，这些方法是在某个时间段内执行一次
      start = curr;
    } else {
      //让方法在脱离事件后也能执行一次
      timeout = setTimeout(function () {
          fn.apply(context, args);
      }, threshhold);
    }
  }
}
`;

export default code;