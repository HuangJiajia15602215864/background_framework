<template>
  <div class="datePicker">
    <el-date-picker type="date" placeholder="开始日期" :picker-options="startOptions" v-model="start_date">
    </el-date-picker> -
    <el-date-picker type="date" placeholder="结束日期" :picker-options="endOptions" v-model="end_date">
    </el-date-picker>
    <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        start_date: '',
        end_date: '',
        date: '',
        startOptions: { // 开始时间不可选
          disabledDate: time => {
            if (this.end_date) {
              return time.getTime() > new Date(this.end_date).getTime()
            } else {
              return time.getTime() > Date.now()
            }
          }
        },
        endOptions: { // 结束时间不可选
          disabledDate: time => {
            if (this.start_date) {
              return time.getTime() < new Date(this.start_date).getTime() - 86400000 || time.getTime() > Date
                .now();
            } else {
              return time.getTime() > Date.now()
            }
          }
        },
      }
    },
    methods: {

    }
  }

</script>
