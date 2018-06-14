let code = {};

code.requestAnimationFrame = {
  html: `
// html
<div class="icon icon01"></div>
<div class="icon icon02"></div>
  `,
  css: `
// css
.icon.icon01 {
  background-image: url("../images/icon01.png");

}

.icon.icon02 {
  background-image: url("../images/icon02.png");
}
  `,
  javascript: `
// javascript
$(function() {
  $(".icon01").frameAnimation({
      range: 2790,
      step: 90,
      trigger: "hover"
  });

  $(".icon02").frameAnimation({
      range: 2790,
      step: 90,
      trigger: "auto"
  });
})
  `
};

code.scrollNumber = {
  html: `
// html
<ul class="clearfix">
  <li class="number-item">8</li>
  <li class="number-item">9</li>
  <li class="number-item">7</li>
  <li class="number-item">5</li>
  <li class="number-item">3</li>
  <li class="number-item">1</li>
  <li class="number-item">3</li>
  <li class="number-item">2</li>
  <li class="number-item">4</li>
  <li class="number-item">2</li>
  <li class="number-item">6</li>
</ul>
  `,
  css: `
// css
.number-item {
  float: left;
  width: 30px;
  height: 55px;
  background-color: #333;
}
  `,
  javascript: `
// javascript
var scrollDemo = new ScrollNumber({
  $dom: $('.number-item'), //jQuery dom对象
  imgUrl: './images/digits.png', //背景图url
  duration: 2000, // 非必须参数，切换时长，不传默认1000
  speed: 150 // 非必须参数，每个数字切换间隔，不传默认200
})

setTimeout(function(){
  $('.number-item').text('9');
  scrollDemo.refresh(); // 更新数字后可执行刷新方法
},5000)
  `
};

code.WOW = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/animate.min.css">
  <title>Document</title>
</head>
<body>
  <div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s" data-wow-offset="10"  data-wow-iteration="10"></div>

  <script type="text/javascript" src="js/wow.min.js"></script>
  <script type="text/javascript">
    new WOW().init();
  </script>
</body>
</html>
`;

code.clock = {
  html: `
<div class="box" id="box"></div>
`,
  css: `
.box {
  margin: 100px auto;
  width: 280px;
  height: 280px;
}
`,
  javascript: `
var opt = {
  id: 'box',//绘制clock的dom的id
  clockBg: './clock.png',//需要个性化时钟背景时，传入图片地址
  hour: 9, //小时，当freeze为true时必传
  minutes: 30, //分钟，当freeze为true时必传
  seconds: 0, //秒，当freeze为true时可传可不传
  freeze: true, //是否固定时间,如果固定时间必须穿入时分秒参数
  dot: {
    radius: 7,
    color: '#ffbb33'
  }, // 时钟原点配置，包括半径和颜色
  hPointer: {
    radius: 55,
    color: '#33ccff',
    width: 6
  }, // 时钟指针配置,包括长度、宽度、颜色
  mPointer: {
    radius: 65,
    color: '#0080ff',
    width: 4
  },
  sPointer: {
    radius: 75,
    color: '#317dc8',
    width: 2
  } // 秒针配置，当需要绘制秒针时传入
}
new GiveMeClock(opt);
  `
}

code.animateNumber = `
$('#fun-level').animateNumber(
  {
    number: 100
  },
  1800
);
`

code.ajaxLoading = `
$(document).ajaxStart(function() {
  // 这里执行loading效果的显示、或者其他各种你需要实现的功能
  console.log('start')
})
$(document).ajaxStop(function() {
  // 这里执行loading效果的隐藏、或者其他各种你需要在页面所有ajax调用完成后实现的功能
  console.log('end')
})
`;

code.animsition = {
  html: `
<!-- step1 -->
<!-- animsition.css -->
<link rel="stylesheet" href="../dist/css/animsition.min.css">
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- animsition.js -->
<script src="../dist/js/animsition.min.js"></script>

<!-- step2 -->
<body>
  <div class="animsition">
    <a href="./page1" class="animsition-link">animsition link 1</a>
    <a href="./page2" class="animsition-link">animsition link 2</a>
  </div>
</body>
  `,
  js: `
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
  `
};

export default code;
