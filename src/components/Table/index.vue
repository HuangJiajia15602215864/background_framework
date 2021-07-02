<template>
	<div class="component-table">
		<el-table v-loading="listLoading" :data="tableData" element-loading-text="Loading" :border="border" fit
		 :row-class-name="rowClass" @selection-change="selectionChange" 
		 :cell-style="{padding:'1px'}" :header-cell-style="{background:'#f8f8f9',color:'#333','font-weight': '600'}">
			<el-table-column v-if="selection" type="selection" width="55"></el-table-column>
			<el-table-column v-for="i in columns" :prop="i.prop" :label="i.label" :width="i.width||'auto'" :align="i.align ||'center'"
			 :type="i.type" show-overflow-tooltip>
				<template slot-scope="scope">
					<div v-if="i.type == 'renderHtml'">
						{{ renderToHtml(i, scope.row) }}
						<slot :name="i.renderName"></slot>
					</div>
					<div v-else-if="i.type == 'expand'">
						{{ renderToHtml(i, scope.row) }}
						<slot :name="i.renderName"></slot>
					</div>
					<div v-else>{{ scope.row[i.prop] }}</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			columns: {
				type: Array
			},
			tableData: {
				type: Array
			},
			listLoading: {
				type: Boolean,
				default: false
			},
			total: {
				type: Number,
				default: 0
			},
			border: {
				type: Boolean,
				default: false
			},
			selection: {
				type: Boolean,
				default: false
			},
			rowClass:{
				type:Function
			}
		},
		mounted() {

		},
		methods: {
			// 多选变化
			selectionChange(val) {
				this.$emit('selectionChange',val)  
			},
			// render渲染
			renderToHtml(i, row) {
				if (typeof i.render === 'function') {
					this.$slots[i.renderName] = [i.render(row, this.$createElement)]
					return
				}
				return
			},
		}
	}
</script>
