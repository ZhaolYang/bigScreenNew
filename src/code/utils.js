let code = {};

code.commafy  = `
function toThousand(num) {
  return (num || 0).toString().replace(/(\\d)(?=(?:\\d{3})+$)/g, '$1,');
}
`;

code.max = `
// arr 数组
// key 需要获取最大值的字段
function getMax(arr, key) {
  var max = 0,
    len = arr.length;
  for(var i=0;i<len;i++) {
    var item = arr[i];
    if (max < item) max = item;
  }
  return max;
}

var arr = [{key:166},{key:200},{key:33}];
console.log(getMax(arr,'key)); //200
`;

code.sum = `
// arr 数组
// key 需要求和的字段
function getSum(arr, key) {
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
function getValArr(arr, key) {
  var val = [],
    len = arr.length;
  for(var i=0;i<len;i++) {
    val.push(arr[i][key]);
  }
  return val;
}

var arr = [{key:11},{key:22},{key:33}];
console.log(getValArr(arr,'key)); // [11,22,33]
`;

export default code;