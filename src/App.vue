<template>
  <div id="app">
    <div>
      <a-row>
        <a-date-picker id="a" @change="onChange" placeholder="Select date"/>
      </a-row>
      <a-row>
        <a-month-picker id="d" @change="onChange" placeholder="Select month"/>
      </a-row>
      <a-row>
        <a-range-picker id="b" @change="onChange"/>
      </a-row>
      <a-row>
        <a-week-picker @change="onChange" placeholder="Select week"/>
      </a-row>
    </div>

    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
