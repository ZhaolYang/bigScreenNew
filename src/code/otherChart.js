let code = {};

code.rose = `
var chartDemo = echarts.init(document.getElementById('chartcontainer'));
var option = {
    color: ['#fa5252', '#2bbcc1', '#3c7ffa', '#f7a11a'],
    textStyle: {
        fontSize: 12
    },
    legend: {
        orient: 'vertical',
        top: 20,
        left: 10,
        data: ["贵州省", "江苏省", "浙江省", "安徽省"]
    },
    series: [{
        type: 'pie',
        radius: ['23%', '60%'],
        roseType: 'area',
        data: [
            { "name": "贵州省", "value": 73, "company": "企业一" },
            { "name": "贵州省", "value": 78, "company": "企业二" },
            { "name": "贵州省", "value": 91, "company": "企业三" },
            { "name": "贵州省", "value": 99, "company": "企业四" },
            { "name": "贵州省", "value": 85, "company": "企业五" },
            { "name": "江苏省", "value": 90, "company": "企业一" },
            { "name": "江苏省", "value": 97, "company": "企业二" },
            { "name": "江苏省", "value": 80, "company": "企业三" },
            { "name": "江苏省", "value": 98, "company": "企业四" },
            { "name": "江苏省", "value": 73, "company": "企业五" },
            { "name": "浙江省", "value": 77, "company": "企业一" },
            { "name": "浙江省", "value": 75, "company": "企业二" },
            { "name": "浙江省", "value": 77, "company": "企业三" },
            { "name": "浙江省", "value": 83, "company": "企业四" },
            { "name": "浙江省", "value": 86, "company": "企业五" },
            { "name": "安徽省", "value": 84, "company": "企业一" },
            { "name": "安徽省", "value": 77, "company": "企业二" },
            { "name": "安徽省", "value": 83, "company": "企业三" },
            { "name": "安徽省", "value": 94, "company": "企业四" },
            { "name": "安徽省", "value": 71, "company": "企业五" }],
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: function(params) {
                    return params.data.company;
                }
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#fff'
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

chartDemo.setOption(option);

`;

code.monthlypie = `
var testdata = [
    { value: 30, name: '1月' },
    { value: 46, name: '2月' },
    { value: 25, name: '3月' },
    { value: 25, name: '4月' },
    { value: 20, name: '5月' },
    { value: 35, name: '6月' },
    { value: 30, name: '7月' },
    { value: 40, name: '8月' },
    { value: 20, name: '9月' },
    { value: 35, name: '10月' },
    { value: 30, name: '11月' },
    { value: 40, name: '12月' }];

var chartDemo = echarts.init(document.getElementById('chartcontainer'));

var option = {
    tooltip: {
        trigger: 'item'
    },
    series: [{
        name: '月度取号情况',
        type: 'pie',
        z: 10,
        roseType: 'area',
        radius: ['10%', '50%'],
        color: ['#1F89DB'],
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: testdata
    }, {
        type: 'pie',
        radius: ['65%', '90%'],
        silent: true,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                textStyle: {
                    fontSize: 26
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#1236AC'
            }
        },
        data: [
            { value: 1, name: '1月' },
            { value: 1, name: '2月' },
            { value: 1, name: '3月' },
            { value: 1, name: '4月' },
            { value: 1, name: '5月' },
            { value: 1, name: '6月' },
            { value: 1, name: '7月' },
            { value: 1, name: '8月' },
            { value: 1, name: '9月' },
            { value: 1, name: '10月' },
            { value: 1, name: '11月' },
            { value: 1, name: '12月' }
        ]
    }, {
        type: 'gauge',
        radius: '90%',
        min: 0,
        max: 12,
        z: 20,
        startAngle: 90,
        endAngle: 449.9,
        clockwise: false,
        splitNumber: 12,
        axisLine: {
            lineStyle: {
                color: [
                    [1, 'transparent']
                ]
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        detail: {
            show: false
        },
        splitLine: {
            length: '90%',
            lineStyle: {
                color: '#020E75',
                width: 1
            }
        }
    }, {
        type: 'pie',
        radius: '63%',
        silent: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 1,
            itemStyle: {
                normal: {
                    color: '#020E78'
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['10%', '55%'],
        silent: true,
        z: 5,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 1,
            itemStyle: {
                normal: {
                    color: '#09157B'
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['55%', '57%'],
        silent: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 1,
            itemStyle: {
                normal: {
                    color: '#101D8B'
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['63%', '65%'],
        silent: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 1,
            itemStyle: {
                normal: {
                    color: '#17259C'
                }
            }
        }]
    }]
};
chartDemo.setOption(option);
`;

