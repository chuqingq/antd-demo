<template>
  <div id="app" style="height:100%;">
    <a-tabs @change="callback" type="card" style="height:100%;">
      <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" style="height:100%;">
        <a-row>
          <a-date-picker id="a" @change="onChange" placeholder="Select date"/>
          <a-month-picker id="d" @change="onChange" placeholder="Select month"/>
        </a-row>
        <br>
        <a-row>
          <a-range-picker id="b" @change="onChange"/>
          <a-week-picker @change="onChange" placeholder="Select week"/>
        </a-row>
        <br>
        <a-row>
          <a-button type="primary">Primary</a-button>
          <a-button>Default</a-button>
          <a-button type="dashed">Dashed</a-button>
          <a-button type="danger">Danger</a-button>
        </a-row>
        <br>

        <a-layout style="height:30%">
          <!-- <a-layout-header>Header</a-layout-header> -->
          <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout-content>content</a-layout-content>
          </a-layout>
          <!-- <a-layout-footer>Footer</a-layout-footer> -->
        </a-layout>
      </a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<style>
</style>
