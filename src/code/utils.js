let code = {};

code.commafy  = `
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

export default code;