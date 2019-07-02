<template>
  <div id="app" style="height:100%;">
    <a-tabs @change="callback" type="card" style="height:100%;">
      <a-tab-pane tab="Tab 1" key="1">
        <a-upload-dragger name="file" :multiple="false" action="/upload" @change="handleChange">
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">点击或拖动文件到此区域来进行上传</p>
          <p class="ant-upload-hint"></p>
        </a-upload-dragger>
        <p></p>
        <a-row type="flex" justify="center">
          <a-button
            align="center"
            type="primary"
            icon="download"
            size="large"
            :loading="loading"
            :disabled="disabled"
          >下载</a-button>
        </a-row>
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" style="height:100%;">
        <a-row>
          <a-date-picker id="a" @change="onChange" placeholder="Select date" />
          <a-month-picker id="d" @change="onChange" placeholder="Select month" />
        </a-row>
        <br />
        <a-row>
          <a-range-picker id="b" @change="onChange" />
          <a-week-picker @change="onChange" placeholder="Select week" />
        </a-row>
        <br />
        <a-row>
          <a-button type="primary" @click="websocket">Primary</a-button>
          <a-button>Default</a-button>
          <a-button type="dashed">Dashed</a-button>
          <a-button type="danger">Danger</a-button>
        </a-row>
        <br />

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
  data() {
    return {
      loading: false,
      disabled: true
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    callback(key) {
      console.log(key);
    },
    websocket() {
      var ws = new WebSocket("ws://localhost:8080/");

      ws.onopen = function() {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send("发送数据");
        console.log("数据发送中...");
      };

      ws.onerror = function() {
        console.log("websocket.onerror");
      };

      ws.onmessage = function(evt) {
        var received_msg = evt.data;
        console.log("数据已接收...");
      };

      ws.onclose = function() {
        // 关闭 websocket
        console.log("连接已关闭...");
      };
    },
    // 文件上传
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        let fileList = [...info.fileList];
        // 限制文件数量
        fileList = fileList.slice(-2);
        // 通知客户成功
        this.$message.success(`${info.file.name} 文件上传成功`);

        // 显示地址
        fileList = fileList.map(file => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.downloadUrl;
          }
          return file;
        });

        this.fileList = fileList;
        console.log("upload success: " + JSON.stringify(info));
        this.disabled = false;

        // 下载
        // 方式1
        // window.open(info.file.response.downloadUrl);
        // 方式2
        let link = document.createElement("a");
        // var blob = new Blob([ data ]);//如果是流文件,可以通过转成blob来下载
        // link.href = URL.createObjectURL(blob);
        link.href = info.file.response.downloadUrl;
        link.download = info.file.name; //download属性指定浏览器直接以下载文件方式打开该链接
        link.click();
      } else if (status === "error") {
        this.$message.error(`${info.file.name} 文件上传失败`);
      }
    }
    // uploadAction(file) {
    //   console.log("uploadAction: " + JSON.stringify(file));
    //   var reader = new FileReader();
    //   reader.onload = function(e) {
    //     var data = e.target.result;
    //     var image = new Image();
    //     image.onload = function() {
    //       var width = image.width;
    //       var height = image.height;
    //       console.log(
    //         "image: " + width + "======" + height + "=====" + file.size
    //       );
    //     };
    //     image.src = data;
    //   };
    //   reader.readAsDataURL(file);
    // }
  }
};
</script>

<style>
</style>
