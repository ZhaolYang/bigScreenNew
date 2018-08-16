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
-- scss //如果使用sass编写css样式的话，需要把scss文件单独放置在这个文件夹，编译出来的css文件输出到css文件夹中
readme.txt  // readme
a.html //页面html
`;

code.echarts = `
Vue.component('basic-chart', {
  data: function () {
    return {
      chart: null
    }
  },
  computed: {
    // 图表基础配置
    option: function () {
      return {
        // 这里是图表的基础配置，类似于基础版中的initChart方法中的 chartOption = {...}
      }
    }
  },
  props: {
    // 图表组件接收收据定义
    chartdata: Array,
    type: {
      type: String,
      default: 'bar' // 接收类型参数，默认为柱状图
    }
  },
  // 图表组件dom结构
  template: '<div class="chart-item"></div>',
  methods: {
    // 初始化图表方法，这里类似于基础版中的执行initChart方法
    initChart: function () {
      var dom = this.$el;
      this.chart = echarts.init(dom);
      this.chart.setOption(this.option);
    },
    // 数据更新后刷新图表方法，这里类似于基础版中的renderChart方法
    refreshChart: function (data) {
      var axisData = Utils.getValArr(data, 'name');
      this.chart.setOption({
        xAxis: {
          data: axisData
        },
        series: [{
          data: Utils.getValArr(data, 'value')
        }]
      })
      // 自动切换tooltip
      Utils.showTooltip(this.chart, data.length);
    }
  },
  watch: {
    // 监听传入组件的图表数据，数据变化后执行刷新方法
    chartdata: function (val) {
      this.refreshChart(val);
    }
  },
  mounted: function () {
    // 挂载组件后执行初始化方法
    this.initChart();
  }
})
`;

code.echartsHtml = `
<div class="chart-container">
  <basic-chart :chartdata="chartData" :type="'bar'"></basic-chart>
</div>
`;

code.list = `
Vue.component('list', {
  data: function() {
    return {
      isScroll: false, //是否已经滚动
      show: 5 //展示条数
    }
  },
  props: {
    listdata: Array,
    default: []
  },
  template: 
  '<div class="list-wrapper">'+
    '<ul>'+
      '<li v-for="item in listdata">{{item}}</li>'+
    '</ul>'+
  '</div>',
  watch: {
    listdata: function(val) {
      this.refreshList(val);
    }
  },
  methods: {
    refreshList: function(val){
      var vm = this;
      if(val.length<=vm.show) return;
      if(vm.isScroll) return;
      vm.isScroll = true;
      $(this.$el).scrollbox();
    }
  }
})
`;

code.componentMsg = `
// 子组件
Vue.component('btn',{
  template: '<button v-on:click="handelClick">点击我向父组件传递数据</button>',
  methods: {
    handelClick: function(){
      this.$emit('changenum',Math.random().toFixed(5));
    }
  }
})

// 父组件
var app = new Vue({
  el: '#app',
  data: function(){
    return {
      dataFromSon: ''
    }
  },
  methods: {
    handelSonMsg: function(data) {
      this.dataFromSon = data;
    }
  }
})
`;

code.componentMsgHtml = `
<div class="parent">
  子组件传递的数据为{{dataFromSon}}<br>
  <btn v-on:changenum="handelSonMsg"></btn>
</div>
`;

code.vue = `
var app = new Vue({
  el: '#app',
  // data中的数据字段对应页面及组件中的数据，字段名称需要要一一对应
  data: function(){
    return {
      data1: '',
      data2: ''
    }
  },
  computed: {
    // 这里存放一些需要“加工处理”的数据，需要注意的是，computed中的属性通常情况下是不可修改的
  },
  methods: {
    // 获取数据，相当于基础班的geyData方法
    getData: function () {
      var vm = this;
      $.ajax(url).done(function (data) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            vm[key] = data[key];
          }
        }
        vm.$nextTick(function () {
          // 这里可以在dom结构渲染完成后执行一些操作
        })
      })
    },
    // 如果有其他的数据获取方法，依次写在此处，在合适的时间调用即可
    getOtherData: function (index) {
      var vm = this;
      $.ajax(url2).done(function (data) {
        // 获取其他数据的回调操作
      })
    }
  },
  mounted: function () {
    // 挂载到页面上后执行获取数据方法
    this.getData();
  }
})
`;

export default code;
