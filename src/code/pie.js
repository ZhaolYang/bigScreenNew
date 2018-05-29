let code = {};

code.percent1 = `
option = {
    "title": {
        "text": "2次以上",
        "top": 30,
        "right": 0,
        "textStyle": {
            "fontSize": 14,
            "fontWeight": "normal"
        },
        "itemGap": 4,
        "subtext": "842 {field|件}",
        "subtextStyle": {
            "color": "#ed7955",
            "fontSize": 16,
            "fontWeight": "bold",
            "rich": {
                "field": {
                    "fontSize": 14,
                    "color": "#666"
                }
            }
        }
    },
    "series": [{
        "type": "pie",
        "radius": ["55%", "68%"],
        "center": ["28%", "42%"],
        "color": ["#ed7955", "#d6e0ec"],
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "silent": true,
        "data": [{
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "position": "center",
                    "formatter": "{d}{field|%}",
                    "textStyle": {
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "rich": {
                        "field": {
                            "fontSize": 14,
                            "color": "#666"
                        }
                    }
                }
            },
            "value": 842
        }, {
            "name": "",
            "label": {
                "normal": {
                    "show": false
                }
            },
            "value": 13413
        }]
    }]
}
`;

code.num1 = `
option = {
    "color": ["#2b9fe8", "#87cefb", "#9c7ad3"],
    "title": {
        "text": "554家\\n施工单位",
        "x": "24%",
        "y": "center",
        "textStyle": {
            "color": "#344563",
            "fontWeight": "bolder",
            "fontSize": 18
        }
    },
    "tooltip": {
        "show": true,
        "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "legend": {
        "itemGap": 5,
        "data": ["总承包", "专业承包", "劳务分包"],
        "orient": "vertival",
        "top": 26,
        "left": 150,
        "itemHeight": 10
    },
    "series": [{
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [80, 95],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 299,
            "name": "总承包"
        }, {
            "value": 255,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }, {
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [65, 80],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 167,
            "name": "专业承包"
        }, {
            "value": 387,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }, {
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [50, 65],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 88,
            "name": "劳务分包"
        }, {
            "value": 466,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }]
};
`;

code.area = `
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#F5F572', '#F58DB2', '#5AB1EF', '#FFB980'],
    legend: {
        x : 'center',
        y : 'bottom',
        data:['建设工程','政府采购','产权交易','土地交易']
    },
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            roseType : 'area',
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data:[
                {value:10, name:'建设工程'},
                {value:5, name:'政府采购'},
                {value:15, name:'产权交易'},
                {value:25, name:'土地交易'},
            ]
        }
    ]
};
`;

code.richpie = `
option = {
    title: {
        text: '认证方式',
        top: 'middle',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    series: [{
            color: ["#4193e6"],
            type: 'pie',
            center:['52%', '50%'],
            radius: ['59%', '60%'],
            data: [
                { value: 1 }
            ],
            silent: true,
            label: {
                normal: {
                    show: false
                }
            }
        },
        {
            type: 'pie',
            color: ["#4193e6"],
            center:['52%', '50%'],
            radius: ['35%', '36%'],
            data: [
                { value: 1 }
            ],
            silent: true,
            label: {
                normal: {
                    show: false
                }
            }
        },
        {
            type: 'pie',
            center:['52%', '50%'],
            radius: ['40%', '52%'],
            roseType: 'rose',
            color: ["#9579e5", "#ce7d50", "#3aab82", "#45a6f3"],
            label: {
                normal: {
                    formatter: '{b|{b}}{abg1|}\n {per|{d}%}{abg2|}',
                    // backgroundColor: ,
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        abg1: {
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [4, 4, 0, 0]
                        },
                        abg2: {
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [0, 0, 4, 4]
                        },
                        b: {
                            color: '#fff',
                            lineHeight: 22,
                            align: 'center'
                        },
                        per: {
                            color: '#fff',
                            lineHeight: 22,
                            padding: [2, 4],
                            borderRadius: 2,
                            align: 'center'
                        }
                    }
                }
            },
            data: [
                { value: 35.3, name: '身份证核验' },
                { value: 21.5, name: '支付宝认证' },
                { value: 4.8, name: '银行卡认证' },
                { value: 38.5, name: '线下窗口认证' }
            ]
        }
    ]
};
`;

