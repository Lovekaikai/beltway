<template>
  <div id="business">
    <Bheader></Bheader>
    <div class="store">
      <div class="main">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">asdsad</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">sadsad</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import Bheader from '@/view/header.vue'
export default {
  components: {
    Bheader
  }
}
</script>
