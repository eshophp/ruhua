(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46c9c1c5"],{4993:function(t,e,s){},a248:function(t,e,s){"use strict";var o=s("4993"),a=s.n(o);a.a},ede4:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{attrs:{id:"login"}},[s("div",{staticClass:"login_wrap"},[s("div",{staticClass:"wenzi"},[t._v("如花商城管理后台")]),s("div",{attrs:{id:"darkbannerwrap"}}),s("form",{attrs:{method:"post"}},[s("div",{staticClass:"put"},[s("i",{staticClass:"el-icon-news"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{placeholder:"用户名"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),s("div",{staticClass:"put"},[s("i",{staticClass:"el-icon-edit"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"密码",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sub(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",[s("el-row",[s("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){return t.sub(t.password)}}},[t._v("登录")])],1)],1)])])]):t._e()},a=[],n={name:"Login",data:function(){return{user:"",password:"",show:!0}},methods:{sub:function(t){var e=this;console.log(t);var s=this,o=this.user;this.http.post_show("index/admin/login",{username:o,psw:t}).then((function(t){200==t.status&&(localStorage.setItem("token",t.data.token),localStorage.setItem("oauth",t.data.oauth),localStorage.setItem("admin_name",s.user),s.$message({showClose:!0,message:"登陆成功",type:"success"}),e.$router.push({path:"/"})),400!=t.status||e.$message.error(t.msg)}))},login:function(){var t=localStorage.getItem("token");t&&this.$router.push({path:"/"})}},mounted:function(){this.login();var t=!0,e="3310e6953f221320ec02c5f8b17092df";if(!t||!e){var s=document.location.protocol,o=document.location.host,a=s+"//"+o;window.location.href=a}}},r=n,i=(s("a248"),s("623f")),u=Object(i["a"])(r,o,a,!1,null,null,null);e["default"]=u.exports}}]);