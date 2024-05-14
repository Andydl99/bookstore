"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    console.log(1);
    const login = () => {
      common_vendor.index.switchTab({
        url: "/pages/index1/index"
      });
      console.log("账号密码登录中...");
    };
    const loginWithQQ = () => {
      console.log("点击了QQ登录按钮");
    };
    const loginWithWeChat = () => {
      console.log("点击了微信登录按钮");
    };
    return (_ctx, _cache) => {
      return {
        a: username.value,
        b: common_vendor.o(($event) => username.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(login),
        f: common_assets._imports_0,
        g: common_vendor.o(loginWithQQ),
        h: common_assets._imports_1,
        i: common_vendor.o(loginWithWeChat)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/dingli/Documents/HBuilderProjects/bookstore/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
