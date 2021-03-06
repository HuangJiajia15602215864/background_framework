<template>
  <div class="radar">
    <chart :option="radarOption" width="50%" style="float:left" />
    <chart :option="markerOption" width="50%" style="float:left;margin-top:50px" />
    <chart :option="colorOption" width="100%" height="600px" style="float:left;margin-top: 20px;" />
    <chart :option="aqiOption" width="100%" height="600px" style="float:left;margin-top: 20px;" />
  </div>
</template>
<script>
  import chart from '@/components/chart/index.vue'
  export default {
    name: 'radar',
    components: {
      chart
    },
    data() {
      return {
        colorOption: {
          title: {
            text: '浏览器占比变化',
            subtext: '纯属虚构',
            top: 10,
            left: 10
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,250,0.2)'
          },
          legend: {
            type: 'scroll',
            bottom: 10,
            data: (function () {
              var list = [];
              for (var i = 1; i <= 28; i++) {
                list.push(i + 2000 + '');
              }
              return list;
            })()
          },
          visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
          },
          radar: {
            indicator: [{
                text: 'IE8-',
                max: 400
              },
              {
                text: 'IE9+',
                max: 400
              },
              {
                text: 'Safari',
                max: 400
              },
              {
                text: 'Firefox',
                max: 400
              },
              {
                text: 'Chrome',
                max: 400
              }
            ]
          },
          series: (function () {
            var series = [];
            for (var i = 1; i <= 28; i++) {
              series.push({
                name: '浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                  width: 1
                },
                emphasis: {
                  areaStyle: {
                    color: 'rgba(0,250,0,0.3)'
                  }
                },
                data: [{
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    i * i / 2
                  ],
                  name: i + 2000 + ''
                }]
              });
            }
            return series;
          })()
        },
        markerOption: {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          radar: {
            radius: '66%',
            center: ['50%', '42%'],
            splitNumber: 5,
            splitArea: {
              areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15
              }
            },
            indicator: [{
                name: 'Sales',
                max: 10000
              },
              {
                name: 'Administration',
                max: 20000
              },
              {
                name: 'Information Technology',
                max: 20000
              },
              {
                name: 'Customer Support',
                max: 20000
              },
              {
                name: 'Development',
                max: 20000
              },
              {
                name: 'Marketing',
                max: 20000
              }
            ]
          },
          legend: {
            left: '0',
            bottom: '0',
            orient: 'vertical',
            data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
          },
          series: [{
            type: 'radar',
            symbolSize: 0,
            areaStyle: { // 块（而不是线）
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: [{
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: 'Allocated Budget'
              },
              {
                value: [4000, 9000, 15000, 15000, 13000, 11000],
                name: 'Expected Spending'
              },
              {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: 'Actual Spending'
              }
            ],
            animationDuration: 3000
          }]
        },
        aqiOption: {
          backgroundColor: '#161627',
          title: {
            text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
              color: '#eee'
            }
          },
          legend: {
            bottom: 5,
            data: ['北京', '上海', '广州'],
            itemGap: 20, // 每一项的间隔
            textStyle: {
              color: '#fff',
              fontSize: 14
            },
            selectedMode: 'single'
          },
          radar: {
            indicator: [{ // 各个指标最大值
                name: 'AQI',
                max: 300
              },
              {
                name: 'PM2.5',
                max: 250
              },
              {
                name: 'PM10',
                max: 300
              },
              {
                name: 'CO',
                max: 5
              },
              {
                name: 'NO2',
                max: 200
              },
              {
                name: 'SO2',
                max: 100
              }
            ],
            shape: 'circle', // 圆形
            splitNumber: 5, // 分割线数量
            name: {
              textStyle: { // 文字样式
                color: 'rgb(238, 197, 102)'
              }
            },
            splitLine: {
              lineStyle: {
                color: [ // 分割线颜色变化（顺序写为由里到外，这里反转）
                  'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                  'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
              }
            },
            splitArea: { // 背景不展示，采用定义的背景颜色
              show: false
            },
            axisLine: {
              lineStyle: { // 分割线颜色
                color: 'rgba(238, 197, 102, 0.5)'
              }
            }
          },
          series: [{
              name: '北京',
              type: 'radar',
              lineStyle: this.lineStyle,
              data: this.dataBJ,
              symbol: 'none',
              itemStyle: {
                color: '#F9713C'
              },
              areaStyle: {
                opacity: 0.1
              }
            },
            {
              name: '上海',
              type: 'radar',
              lineStyle: this.lineStyle,
              data: this.dataSH,
              symbol: 'none',
              itemStyle: {
                color: '#B3E4A1'
              },
              areaStyle: {
                opacity: 0.05
              }
            },
            {
              name: '广州',
              type: 'radar',
              lineStyle: this.lineStyle,
              data: this.dataGZ,
              symbol: 'none',
              itemStyle: {
                color: 'rgb(238, 197, 102)'
              },
              areaStyle: {
                opacity: 0.05
              }
            }
          ]
        },
        radarOption: {
          title: { // 标题（没有指明格式统一左对齐，顶部）
            text: '基础雷达图'
          },
          legend: {
            bottom: 0,
            left: 0,
            orient: 'vertical',
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',（circle为圆形、默认为多边形）
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [5, 5]
              }
            },
            indicator: [{ // 各个值的最大值
                name: '销售（sales）',
                max: 6500
              },
              {
                name: '管理（Administration）',
                max: 16000
              },
              {
                name: '信息技术（Information Techology）',
                max: 30000
              },
              {
                name: '客服（Customer Support）',
                max: 38000
              },
              {
                name: '研发（Development）',
                max: 52000
              },
              {
                name: '市场（Marketing）',
                max: 25000
              }
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）',
                label: { // 显示数值
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  }
                }
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）',
                lineStyle: { // 虚线
                  type: 'dashed'
                }
              }
            ]
          }]
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };
        var dataBJ = [
          [55, 9, 56, 0.46, 18, 6, 1],
          [25, 11, 21, 0.65, 34, 9, 2],
          [56, 7, 63, 0.3, 14, 5, 3],
          [33, 7, 29, 0.33, 16, 6, 4],
          [42, 24, 44, 0.76, 40, 16, 5],
          [82, 58, 90, 1.77, 68, 33, 6],
          [74, 49, 77, 1.46, 48, 27, 7],
          [78, 55, 80, 1.29, 59, 29, 8],
          [267, 216, 280, 4.8, 108, 64, 9],
          [185, 127, 216, 2.52, 61, 27, 10],
          [39, 19, 38, 0.57, 31, 15, 11],
          [41, 11, 40, 0.43, 21, 7, 12],
          [64, 38, 74, 1.04, 46, 22, 13],
          [108, 79, 120, 1.7, 75, 41, 14],
          [108, 63, 116, 1.48, 44, 26, 15],
          [33, 6, 29, 0.34, 13, 5, 16],
          [94, 66, 110, 1.54, 62, 31, 17],
          [186, 142, 192, 3.88, 93, 79, 18],
          [57, 31, 54, 0.96, 32, 14, 19],
          [22, 8, 17, 0.48, 23, 10, 20],
          [39, 15, 36, 0.61, 29, 13, 21],
          [94, 69, 114, 2.08, 73, 39, 22],
          [99, 73, 110, 2.43, 76, 48, 23],
          [31, 12, 30, 0.5, 32, 16, 24],
          [42, 27, 43, 1, 53, 22, 25],
          [154, 117, 157, 3.05, 92, 58, 26],
          [234, 185, 230, 4.09, 123, 69, 27],
          [160, 120, 186, 2.77, 91, 50, 28],
          [134, 96, 165, 2.76, 83, 41, 29],
          [52, 24, 60, 1.03, 50, 21, 30],
          [46, 5, 49, 0.28, 10, 6, 31]
        ];
        var dataGZ = [
          [26, 37, 27, 1.163, 27, 13, 1],
          [85, 62, 71, 1.195, 60, 8, 2],
          [78, 38, 74, 1.363, 37, 7, 3],
          [21, 21, 36, 0.634, 40, 9, 4],
          [41, 42, 46, 0.915, 81, 13, 5],
          [56, 52, 69, 1.067, 92, 16, 6],
          [64, 30, 28, 0.924, 51, 2, 7],
          [55, 48, 74, 1.236, 75, 26, 8],
          [76, 85, 113, 1.237, 114, 27, 9],
          [91, 81, 104, 1.041, 56, 40, 10],
          [84, 39, 60, 0.964, 25, 11, 11],
          [64, 51, 101, 0.862, 58, 23, 12],
          [70, 69, 120, 1.198, 65, 36, 13],
          [77, 105, 178, 2.549, 64, 16, 14],
          [109, 68, 87, 0.996, 74, 29, 15],
          [73, 68, 97, 0.905, 51, 34, 16],
          [54, 27, 47, 0.592, 53, 12, 17],
          [51, 61, 97, 0.811, 65, 19, 18],
          [91, 71, 121, 1.374, 43, 18, 19],
          [73, 102, 182, 2.787, 44, 19, 20],
          [73, 50, 76, 0.717, 31, 20, 21],
          [84, 94, 140, 2.238, 68, 18, 22],
          [93, 77, 104, 1.165, 53, 7, 23],
          [99, 130, 227, 3.97, 55, 15, 24],
          [146, 84, 139, 1.094, 40, 17, 25],
          [113, 108, 137, 1.481, 48, 15, 26],
          [81, 48, 62, 1.619, 26, 3, 27],
          [56, 48, 68, 1.336, 37, 9, 28],
          [82, 92, 174, 3.29, 0, 13, 29],
          [106, 116, 188, 3.628, 101, 16, 30],
          [118, 50, 0, 1.383, 76, 11, 31]
        ];
        var dataSH = [
          [91, 45, 125, 0.82, 34, 23, 1],
          [65, 27, 78, 0.86, 45, 29, 2],
          [83, 60, 84, 1.09, 73, 27, 3],
          [109, 81, 121, 1.28, 68, 51, 4],
          [106, 77, 114, 1.07, 55, 51, 5],
          [109, 81, 121, 1.28, 68, 51, 6],
          [106, 77, 114, 1.07, 55, 51, 7],
          [89, 65, 78, 0.86, 51, 26, 8],
          [53, 33, 47, 0.64, 50, 17, 9],
          [80, 55, 80, 1.01, 75, 24, 10],
          [117, 81, 124, 1.03, 45, 24, 11],
          [99, 71, 142, 1.1, 62, 42, 12],
          [95, 69, 130, 1.28, 74, 50, 13],
          [116, 87, 131, 1.47, 84, 40, 14],
          [108, 80, 121, 1.3, 85, 37, 15],
          [134, 83, 167, 1.16, 57, 43, 16],
          [79, 43, 107, 1.05, 59, 37, 17],
          [71, 46, 89, 0.86, 64, 25, 18],
          [97, 71, 113, 1.17, 88, 31, 19],
          [84, 57, 91, 0.85, 55, 31, 20],
          [87, 63, 101, 0.9, 56, 41, 21],
          [104, 77, 119, 1.09, 73, 48, 22],
          [87, 62, 100, 1, 72, 28, 23],
          [168, 128, 172, 1.49, 97, 56, 24],
          [65, 45, 51, 0.74, 39, 17, 25],
          [39, 24, 38, 0.61, 47, 17, 26],
          [39, 24, 39, 0.59, 50, 19, 27],
          [93, 68, 96, 1.05, 79, 29, 28],
          [188, 143, 197, 1.66, 99, 51, 29],
          [174, 131, 174, 1.55, 108, 50, 30],
          [187, 143, 201, 1.39, 89, 53, 31]
        ];
        this.aqiOption.series[0].lineStyle = lineStyle
        this.aqiOption.series[1].lineStyle = lineStyle
        this.aqiOption.series[2].lineStyle = lineStyle
        this.aqiOption.series[0].data = dataBJ
        this.aqiOption.series[1].data = dataGZ
        this.aqiOption.series[2].data = dataSH
      }
    }
  }

</script>
<style lang="scss" scoped>
  .line {
    background: #fff;
    padding: 16px 5px 0 5px;
    min-height: 800px;
  }

</style>