code.symmetrybar = `
var testdata = [
    {
        "range": "20岁以下",
        "female": 12,
        "male": 15
    },
    {
        "range": "20-30岁",
        "female": 120,
        "male": 150
    },
    {
        "range": "30-40岁",
        "female": 128,
        "male": 134
    },
    {
        "range": "40-50岁",
        "female": 127,
        "male": 125
    },
    {
        "range": "50-60岁",
        "female": 132,
        "male": 127
    },
    {
        "range": "60-70岁",
        "female": 156,
        "male": 152
    },
    {
        "range": "70岁以上",
        "female": 121,
        "male": 118
    }];

var chartDemo = echarts.init(document.getElementById('chartcontainer'));
var gender_yData = [],
    female = [],
    male = [],
    gender_Data = testdata;



gender_Data.forEach(function(item, i) {
    gender_yData.push(item.range);
    female.push(item.female);
    male.push(item.male);
});
var option = {
    legend: {
        data: ['男性', '女性'],
        top: 0,
        left: 'center',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}人',
        axisPointer: {
            type: 'shadow',
        }
    },
    grid: [{
        show: false,
        left: '4%',
        top: 40,
        bottom: 20,
        containLabel: true,
        width: '46%',
    }, {
        show: false,
        left: '50.5%',
        top: 38,
        bottom: 42,
        width: '0%',
    }, {
        show: false,
        right: '4%',
        top: 40,
        bottom: 20,
        containLabel: true,
        width: '46%',
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        min: 0,
        max: 200,
        interval: 50,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#1978e6"
            }
        },
        axisTick: {
            inside: true,
            show: true,
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 16,
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1F2022',
                width: 1,
                type: 'solid',
            },
        },
    }, {
        gridIndex: 1,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#1978e6"
            }
        },
        axisLabel: {
            show: false
        }
    }, {
        gridIndex: 2,
        min: 0,
        max: 200,
        interval: 50,

        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#1978e6"
            }
        },
        axisTick: {
            show: true,
            inside: true
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 16
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1F2022',
                width: 1,
                type: 'solid',
            },
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: gender_yData,
    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 16,
                height: 20,
                lineHeight: 20
            },

        },
        data: gender_yData.map(function(value) {
            return {
                value: value,
                textStyle: {
                    align: 'center',
                }
            };
        })
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
            },

        },
        data: gender_yData,
    }],
    series: [{
        name: '男性',
        type: 'bar',
        barGap: 20,
        barWidth: 14,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: true,
                position: 'left',
                offset: [0, 0],
                textStyle: {
                    fontSize: 14,
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#659F83',
                "barBorderRadius": [7, 0, 0, 7]
            },
            emphasis: {
                color: '#08C7AE',
            },
        },
        data: male,
    }, {
        name: '女性',
        type: 'bar',
        barGap: 20,
        barWidth: 14,
        xAxisIndex: 2,
        yAxisIndex: 2,
        label: {
            normal: {
                show: false

            },
            emphasis: {
                show: true,
                position: 'right',
                offset: [0, 0],
                textStyle: {
                    fontSize: 14,
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#F68989',
                "barBorderRadius": [0, 7, 7, 0]
            },
            emphasis: {
                color: '#F94646',
            },
        },
        data: female,
    }]

};
chartDemo.setOption(option);
`;

