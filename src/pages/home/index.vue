<template>
  <div class="container">
        <jb-header>这是头部</jb-header>
        <div class="main-body-wrapper">
         <jb-left>左</jb-left>
         <jb-main>中</jb-main>
         <jb-right>右</jb-right>
         </div>
  </div>
</template>

<script>

import topHeader from '../../layout/topHeader/index.vue'
import siderLeft from '../../layout/centerMain/index.vue'
import siderRight from '../../layout/rightSider/index.vue'
import centerMain from '../../layout/leftSider/index.vue'


export default {
  components:{
    'jb-header':topHeader,
    'jb-left':siderLeft,
    'jb-right':siderRight,
    'jb-main':centerMain
  }
}
</script>

<style lang="scss">
  .main-body-wrapper{
    display: flex;
    flex-direction: row;
    padding:3rem 4rem;
  }
</style>