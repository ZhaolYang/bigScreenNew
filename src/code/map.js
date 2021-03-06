let code = {};

code.hot = `
var chart = echarts.init(document.getElementById("chart"));
chart.setOption({
    visualMap: {
        text: ['高', '低'], // 文本，默认为数值文本
        inRange: {
            color: ['#54bede', '#0060ff']
        },
        min: 0,
        max: 1300,
        left: 32,
        calculable: true,
        textStyle: {
            color: "#333"
        },
        seriesIndex: [0]
    },
    series: [{
        type: 'map',
        map: 'jiangsu',
        roam: false,
        selectedMode: 'single',
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 14,
                    color: "#333"
                }
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                show: true,
                borderColor: '#4c8cdc',
                borderWidth: 2
            },
            emphasis: {
                areaColor: "#ffc"
            }
        },
        data: [
            {name:'苏州市',value:1300},
            {name:'南京市',value:1200},
            {name:'无锡市',value:1100},
            {name:'镇江市',value:1000},
            {name:'扬州市',value:900},
            {name:'泰州市',value:800},
            {name:'南通市',value:700},
            {name:'盐城市',value:600},
            {name:'常州市',value:500},
            {name:'淮安市',value:400},
            {name:'连云港市',value:300},
            {name:'宿迁市',value:200},
            {name:'徐州市',value:100}
        ]
    }]
});
`;

code.point = `
var data = [{
    name: '海门',
    value: 100
}, {
    name: '鄂尔多斯',
    value: 120
}, {
    name: '齐齐哈尔',
    value: 102
}, {
    name: '上海',
    value: 25
}, {
    name: '乌鲁木齐',
    value: 84
}, {
    name: '威海',
    value: 25
}, {
    name: '承德',
    value: 25
}, {
    name: '厦门',
    value: 26
}, {
    name: '太仓',
    value: 27
}, {
    name: '曲靖',
    value: 27
}, {
    name: '烟台',
    value: 28
}, {
    name: '福州',
    value: 29
}, {
    name: '瓦房店',
    value: 30
}, {
    name: '岳阳',
    value: 169
}, {
    name: '长沙',
    value: 175
}, {
    name: '衢州',
    value: 177
}, {
    name: '武汉',
    value: 273
}, {
    name: '大庆',
    value: 279
}];
var geoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '乌鲁木齐': [87.68, 43.77],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var chart = echarts.init(document.getElementById("chart"));
chart.setOption({
    tooltip: {
        show: false
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#000e50',
                areaColor: '#63abfb'
            },
            emphasis: {
                borderWidth: 1,
                areaColor: '#CDB01C'
            }
        },
    },
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        }
    }, {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6)),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }]
});
`;

code.move = `
var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
};
var CDData = [
    [{ name: '上海', value: 95 }, { name: '武汉' }],
    [{ name: '广州', value: 90 }, { name: '武汉' }],
    [{ name: '大连', value: 80 }, { name: '武汉' }],
    [{ name: '南宁', value: 70 }, { name: '武汉' }],
    [{ name: '南昌', value: 60 }, { name: '武汉' }],
    [{ name: '拉萨', value: 50 }, { name: '武汉' }],
    [{ name: '长春', value: 40 }, { name: '武汉' }],
    [{ name: '包头', value: 30 }, { name: '武汉' }],
    [{ name: '重庆', value: 20 }, { name: '武汉' }],
    [{ name: '常州', value: 10 }, { name: '武汉' }]
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};
var color = ['#ddb926'];
var mapSeries = [];
[
    ['武汉', CDData]
].forEach(function(item, i) {
    mapSeries.push({
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        symbol: ['circle', 'none'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbolSize: 2
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 4;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[0].name,
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
        })
    });
});
var chart = echarts.init(document.getElementById("chart"));
chart.setOption({
    tooltip: {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#132065',
                borderColor: '#3384b0'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: mapSeries
});
`;

