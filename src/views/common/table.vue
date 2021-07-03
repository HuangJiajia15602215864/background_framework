<template>
	<div class="table">
		<Table ref="tableComponent" :columns="columns" :tableData="tableData" :listLoading="listLoading" :total="total"
		 :border="tableProp.border" :selection="tableProp.selection" :tableName="tableProp.tableName" :add="actionProp.add" :edit="actionProp.edit" :remove="actionProp.remove"
		 :download="actionProp.download" :rowClass="rowClass" :renderHeader="renderHeader" :exportFormat="exportFormat"
		 @getList="getList" @selectionChange="selectionChange" @handleRemove="handleRemove">
			<span slot="top-button">
				<el-button type="danger" icon="el-icon-delete" size="small" :disabled="batchRemoveDis" @click="batchRemove" class="marginLeft-10">批量删除</el-button>
			</span>
			<span slot="action-button">
				<el-button type="text" icon="el-icon-edit" class="edit-button">编辑</el-button>
			</span>
		</Table>
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
				tableProp: { // 表格属性
					border: true, // 表格是否加边框
					selection: true, // 表格是否支持多选
					tableName:'表格使用实例'
				},
				actionProp: { // 操作按钮属性（是否显示）
					add: true,
					edit: false,
					remove: true,
					download: true
				},
				total: 0, // 表格总数
				idStr: '', // 批量ID
				batchRemoveDis: true, // 批量删除按钮是否可用
				columns: [{
					prop:'expand',
					type: 'expand',
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
					align: 'left',
					tip: '这是标题'
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
				}, ]
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
		// mounted() {
		// 	this.getList()
		// },
		methods: {
			// 获取数据列表
			getList() {
				this.listLoading = true
				getList(this.$refs.tableComponent.pagination).then(res => {
					this.tableData = res.data.items
					this.total = res.data.total
					this.listLoading = false
				})
			},
			handleRemove(id) {
				getList({
					id: id
				}).then(res => {
					this.$message({
						type: 'success',
						message: '成功!'
					});
					if (this.tableData.length == 1 && this.total != 1) {
						this.$refs.tableComponent.pagination.page_num--
					}
					this.getList()
				})
			},
			selectionChange(val) {
				this.idStr = ''
				let len = val.length
				for (let i = 0; i < len; i++) {
					this.idStr += val[i].id + ','
				}
				this.idStr = this.idStr.substring(0, this.idStr.length - 1)
				if (len < 2) {
					this.batchRemoveDis = true
				} else {
					this.batchRemoveDis = false
				}
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
			},
			// 渲染表头
			renderHeader(h, {
				column
			}) {
				if (column.property == 'title') {
					return h(
						'div',
						[
							h('span', column.label),
							h('el-tooltip', {
								props: {
									placement: 'top',
									content: column.columnKey,
									popperClass: 'atooltip'
								}
							}, [
								h('i', {
									class: 'el-icon-question',
									style: 'color:#958bc2;margin-left:5px;'
								})
							])
						]
					)
				} else {
					return h('div', column.label)
				}
			},
			batchRemove() {
				console.log(this.idStr)
			},
			// 导出格式化
			exportFormat(filterVal) {
				return this.tableData.map(v =>
					filterVal.map(j => {
						if (j == 'author') {
							return v.author + '无'
						}
						return v[j];
					})
				);
			}
		}
	}
</script>
<style lang="scss">
	.table {
		.warning-row {
			color: #F56C6C;
		}
	}
</style>