code.userdefinetooltip = `
var testdata = {
    "citydata": [
        {
            "name": "无锡市",
            "value": 350
        },
        {
            "name": "苏州市",
            "value": 380
        },
        {
            "name": "常州市",
            "value": 300
        },
        {
            "name": "镇江市",
            "value": 250
        },
        {
            "name": "南通市",
            "value": 200
        },
        {
            "name": "泰州市",
            "value": 180
        },
        {
            "name": "扬州市",
            "value": 150
        },
        {
            "name": "盐城市",
            "value": 160
        },
        {
            "name": "淮安市",
            "value": 100
        },
        {
            "name": "宿迁市",
            "value": 90
        },
        {
            "name": "徐州市",
            "value": 100
        },
        {
            "name": "连云港市",
            "value": 180
        },
        {
            "name": "南京市",
            "value": 500
        }
    ],
    "locate": [
        {
            "name": "无锡市",
            "things": " 消防栓无水问题 ",
            "time": "2017-04-01 07:41:23"
        },
        {
            "name": "苏州市",
            "things": "咨询烟花爆竹禁燃区域事宜",
            "time": "2017-04-01 07:36:06"
        },
        {
            "name": "常州市",
            "things": "要求解决夜晚违停的问题",
            "time": "2017-01-01 07:32:13"
        },
        {
            "name": "镇江市",
            "things": "反映江河汇小区门禁至今未安装",
            "time": "2017-04-01 07:34:39"
        },
        {
            "name": "连云港市",
            "things": "咨询残疾人相关就业政策",
            "time": "2017-04-01 08:02:42"
        },
        {
            "name": "泰州市",
            "things": "社保补缴问题",
            "time": "2017-04-01 07:31:51"
        },
        {
            "name": "扬州市",
            "things": " 道路维修事宜 ",
            "time": "2017-04-01 07:35:28"
        },
        {
            "name": "盐城市",
            "things": "拆迁计划问题 ",
            "time": "2017-04-01 07:38:41"
        },
        {
            "name": "淮安市",
            "things": "反映窨井盖损坏",
            "time": "2017-04-01 07:46:23"
        },
        {
            "name": "宿迁市",
            "things": "咨询宿城区王官集镇安装数字电视是否收取初装费",
            "time": "2017-04-01 07:44:41"
        },
        {
            "name": "徐州市",
            "things": "医保卡也无法正常使用 ",
            "time": "2017-04-01 07:59:13"
        },
        {
            "name": "连云港市",
            "things": "咨询残疾人相关就业政策",
            "time": "2017-04-01 07:41:23"
        },
        {
            "name": "南京市",
            "things": "关于看病求助问题",
            "time": "2017-04-01 07:38:52"
        },
        {
            "name": "无锡市",
            "things": " 尊老金问题",
            "time": "2017-04-01 07:31:49"
        },
        {
            "name": "苏州市",
            "things": "建议恢复公交线路站点",
            "time": "2017-04-01 07:45:23"
        },
        {
            "name": "常州市",
            "things": "要求解决群租扰民问题",
            "time": "2017-04-01 07:49:24"
        },
        {
            "name": "镇江市",
            "things": "护照办理问题",
            "time": "2017-04-01 07:41:29"
        },
        {
            "name": "连云港市",
            "things": "咨询残疾人相关就业政策",
            "time": "2017-04-01 07:43:58"
        },
        {
            "name": "泰州市",
            "things": "济川西路垃圾",
            "time": "2017-04-01 08:01:23"
        },
        {
            "name": "扬州市",
            "things": "补助转移事宜",
            "time": "2017-04-01 07:41:33"
        },
        {
            "name": "盐城市",
            "things": "当兵补贴费问题 ",
            "time": "2017-04-01 07:55:23"
        },
        {
            "name": "淮安市",
            "things": " 咨询外地驾照是否可以在淮安补办 ",
            "time": "2017-04-01 07:46:25"
        },
        {
            "name": "宿迁市",
            "things": "宿豫区大兴镇村内广播电流声较大噪音扰民",
            "time": "2017-04-01 07:43:58"
        },
        {
            "name": "徐州市",
            "things": " 反映退休工资迟迟未发放问题",
            "time": "2017-04-01 07:55:21"
        },
        {
            "name": "连云港市",
            "things": "咨询残疾人相关就业政策",
            "time": "2017-04-01 07:41:37"
        },
        {
            "name": "南京市",
            "things": "关于 南京积分落户政策相关",
            "time": "2017-04-01 07:35:23"
        }
    ]
}

$(function() {
    var chartMap;
    var chartOption;

    var coordArr = {
        "苏州市": [120.6519, 31.3989],
        "徐州市": [117.5208, 34.3268],
        "宿迁市": [118.5535, 33.7775],
        "扬州市": [119.4653, 32.8162],
        "盐城市": [120.2234, 33.5577],
        "南京市": [118.8062, 31.9208],
        "淮安市": [118.927, 33.4039],
        "泰州市": [120.0586, 32.5525],
        "常州市": [119.4543, 31.5582],
        "无锡市": [120.3442, 31.5527],
        "南通市": [121.1023, 32.1625],
        "镇江市": [119.4763, 31.9702],
        "连云港市": [119.1248, 34.552]
    };

    //初始化图表
    var initChart = function() {

        // #region 地图
        chartMap = echarts.init(document.getElementById('chartmap'));
        chartOption = {
            visualMap: {
                type: 'continuous',
                min: 0,
                left: 50,
                bottom: 60,
                text: ['高', '低'],
                calculable: true,
                itemWidth: 25,
                textStyle: {
                    color: "#fff"
                },
                seriesIndex: 0,
                inRange: {
                    color: ['#2f90e7', '#c6e579']
                }
            },
            geo: {
                map: 'jiangsu',
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                        opacity: 0
                    }
                },
                roam: false,
                zoom: 1.1
            },
            series: [{
                name: "maparea",
                type: 'map',
                zoom: 1.1,
                mapType: "jiangsu",
                selectedMode: 'single',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#1b2022',
                            fontSize: 22
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#1b2022',
                            fontSize: 22
                        }
                    }
                },
                itemStyle: {
                    normal: { show: false },
                    emphasis: { borderWidth: 0, borderColor: '#31a5ff', areaColor: '#31a5ff' }
                },
                data: []
            }, {
                name: 'effectline',
                type: 'lines',
                zlevel: 1,
                lineStyle: {
                    normal: {
                        color: '#fff',
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.3 //线弯曲度
                    }
                },
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.4,
                    symbolSize: 6
                },
                data: []
            }, {
                name: 'effectpoint',
                color: '#fff',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                zoom: 1,
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                },
                data: []
            }, {
                name: "point",
                type: 'map',
                top: 20,
                bottom: 110,
                zlevel: 5,
                z: 5,
                mapType: "jiangsu",
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                markPoint: {
                    symbol: 'image://images/locate.png',
                    symbolOffset: [8, -30],
                    symbolSize: [32, 41],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: []
                },
                data: []
            }]
        };
        chartMap.setOption(chartOption);

        // #endregion

    };
    initChart();


    //渲染地图
    var renderMap = function(data) {
        var max = 0,
            lineValue = [], //线
            pointValue = [], //涟漪点
            thingPoint = []; //标记点
        //区域数据渲染
        $.each(data.citydata, function(i, e) {
            if (max < e.value) {
                max = e.value;
            }
        });

        //聚集点、线渲染
        $.each(data.citydata, function(i, e) {
            if (e.name != "南京市") {
                lineValue.push({
                    fromName: e.name,
                    toName: "南京市",
                    coords: [coordArr[e.name], coordArr["南京市"]]
                });
            }
            pointValue.push({
                value: coordArr[e.name].concat(0)
            });
        });

        //事件点、事件框渲染
        $.each(data.locate, function(i, e) {
            e.coord = coordArr[e.name];
            thingPoint.push(e);
        });

        chartMap.setOption({
            visualMap: {
                max: max
            },
            series: [{
                data: data.citydata
            }, {
                data: lineValue
            }, {
                data: pointValue
            }]
        });

        var coordSys = chartMap.getModel().getSeriesByIndex(3).coordinateSystem,    //获取坐标系统
            $mapthings = $('#mapthings');
        function showThings(idx) {
            if (idx >= thingPoint.length) {
                idx = 0;
            }
            var t = thingPoint[idx];
            var point = coordSys.dataToPoint(t.coord);      //将经纬度坐标转换为元素在页面上的绝对位置
            $mapthings.removeClass('hidden').find('.name').html(t.name).next('.thing').html(t.things).next('.time').text(t.time);
            $mapthings.css({ "left": point[0] + 30, "top": point[1] - 165 });
            chartMap.setOption({
                series: [{
                    name: "point",
                    markPoint: {
                        data: [t]
                    }
                }]
            });
            idx++;
            setTimeout(function() { showThings(idx); }, 3000)
        }
        if (thingPoint.length) {
            setTimeout(function() { showThings(0) }, 3000)
        }

    };


    renderMap(testdata);
}(this, jQuery));
`;

