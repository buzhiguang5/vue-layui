<template>
  <div id="app">
    <lay-admin :collapse.sync="collapse">
      <lay-side>
        <lay-menu :default-openeds="[0, 1, 2]">
          <lay-menu-item :index="0" icon="component" title="快速开始">
            <lay-menu-child-item
              title="首页"
              :to="{ name: 'home' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="关于vue-layui"
              :to="{ name: 'about' }"
            ></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="1" icon="component">
            <template slot="title">
              <span>布局</span>
            </template>
            <lay-menu-child-item
              title="栅格"
              :to="{ name: 'grid' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="后台布局"
              :to="{ name: 'admin' }"
            ></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="2" icon="component">
            <template slot="title">
              <span>基本元素</span>
            </template>
            <lay-menu-child-item
              title="按钮"
              :to="{ name: 'button' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="表单"
              :to="{ name: 'form' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="导航/面包屑"
              :to="{ name: 'nav' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="选项卡"
              :to="{ name: 'tabs' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="进度条"
              :to="{ name: 'progress' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="面板"
              :to="{ name: 'panel' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="徽章"
              :to="{ name: 'badge' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="时间线"
              :to="{ name: 'timeline' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="静态表格"
              :to="{ name: 'table' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="动画"
              :to="{ name: 'animation' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="辅助元素"
              :to="{ name: 'auxiliar' }"
            ></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="3" icon="component">
            <template slot="title">
              <span>组件示例</span>
            </template>
            <lay-menu-child-item
              title="弹出层"
              :to="{ name: 'layer' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="分页"
              :to="{ name: 'laypage' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="颜色选择器"
              :to="{ name: 'colorPicker' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="滑块"
              :to="{ name: 'slider' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="评分"
              :to="{ name: 'rate' }"
            ></lay-menu-child-item>
            <lay-menu-child-item
              title="轮播"
              :to="{ name: 'carousel' }"
            ></lay-menu-child-item>
          </lay-menu-item>
        </lay-menu>
      </lay-side>
      <div>
        <lay-header>
          <lay-logo>
            <span v-if="!collapse">vue-layui</span>
            <img
              v-else
              width="30"
              src="https://cos.jskou.com/vue-layui-logo.png"
              alt
            />
          </lay-logo>
          <lay-menu
            mode="horizontal"
            class="layui-layout-left"
            :class="{
              'is-collapse': collapse
            }"
          >
            <lay-menu-item :index="0">
              <template slot="title">
                <i
                  @click="collapse = !collapse"
                  class="layui-icon"
                  :class="{
                    'layui-icon-spread-left': collapse,
                    'layui-icon-shrink-right': !collapse
                  }"
                />
              </template>
            </lay-menu-item>
            <lay-menu-item :index="1">
              <template slot="title">
                <span>导航一</span>
              </template>
              <lay-menu-child-item title="基本资料"></lay-menu-child-item>
              <lay-menu-child-item title="安全设置"></lay-menu-child-item>
            </lay-menu-item>
            <lay-menu-item :index="2">
              <template slot="title">
                <span>导航一</span>
              </template>
            </lay-menu-item>
            <lay-menu-item :index="3">
              <template slot="title">
                <span>导航一</span>
              </template>
            </lay-menu-item>
          </lay-menu>
          <lay-menu mode="horizontal" class="layui-layout-right">
            <lay-menu-item :index="0">
              <template slot="title">
                <img
                  src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4"
                  class="layui-nav-img"
                />
                admin
              </template>
              <lay-menu-child-item title="基本资料"></lay-menu-child-item>
              <lay-menu-child-item title="安全设置"></lay-menu-child-item>
            </lay-menu-item>
            <lay-menu-item :index="0">
              <template slot="title"
                >退出</template
              >
            </lay-menu-item>
          </lay-menu>
        </lay-header>
        <lay-body>
          <div class="layui-main site-demo-body">
            <router-view />
          </div>
        </lay-body>
        <lay-footer style="text-align: center">
          <span>© 2018</span>
          <a class="deom-pl10" href="http://jskou.com" target="_blank"
            >jskou.com</a
          >
          <span class="deom-pl10">MIT license</span>
          <a
            class="deom-pl10"
            href="https://github.com/kouchao/vue-layui"
            target="_blank"
            >GitHub</a
          >
          <a
            class="deom-pl10"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37078202000111"
            target="_blank"
            >鲁公网安备 37078202000111号</a
          >
          <span class="deom-pl10">|</span>
          <a
            class="deom-pl10"
            href="http://www.miibeian.gov.cn/"
            target="_blank"
            >鲁ICP备17028069号-2</a
          >
        </lay-footer>
      </div>
    </lay-admin>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: true
    };
  }
};
</script>

<style>
.layui-layout-admin .site-demo-body {
  top: 30px;
}

.deom-pl10 {
  margin-left: 10px;
}

.layui-layout-left {
  transition: 0.5s;
}

.layui-layout-left.is-collapse {
  left: 60px;
}
</style>
