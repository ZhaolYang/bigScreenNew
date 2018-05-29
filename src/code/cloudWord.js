let code = {};

code.bubble = `
html:
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

css:
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
    0%,100%{
        transform: translateY(0px);
    }
    50%{
       transform: translateY(-30px);
    }
}
`;

code.cloudWord = `
var colorarr = ['#f5ffb3', '#c6eeff', '#8bddff', '#e3b3ff', '#678b86', '#367ab3'];
var chart = echarts.init(document.getElementById("chart"));
chart.setOption({
    series: [{
        type: 'wordCloud',
        name: "hotword",
        gridSize: 30,
        sizeRange: [15, 28],
        rotationRange: [0, 0],
        shape: 'circle',
        width: '100%',
        height: '100%',
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
                shadowColor: '#fff',
                color: 'pink'
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
    }]
});
`;

code.mask = `
var chartDemo = echarts.init(document.getElementById('chartcontainer'));
var carnames = ["阿斯顿·马丁", "奥迪搜索", "阿尔法罗米欧", "宝马", "奔腾", "本田", "比亚迪", "标致", "别克", "宾利", "北汽", "布嘉迪", "宝骏", "昌河", "长安", "长城", "长丰", "川汽野马", "大发", "大众", "道奇", "东南", "东风", "帝豪", "东风风神", "法拉利", "菲亚特", "丰田", "福特", "福田", "广汽", "海马", "悍马", "红旗", "华普", "华泰", "黄海", "哈飞", "吉利", "Jeep吉普", "江淮", "捷豹", "金杯", "吉奥", "吉利全球鹰", "江铃", "凯迪拉克", "克莱斯勒", "柯尼赛格", "开瑞", "兰博基尼", "劳斯莱斯", "雷克萨斯", "雷诺", "力帆", "莲花", "林肯", "铃木", "陆风", "路虎", "莲花汽车", "理念", "MG", "马自达", "玛莎拉蒂", "迈巴赫", "MINI", "纳智捷", "讴歌", "欧宝", "帕加尼", "奇瑞", "日产", "荣威", "瑞麒", "萨博", "三菱", "双环", "双龙", "斯巴鲁", "斯柯达", "世爵", "smart", "威兹曼", "沃尔沃", "威麟", "五菱汽车", "夏利", "现代", "雪佛兰", "雪铁龙", "西亚特", "永源", "英菲尼迪", "英伦", "一汽", "中华", "中兴", "众泰"]
var data = [];
for (var i = 0; i < 800; i++) {
    var cnt = Math.floor(Math.random() * carnames.length);
    data.push({
        name: carnames[cnt],
        value: Math.floor(Math.random() * 100 + 20)
    });
}

var maskImage = new Image();
maskImage.onload = function() {
    chartDemo.setOption({
        tooltip: {
            show: false
        },
        series: [{
            type: 'wordCloud',
            gridSize: 1,
            sizeRange: [6, 22],
            rotationRange: [-90, 90],
            rotationStep: 10,
            maskImage: maskImage,
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.floor(Math.random() * 256),
                            Math.floor(Math.random() * 256),
                            Math.floor(Math.random() * 256)
                        ].join(',') + ')';
                    }
                }
            },
            left: 'center',
            top: 'center',
            width: "100%",
            height: "100%",
            data: data
        }]
    });
};
maskImage.src = "../thumbnail/chartlabeleg.png";    //标签化后形成的图片，要求png颜色轮廓分明

`;

export default code;