code.fan = `
$(function() {
    var chartDemo = echarts.init(document.getElementById('chartcontainer'));
    chartDemo.setOption({
        series: [{
            type: 'pie',
            startAngle: 180,
            radius: ['15%', '80%'],
            center: ['50%', '70%'],
            roseType: 'area',
            color: ['#3fa7dc'],
            data: [0, 7, 7, 7, 0, 0, 6, 6, 6, 0, 0, 8, 8, 8, 0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#009dd2',
                    borderColor: '#009dd2'
                },
                emphasis: {
                    color: '#009dd2',
                    borderColor: '#009dd2'
                }
            },
            hoverAnimation: false
        }, {
            name: '',
            type: 'gauge',
            center: ['50%', '70%'],
            min: 0,
            max: 12,
            startAngle: 0,
            endAngle: 180,
            radius: '92%',
            splitNumber: 12,
            clockwise: false,
            animation: false,
            detail: {
                formatter: '{value}',
                textStyle: {
                    color: '#63869e'
                }
            },
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#009dd2']
                    ],
                    width: '40%'
                }
            },
            splitLine: {
                show: false,
                length: 5
            },
            axisLabel: {
                formatter: function(v) {
                    switch (v) {
                        case 1:
                            return "便民";
                        case 3:
                            return "确认";
                        case 5:
                            return "审批";
                        case 7:
                            return "许可";
                        case 9:
                            return "其他";
                        case 11:
                            return "征收";
                        default:
                            return ""
                    }
                },
                textStyle: {
                    color: "#000",
                    fontSize: 16
                },
                distance: -40
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    width: 2
                }
            }
        }, {
            name: '',
            type: 'gauge',
            center: ['50%', '70%'],
            min: 0,
            max: 6,
            startAngle: 0,
            endAngle: 180,
            radius: '91%',
            splitNumber: 6,
            clockwise: false,
            animation: false,
            detail: {
                formatter: '{value}',
                textStyle: {
                    color: '#63869e'
                }
            },
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#010510']
                    ],
                    width: '10%',
                    opacity: 0.8
                }
            },
            splitLine: {
                show: true,
                length: '83%',
                lineStyle: {
                    color: '#009dd2',
                    width: '1',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: false,
                formatter: function(v) {
                    return v ? v : '';
                },
                textStyle: {
                    color: "#fb5310",
                    fontWeight: 700
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    width: 2,
                    borderWidth: 3,
                }
            }
        }]
    });
})
`;

