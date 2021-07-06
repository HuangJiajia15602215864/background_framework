<template>
    <el-select ref="dragSelect" v-model="selectVal" v-bind="$attrs" class="drag-select" multiple v-on="$listeners">
        <el-option v-for="item in value" :key="item.id" :label="item.text" :value="item.id" />
    </el-select>
</template>

<script>
    import Sortable from 'sortablejs'

    export default {
        name: 'DragSelect',
        data() {
            return {
                value: [{
                        id:1,
                        text: "Aquamarine",
                    },
                    {
                        id:2,
                        text: "Hotpink",
                    },
                    {
                        id:3,
                        text: "Gold",
                    },
                    {
                        id:4,
                        text: "Crimson",
                    },

                ],
            }
        },
        computed: {
            selectVal: {
                get() {
                    return [...this.value]
                },
                set(val) {
                    this.$emit('input', [...val])
                }
            }
        },
        mounted() {
            this.setSort()
        },
        methods: {
            setSort() {
                const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
                this.sortable = Sortable.create(el, {
                    ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
                    setData: function (dataTransfer) {
                        dataTransfer.setData('Text', '')
                        // to avoid Firefox bug
                        // Detail see : https://github.com/RubaXa/Sortable/issues/1012
                    },
                    onEnd: evt => {
                        const targetRow = this.value.splice(evt.oldIndex, 1)[0]
                        this.value.splice(evt.newIndex, 0, targetRow)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drag-select {
        ::v-deep {
            .sortable-ghost {
                opacity: .8;
                color: #fff !important;
                background: rgba(53, 51, 153, 0.9) !important;
            }

            .el-tag {
                cursor: pointer;
            }
        }
    }
</style>