webpackJsonp([4],{"YT/g":function(t,e){},yT8P:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("vgQg"),a=i("7TVq"),r=i("YMCY"),s={name:"certification",mixins:[n.a,a.a,r.a],methods:{logoutImpl:function(){var t=this;t.$confirm("确定要退出系统吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.logout(function(){t.successMessage("退出成功")},t.errorMessage)}).catch(function(){})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"certification-container",attrs:{id:"certification-container"}},[i("div",{staticClass:"background"}),t._v(" "),i("div",{staticClass:"main-header",attrs:{id:"main-header"}},[i("div",{staticStyle:{"max-width":"1200px",margin:"0 auto"}},[i("div",{staticClass:"main-icon",attrs:{id:"main-icon"}}),t._v(" "),i("el-menu",{staticStyle:{float:"right"},attrs:{"default-active":"/certification",mode:"horizontal",router:!0}},[i("el-menu-item",{attrs:{index:"/"}},[t._v("主页")]),t._v(" "),i("el-menu-item",{attrs:{index:"/certification"}},[t._v("认证中心")]),t._v(" "),t.isLogin?i("el-submenu",{attrs:{index:"/user"}},[i("template",{slot:"title"},[i("el-avatar",{staticStyle:{"margin-right":"6px"},attrs:{shape:"square",size:"small",src:t.user.imageUrl}}),t._v("\n                            "+t._s(t.user.nickname)+"\n                        ")],1),t._v(" "),i("el-menu-item",{attrs:{index:"/info"}},[t._v("用户资料")]),t._v(" "),i("el-menu-item",{attrs:{index:"/settings"}},[t._v("设置")]),t._v(" "),i("el-menu-item",{attrs:{index:"/help"}},[t._v("帮助")]),t._v(" "),i("el-menu-item",{on:{click:t.logoutImpl}},[t._v("退出")])],2):i("el-menu-item",{attrs:{index:"/login?from="+this.$route.path,target:"_blank"}},[t._v("登录/注册")])],1)],1)]),t._v(" "),i("div",{staticClass:"main-container",attrs:{id:"main-container"}},[i("router-view")],1)])},staticRenderFns:[]};var o=i("C7Lr")(s,c,!1,function(t){i("YT/g")},"data-v-872dce30",null);e.default=o.exports}});
//# sourceMappingURL=4.f80161be6dc9f2675806.js.map