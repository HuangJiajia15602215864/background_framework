<template>
	<div class="table">
		<Table :columns="columns" :tableData="tableData" :listLoading="listLoading" :total="total" :border="tableProp.border"
		 :selection="tableProp.selection" :rowClass="rowClass"></Table>
	</div>
</template>
<script>
	import table from '@/components/Table/index.vue'
	import {
		getList
	} from '@/api/table'
	export default {
		components: {
			'Table': table
		},
		data() {
			return {
				listLoading: false, // 表格是否加载
				tableData: [], // 表格数据
				total: 0, // 表格是否总数
				tableProp: { // 表格属性
					border: true, // 表格是否加边框
					selection: true, // 表格是否支持多选
				},
				columns: [{
						type:'expand',
						renderName: 'expand',
						render: (row, h) => {
							return h('div', [
								h('i', {
									class: 'el-icon-time'
								}),
								h('span', row.display_time + row.author)
							])
						}
					}, {
						prop: 'title',
						label: '标题',
						width: '200',
						align: 'left'
					}, {
						prop: 'author',
						label: '作者'
					}, {
						prop: 'status',
						label: '状态',
						type: 'renderHtml',
						renderName: 'status',
						render: (row, h) => {
							return h('el-tag', {
								props: {
									type: this.$options.filters.statusFilter(row.status)
								}
							}, this.$options.filters.statusFilter(row.status))
						}
					}, {
						prop: 'display_time',
						label: '创建时间',
						type: 'renderHtml',
						renderName: 'display_time',
						render: (row, h) => {
							return h('div', [
								h('i', {
									class: 'el-icon-time'
								}),
								h('span', row.display_time + row.author)
							])
						}
					}

				]
			}
		},
		filters: {
			statusFilter(status) {
				const statusMap = {
					published: 'success',
					draft: 'info',
					deleted: 'danger'
				}
				return statusMap[status]
			}
		},
		created() {
			this.getList()
		},
		methods: {
			// 获取数据列表
			getList() {
				this.listLoading = true
				getList().then(res => {
					this.tableData = res.data.items
					this.total = this.tableData.length
					this.listLoading = false
				})
			},
      // 行特殊渲染
      rowClass({
        row
      }) {
        if (row.status == 'deleted') {
          return 'warning-row'
        } else {
          return ''
        }
      }
		}
	}
</script>
<style lang="scss">
	.table{
		.warning-row{
			 color: #F56C6C;
		}
	}
</style>
