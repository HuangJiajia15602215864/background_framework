<template>
  <div class="bar">
    <chart :option="barOption" width="50%" height="600px" style="float:left" />
    <chart :option="animationOption" width="50%" style="float:left" />
    <!-- <chart :option="markerOption" width="50%" style="float:left;margin-top:50px" /> -->
  </div>
</template>
<script>
  import echarts from 'echarts'
  import chart from '@/components/chart/index.vue'
  export default {
    name: 'bar',
    components: {
      chart
    },
    data() {
      return {
        animationData1: [],
        animationData2: [],
        xAxisData: [],
        barOption: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['蒸发量', '降水量']
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }],
          yAxis: [{
            type: 'value'
          }],
          dataZoom: [{ // 在图表内触发缩放
            type: 'inside'
          }],
          series: [{
              name: '蒸发量',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              itemStyle: {
                color: new echarts.graphic.LinearGradient( //柱条的颜色
                  0, 0, 0, 1,
                  [{
                      offset: 0,
                      color: '#83bff6'
                    },
                    {
                      offset: 0.5,
                      color: '#188df0'
                    },
                    {
                      offset: 1,
                      color: '#188df0'
                    }
                  ]
                )
              },
              markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                  },
                  {
                    type: 'min',
                    name: '最小值'
                  }
                ]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            },
            {
              name: '降水量',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              itemStyle: {
                color: new echarts.graphic.LinearGradient( //柱条的颜色
                  0, 0, 0, 1,
                  [{
                      offset: 0,
                      color: '#ffca7f'
                    },
                    {
                      offset: 0.5,
                      color: '#ffb146'
                    },
                    {
                      offset: 1,
                      color: '#ff9709'
                    }
                  ]
                )
              },
              markPoint: {
                data: [{
                    name: '年最高',
                    value: 182.2,
                    xAxis: 7,
                    yAxis: 183
                  },
                  {
                    name: '年最低',
                    value: 2.3,
                    xAxis: 11,
                    yAxis: 3
                  }
                ]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            }
          ]
        },
        animationOption: {
          legend: {
            data: ['bar', 'bar2']
          },
          toolbox: {
            // y: 'bottom',
            feature: {
              magicType: {
                type: ['stack', 'tiled']
              },
              dataView: {},
              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: this.xAxisData,
            splitLine: {
              show: false
            }
          },
          yAxis: {},
          series: [{
            name: 'bar',
            type: 'bar',
            data: this.animationData1,
            animationDelay: function (idx) {
              return idx * 10;
            }
          }, {
            name: 'bar2',
            type: 'bar',
            data: this.animationData2,
            animationDelay: function (idx) {
              return idx * 10 + 100;
            }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5;
          }
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        for (var i = 0; i < 100; i++) {
          this.xAxisData.push('类目' + i);
          this.animationData1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
          this.animationData2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  .bar {
    background: #fff;
    padding: 16px 5px 0 5px;
    min-height: 800px;
  }

</style>