code.userdefinelegend = `
var colors = ['#5db8f1', '#9c7ad3', '#7ed19f', '#ffb980', '#2fcdd0'];

//测试数据
var myData = [
        { value: 100, name: '企业管理人员' },
        { value: 200, name: '注册执业人员' },
        { value: 300, name: '生产管理人员' },
        { value: 400, name: '关键岗位人员' },
        { value: 500, name: '建筑施工人员' }
], sum = 0;

$.each(myData, function(i, e) {
    sum += e.value;
});
var chartDemo = echarts.init(document.getElementById('chartcontainer'));

chartDemo.setOption({
    legend: {
        x: 'right',
        y: 'top',
        orient: 'vertival',
        top: 20,
        itemGap: 20,
        data: ['企业管理人员', '注册执业人员', '生产管理人员', '关键岗位人员', '建筑施工人员'],
        formatter: function(name) {
            for (var i in myData) {
                if (myData[i].name == name) {
                    return name + '         ' + myData[i].value + '个     ' + Math.round(myData[i].value * 100 / sum) + '%';
                    breaks;
                }
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
        name: '人员类型',
        type: 'pie',
        radius: [50, 270],
        center: ['35%', '50%'],
        roseType: 'radius',
        data: myData,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = colors;
                    return colorList[params.dataIndex]; //使用回调函数返回颜色列表
                }
            }
        }
    }]
});
`;

