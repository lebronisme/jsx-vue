<template>
  <div>
    <CustomJS :obj="obj" @parentEvent="parentEvent"></CustomJS>
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
        datalist: [
          { id: 1, name: '张三' },
          { id: 2, name: '李四' },
          { id: 3, name: '王五' },
          { id: 4, name: '赵六' },
          { id: 5, name: '田七' },
        ],//这里之所以要把所有数据放在obj中，是因为单独传过去，datalist无法被接收到，问题没找到，先这样解决
      },

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
