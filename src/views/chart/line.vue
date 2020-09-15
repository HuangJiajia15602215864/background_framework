<template>
  <div class="line">
    <chart :option="lineOption" />
  </div>
</template>
<script>
  import chart from '@/components/chart/index.vue'
  export default {
    name: 'line',
    components: {
      chart
    },
    data() {
      return {
        chartData: {
          expectedData: [100, 120, 161, 134, 105, 160, 165],
          actualData: [120, 82, 91, 154, 162, 140, 145]
        },
        lineOption: {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false, // 坐标轴两边是否留白  
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            containLabel: true // grid 区域是否包含坐标轴的刻度标签
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: ['expected', 'actual']
          },
          series: [{
              name: 'expected',
              itemStyle: {
                normal: {
                  color: '#FF005A',
                  lineStyle: {
                    color: '#FF005A',
                    width: 2
                  }
                }
              },
              smooth: true,
              type: 'line',
              data: [],
              animationDuration: 2800,
              animationEasing: 'cubicInOut'
            },
            {
              name: 'actual',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  lineStyle: {
                    color: '#3888fa',
                    width: 2
                  },
                  areaStyle: {
                    color: '#f3f8ff'
                  }
                }
              },
              data: [],
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }
          ]
        }
      }
    },
    mounted(){
      this.goData()
    },
    methods: {
      goData(){
        this.lineOption.series[0].data = this.chartData.expectedData
        this.lineOption.series[1].data = this.chartData.actualData
      }
    }
  }

</script>
<style lang="scss" scoped>
  .line {
    background: #fff;
    padding: 16px 5px 0 5px;
  }

</style>
