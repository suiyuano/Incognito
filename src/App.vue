<template>
  <div class="index">
    <el-container>
      <el-header class="header-parent-class">
        <div class="header-div-class">
          <span>header</span>
          <p>
            首页
          </p>
        </div>
      </el-header>
      <el-main class="main-parent-class">
        <div>
          <span>content</span>
        </div>
      </el-main>
      <el-footer>
        <div class="footer-div">
          <span class="footer-span">&copy; Incognito - Talk to youself.</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.footer-div{
  align-items: center;
  text-align: center;
}
.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.el-main {
  height: 100%;
  overflow: hidden;
}
.el-footer {
  display: flex;
  height: 4vh;
  width: 100%;
  align-items: center;
  text-align: center;
}
.el-header {
  display: flex;
  height: 70px;
  width: 100%;
  position: fixed;
  background: #33659b;
  top:0px;
  left:0px;
}

</style>


<!--template>
  <img src="./assets/logo.png">
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style-->