code.deepmap = `
$(function() {
    var $nav = $("#nav"), navpath = ["全国"];

    var mapJsonPath = "../../../js/lib/echarts/map/", chartMap;

    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c}'
        },
        visualMap: {
            text: ['高', '低'],
            orient: "horizontal",
            inverse: true,
            inRange: {
                color: ['#e4ffff', '#1780e7']
            },
            min: 0,
            itemWidth: 13,
            itemHeight: 175,
            bottom: 32
        },
        series: [
            {
                type: 'map',
                roam: true,
                selectedMode: 'single',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 10,
                            color: "#934d1b"
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                top: 35,
                bottom: 35,
                data: []
            }
        ]
    };
    chartMap = echarts.init(document.getElementById('chartcontainer'));

    //根据code从不同的文件夹中动态加载地图JSON数据
    var getMapJson = function(code, type) {
        var path = mapJsonPath;
        if (type == "province") {
            path += "province/";
        } else if (type == "city") {
            path += "city/";
        }
        return $.ajax({
            url: path + code + '.json',
            dataType: "json"
        });
    }

    /*
     *将中文名通过映射文件转换为对应的Code
     *返回该地区的Code和类型
     */
    var getMapInfo = function(area) {
        var result = { "name": area };
        if (area == "china") {
            result.name = "全国"
            result.code = "china";
        } else {
            var filename = provinceMap[area];   //省级地区
            if (filename) {
                result.code = filename;
                result.type = "province"
            }
            if (!filename) {                    //地级市地区
                filename = cityMap[area];
                result.code = filename;
                result.type = "city"
            }
            if (!filename) {
                return null;
            }
        }
        return result;
    }

    //导航条生成
    var setNavBar = function(mapInfo) {
        if (mapInfo.type == "province") {
            navpath.length = 1;
            navpath.push(mapInfo.name);
        }
        if (mapInfo.type == "city") {
            navpath.length = 2;
            navpath.push(mapInfo.name);
        }
        var $path, l = navpath.length;
        $nav.empty();
        $.each(navpath, function(i, e) {

            $path = $("<span class='nav-item'>" + e + "</span>");
            if (i == (l - 1)) {
                $path.addClass("curr");
            }
            $nav.append($path);
            if (i < (l - 1)) {
                $nav.append($("<span/>", {
                    text: ">"
                }));
            }
        })
    }

    $nav.on("click", ".nav-item", function(e) {
        if ($(this).hasClass("curr"))
            return;
        var area = $(this).text();
        if (area == "全国") area = "china";
        renderMap(area);
    });

    //模拟数据
    var getdataByArea = function(mapdata) {
        var randomData = function() {
            return Math.round(Math.random() * 8000 + 2000);
        }
        var result = [];
        $.each(mapdata.features, function(i, e) {
            result.push(
                {
                    "name": e.properties.name,
                    "value": randomData()
                })
        })
        return result;
    }

    //渲染地图
    var renderMap = function(area) {
        var mapInfo = getMapInfo(area);
        if (!mapInfo) return;
        setNavBar(mapInfo);

        getMapJson(mapInfo.code, mapInfo.type).done(function(data) {    
            echarts.registerMap(mapInfo.code, data);    //地图加载完成后进行ECharts注册
            option.series[0].map = mapInfo.code;        
            option.series[0].selectedMode = 'single';

            var data = getdataByArea(data);             //模拟该地区的数据
            var max = 0;
            $.each(data, function(i, e) {
                if (e.value > max) {
                    max = e.value;
                }
            })
            option.visualMap.max = max;                 //重新设置视觉组件最大值
            option.series[0].data = data
            chartMap.setOption(option);
        })
    }

    chartMap.on("mapselectchanged", function(event) {   //绑定点击事件
        renderMap(event.name);
    })
    renderMap("china");

})
`;