code.doublepie = `
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    color:['#21c47d','#fc8728','#eed215','#e9429a'],
    series: [
        {
            type:'pie',
            radius: ['43', '60'],
            center: ['center','center'],
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
            data:[
                {value:335, name:'正常办结'},
                {value:310, name:'正在审批'},
                {value:234, name:'不予受理'},
                {value:135, name:'审批不通过'}
            ]
        },{
            type: 'pie',
            radius: [0,27],
            center: ['center','center'],
            data: [
                {value: 40, name: '承诺件'},
                {value: 60, name: '即办件'}
            ],
            color: ['#ffd71b','#e68d2d'],
            label: {
              normal: {
                  show: true,
                  position:'inside',
                  color: '#333',
                  fontSize: 12
              }  
            },
            labelLine: {
                normal: {
                    show: false
                }
            }
        }
    ]
};
`;

code.satisfypie = `
// 第一个pie配置
option = {
    title: {
        text: '全年办件满意度',
        left: 'center',
        bottom: '15%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff'
        }
    },
    series: [{
        type: 'pie',
        radius: ['65%', '75%'],
        center: ['52%', '42%'],
        color: ['#0158BA', 'transparent'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '全年办件满意度',
            value: '98',
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(255,255,255, .9)',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '{d}%',
                    textStyle: {
                        color: '#f99c23',
                        fontSize: 20
                    }

                }
            }
        }, {
            name: 's',
            value: 2
        }]
    }, {
        type: 'pie',
        radius: ['58%', '68%'],
        center: ['52%', '42%'],
        silent: true,
        z: 10,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: 's',
            value: 1,
            itemStyle: {
                normal: {
                    color: '#2F8EF9'
                }
            }
        }]
    }]
};

// 后三个环配置
// 定义特殊角度环形图配置生成方法
function getSatisfactionOption(data, color) {
    var _value = (100 - data.value) * 266 / 360;
    var option = {
        title: {
            text: data.name,
            left: 'center',
            bottom: '15%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff'
            }
        },
        series: [{
            type: 'pie',
            radius: ['70%', '85%'],
            startAngle: 225,
            color: [color, 'transparent'],
            silent: true,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 75,
                name: '1'
            }, {
                value: 25,
                name: '2'
            }]
        }, {
            color: ['#000960', 'transparent'],
            type: 'pie',
            radius: ['71%', '84%'],
            silent: true,
            startAngle: 316,
            clockWise: false,
            zlevel: 2,
            data: [{
                value: _value,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: data.value + '%',
                        textStyle: {
                            color: color,
                            fontSize: 20
                        }

                    }
                }
            }, {
                name: '',
                value: 100 - _value
            }]
        }]
    };
    return option;
}
chartObj.setOption(getSatisfactionOption({ name: '非常满意', value: 80.2 }, '#E09823'));
`;

