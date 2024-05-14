<template>
  <div>
    <CustomJS :dataList='dataList' :obj="obj" @parentEvent="parentEvent"></CustomJS>
  </div>
</template>

<script>
import CustomJS from './Custom'
export default {
  name: 'CustomM',
  components: { CustomJS },
  data () {
    return {
      obj: {
        msg: '点我',
      },
      dataList: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
        { id: 4, name: '赵六' },
        { id: 5, name: '田七' },
      ],
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  methods: {
    parentEvent (data) {
      console.log(data, '子组件触发父组件事件')
    }
  },
}
</script>

<style lang='scss' scoped>
</style>