code.rotatepie = `
var chartDemo = echarts.init(document.getElementById('chartcontainer'));

var option = {
    series: [
        {
            name: '访问来源',
            type: 'pie',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 305, name: '搜索引擎' }
            ]
        }
    ]
}

chartDemo.setOption(option);
chartDemo.on("click", function(param) {
    var data = chartDemo.getOption().series[0].data, sum = 0;
    for (var i = 0; i < param.dataIndex; i++) {
        sum += data[i].value;
    }
    sum += (param.value / 2);
    var rotate = sum * param.percent * 360 / (100 * param.value);
    chartDemo.setOption({
        series: [{
            startAngle: -90 + rotate
        }
        ]
    })
})
chartDemo.dispatchAction({
    type: 'pieSelect',
    seriesIndex: 0,
    dataIndex: 0
});
`;

code.zoom = `
(function($) {
    //图表放大封装
    $.fn.ZoomChart = function(width, height) {
        var $zoomchart, zoomChart;
        var showdialog = function(chartobj) {
            $zoomchart = $("#zoomchart");
            if ($zoomchart.length === 0) {
                $zoomchart = $('<div class="zoomchart-layer" id="zoomchart">'
                                + '<div class="zoomchart">'
                                + '<div class="zoomchart-header"><span class="close" title="关闭">X</span></div>'
                                + '<div class="inner"></div>'
                                + '</div>'
                                + '</div>');
                $("body").append($zoomchart);

                $zoomchart.on("click", ".close", function() {
                    echarts.dispose(zoomChart);
                    $zoomchart.hide();
                })
            }
            zoomChart = echarts.init($(".inner", $zoomchart)[0]);


            if (width && height) {
                $(".zoomchart", $zoomchart).css({
                    width: width + 'px',
                    height: height + 'px',
                    top: ($(window).height() - height) / 2,
                    left: ($(window).width() - width) / 2
                });
            } else {
                $(".zoomchart", $zoomchart)[0].style = "";
            }
            $zoomchart.show();
            zoomChart.resize();
            zoomChart.setOption(echarts.getInstanceByDom(chartobj).getOption());
        }

        $(this).on("click", function() {
            showdialog(this);
        })
    }
})(jQuery);
var mychart1 = echarts.init(document.getElementById('mychart1'));
var option = {
    title: {
        text: "2016年销售额",
        left: 'center'
    },
    grid: {
        containLabel: true,
        top: '15%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    yAxis: {
        name: "(万元)"
    },
    xAxis: {
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]

    },
    series: [{
        name: '销售额',
        data: [22, 18, 23, 21, 15, 18, 26, 25, 14, 30, 24, 27],
        type: 'bar',
    }]
};
mychart1.setOption(option);

$("#mychart1").ZoomChart();

var mychart2 = echarts.init(document.getElementById('mychart2'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }
    ]
}
mychart2.setOption(option);

$("#mychart2").ZoomChart(800, 600);
`;

export default code;