code.timelinepie = `
  option = {
    baseOption: {
      timeline: {
        axisType: "category",
        autoPlay: true,
        controlStyle: {
          showPlayBtn: false,
          normal: {
            borderColor: "#fff"
          },
          emphasis: {
            borderColor: "#fff"
          }
        },
        itemStyle: {
          normal: {
            color: "#04e1fb"
          },
          emphasis: {
            color: "#ed831b"
          }
        },
        lineStyle: {
          color: "#487fdc"
        },
        checkpointStyle: {
          color: "#ed831b",
          borderColor: "#ed831b"
        },
        label: {
          normal: {
            color: "#fff"
          }
        },
        data: ["2015", "2016", "2017"]
      },
      legend: {
        x: "center",
        data: ["建设工程", "政府采购", "产权交易", "土地交易"],
        textStyle: {
          color: "#fff",
          fontSize: 12
        },
        itemWidth: 13,
        itemHeight: 8
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: "占比",
          type: "pie",
          radius: ["35%", "52%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              color: "#fff"
            },
            emphasis: {
              show: true
            }
          }
        },
        {
          type: "pie",
          radius: ["30%", "31%"],
          center: ["50%", "45%"],
          data: [1],
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          hoverAnimation: false,
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: "#3254ba"
            },
            emphasis: {
              show: false
            }
          }
        },
        {
          type: "pie",
          radius: ["56%", "57%"],
          center: ["50%", "45%"],
          data: [1],
          label: {
            normal: {
              show: false
            }
          },
          hoverAnimation: false,
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: "#3254ba"
            }
          }
        }
      ],
      color: ["#9167d0", "#0ca689", "#02e3fc", "#ed831b"]
    },
    options: [
      {
        series: [
          {
            data: [
              {
                name: "建设工程",
                value: 262
              },
              {
                name: "政府采购",
                value: 4
              },
              {
                name: "产权交易",
                value: 128
              },
              {
                name: "土地交易",
                value: 48
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: "建设工程",
                value: 118
              },
              {
                name: "政府采购",
                value: 76
              },
              {
                name: "产权交易",
                value: 235
              },
              {
                name: "土地交易",
                value: 188
              }
            ]
          }
        ]
      },
      {
        series: [
          {
            data: [
              {
                name: "建设工程",
                value: 7
              },
              {
                name: "政府采购",
                value: 292
              },
              {
                name: "产权交易",
                value: 47
              },
              {
                name: "土地交易",
                value: 261
              }
            ]
          }
        ]
      }
    ]
  };
`;

code.selectedpie = `
  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ["#06a8b7", "#9167d0"],
    series: [
      {
        name: "统计",
        type: "pie",
        selectedMode: "single",
        radius: [0, "80%"],
  
        label: {
          normal: {
            position: "inner"
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 40, name: "外地\n人员" },
          { value: 60, name: "本地\n人员", selected: true }
        ]
      }
    ]
  };
`;

code.couplepie = `
  option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      left: 20,
      y: "top",
      data: ["结婚对数", "离婚对数"],
      textStyle: {
        color: "#fff"
      }
    },
    color: ["#f6ab29", "#009dd2"],
    calculable: true,
    series: [
      {
        type: "pie",
        radius: 54,
        center: ["30%", "50%"],
        roseType: "area",
        data: [
          { value: 52, name: "结婚对数" },
          { value: 133, name: "离婚对数" },
          { value: 79, name: "结婚对数" },
          { value: 93, name: "离婚对数" },
          { value: 180, name: "结婚对数" },
          { value: 181, name: "离婚对数" },
          { value: 168, name: "结婚对数" },
          { value: 172, name: "离婚对数" },
          { value: 131, name: "结婚对数" },
          { value: 190, name: "离婚对数" }
        ],
        label: {
          normal: {
            show: false
          }
        },
        z: 10
      },
      {
        type: "pie",
        radius: 78,
        center: ["30%", "50%"],
        roseType: "area",
        data: [
          { name: "2012", value: 185 },
          { name: "2013", value: 172 },
          { name: "2014", value: 361 },
          { name: "2015", value: 340 },
          { name: "2016", value: 321 }
        ],
        label: {
          normal: {
            color: "#fff"
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            color: "#e3e3e3"
          }
        }
      }
    ]
  };
`;

code.guagepie = `
option = {
    title: {
        text: '内存占用率',
        x: '50%',
        y: '45%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24
        },
        subtext: '50%',
        subtextStyle: {
            fontWeight: 'bold',
            fontSize: 32,
            color: '#3ea1ff'
        }
    },
    series: [{
            name: ' ',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
            }]), "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    borderColor: "transparent",
                    borderWidth: "20"
                },
                emphasis: {
                    borderColor: "transparent",
                    borderWidth: "20"
                }
            },
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 50*75/100
            }, {
                value: 100 - 50*75/100
            }]
        }, {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: ["#c2f5e1", "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }

    ]
};
`;

export default code;