code.timeLine = `
var getRandom = function(num) {
    return Math.floor(Math.random() * num);
};
var mapcood = {
    '南通市': [120.894676, 31.981143],
    '连云港市': [119.221611, 34.596653],
    '苏州市': [120.585728, 31.2974],
    '淮安市': [119.113185, 33.551052],
    '常州市': [119.974061, 31.811226],
    '南京市': [118.796682, 32.05957],
    '泰州市': [119.922933, 32.455536],
    '宿迁市': [118.275198, 33.963232],
    '徐州市': [117.284124, 34.205768],
    '无锡市': [120.31191, 31.491169],
    '扬州市': [119.412939, 32.394209],
    '盐城市': [120.163107, 33.347708],
    '镇江市': [119.425836, 32.187849]
};
var data = [{
    time:'2015',
    mapData:[
        {name: '南通市', value: getRandom(100)},
        {name: '连云港市', value: getRandom(100)},
        {name: '苏州市', value: getRandom(100)},
        {name: '淮安市', value: getRandom(100)},
        {name: '常州市', value: getRandom(100)},
        {name: '南京市', value: getRandom(100)},
        {name: '泰州市', value: getRandom(100)},
        {name: '宿迁市', value: getRandom(100)},
        {name: '徐州市', value: getRandom(100)},
        {name: '无锡市', value: getRandom(100)},
        {name: '扬州市', value: getRandom(100)},
        {name: '盐城市', value: getRandom(100)},
        {name: '镇江市', value: getRandom(100)}
    ]
},{
    time:'2016',
    mapData:[
        {name: '南通市', value: getRandom(100)},
        {name: '连云港市', value: getRandom(100)},
        {name: '苏州市', value: getRandom(100)},
        {name: '淮安市', value: getRandom(100)},
        {name: '常州市', value: getRandom(100)},
        {name: '南京市', value: getRandom(100)},
        {name: '泰州市', value: getRandom(100)},
        {name: '宿迁市', value: getRandom(100)},
        {name: '徐州市', value: getRandom(100)},
        {name: '无锡市', value: getRandom(100)},
        {name: '扬州市', value: getRandom(100)},
        {name: '盐城市', value: getRandom(100)},
        {name: '镇江市', value: getRandom(100)}
    ]
},{
    time:'2017',
    mapData:[
        {name: '南通市', value: getRandom(100)},
        {name: '连云港市', value: getRandom(100)},
        {name: '苏州市', value: getRandom(100)},
        {name: '淮安市', value: getRandom(100)},
        {name: '常州市', value: getRandom(100)},
        {name: '南京市', value: getRandom(100)},
        {name: '泰州市', value: getRandom(100)},
        {name: '宿迁市', value: getRandom(100)},
        {name: '徐州市', value: getRandom(100)},
        {name: '无锡市', value: getRandom(100)},
        {name: '扬州市', value: getRandom(100)},
        {name: '盐城市', value: getRandom(100)},
        {name: '镇江市', value: getRandom(100)}
    ]
}];
var markPointData = data.map(function(item) {
    item.coord = mapcood[item.name];
    return item;
});

var chart = echarts.init(document.getElementById("chart"));
var chartOption = ({
    timeline: {
        show: true,
            axisType: 'category',
            left: 8,
            right: 20,
            bottom: 0,
            autoPlay: true,
            controlStyle: {
                show: true,
                itemSize: 16,
                showPlayBtn: true,
                showPrevBtn: false,
                showNextBtn: false
            },
            playInterval: 3000,
            symbolSize: 10,
            checkpointStyle: {
                symbolSize: 10,
            },
            label: {
                show: true,
                position: 10,
                interval: 0,
                normal: {
                    show: true,
                    textStyle: {
                        color: '#666',
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#f04713'
                    }
                }
            },
            data: ['2015','2016','2017']
    },
    options: [{
        visualMap: {
            show: true,
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#54bede', '#0060ff']
            },
            min: 0,
            itemWidth: 20,
            itemHeight: 110,
            left: 32,
            bottom: 70,
            calculable: true,
            textStyle: {
                color: "#fff"
            }
        },
        series: [{
            type: 'map',
            map: 'jiangsu',
            roam: false,
            // selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 13,
                        color: "#333"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    areaColor: "#ffc"
                }
            },
            markPoint: {
                symbol: 'pin',
                symbolSize: function(value, params) {
                    return value.toString().length * 12 + 15;
                },
                silent: true,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}',
                        textStyle: {
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#027ae0',
                        borderColor: '#fff'
                    }
                },
                // data: markPointData
            },
            data: []
        }]
    }]
});
chart.setOption(chartOption);

var getSerData = function(data){
    var series = [];
    $.each(data, function(i, e) {
        var s = {
            series: [{
                markPoint:{
                        data:data[i].mapData.map(function(item) {
                        item.coord = mapcood[item.name];
                        return item;
                    })
                },
                data: []
            }]
        };
        $.each(e.mapData, function(j, d) {
            s.series[0].data.push(d);
        });
        series.push(s);
    });
    chart.setOption({
        options: series
    });
};
getSerData(data);
`;

code.areaLocation = `
var geoCoordMap = {
    北京: [116.395645, 39.929986],
    天津: [117.210813,39.14393],
    河北: [114.522082,38.048958],
    山西: [112.550864,37.890277],
    内蒙古: [111.660351,40.828319],
    辽宁: [123.432791,41.808645],
    吉林: [125.3222,43.816],
    黑龙江: [126.657717,45.773225],
    上海: [121.4788,31.2303],
    江苏: [118.778074,32.057236],
    浙江: [120.219375,30.259244],
    安徽: [117.282699,31.866942],
    福建: [119.330221,26.047125],
    江西: [115.893528,28.689578],
    山东: [117.024967,36.682785],
    河南: [113.649644,34.75661],
    湖北: [114.3162,30.581084],
    湖南: [112.979353,28.213478],
    广东: [113.30765,23.120049],
    广西: [108.297234,22.806493],
    海南: [110.330802,20.022071],
    重庆: [106.55,29.5647],
    四川: [104.0648,30.57],
    贵州: [106.709177,26.629907],
    云南: [102.714601,24.882],
    西藏: [91.111891,29.662557],
    陕西: [108.939,34.342],
    甘肃: [103.823305,36.064226],
    青海: [101.767921,36.640739],
    宁夏: [106.206479,38.502621],
    新疆: [87.564988,43.84038],
    香港: [114.172683,22.280352],
    澳门: [113.548889,22.193187],
    台湾: [121.570577,25.04166],
    钓鱼岛: [123.481978,25.753535]
}
`;

export default code;
