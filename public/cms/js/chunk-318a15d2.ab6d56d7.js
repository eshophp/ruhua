(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-318a15d2"],{b843:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("NavTo")],1),a("el-container",{staticStyle:{"background-color":"#F3F3F3"}},[a("el-header",{staticStyle:{"border-bottom":"1px solid #d0d0d0","background-color":"#FFFFFF"}},[a("Header")],1),a("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[a("el-main",[a("el-collapse",{staticStyle:{padding:"0 10px","background-color":"#fff","margin-bottom":"15px"},on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"会员搜索",name:"1"}},[a("div",{staticClass:"user_sear"},[a("div",{staticClass:"sear_01"},[a("div",{staticClass:"sear_01_01"},[a("div",{staticClass:"sear_01_01_1"},[t._v("昵称：")]),a("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),a("div",{staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.search(t.nickname)}}},[a("i",{staticClass:"el-icon-search"}),t._v("搜索")])],1),a("div",{staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)],1)]),a("div",{staticClass:"sear_01"})])])],1),a("div",{staticClass:"article"},[a("div",{staticStyle:{height:"20px"}},[t._v(" ")]),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50px"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"points",label:"积分"}}),a("el-table-column",{attrs:{prop:"vip",label:"是否会员"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e.row.vip?"是":"否")+"\n\t\t\t\t\t\t\t\t\t")]}}])}),a("el-table-column",{attrs:{prop:"web_auth_id",label:"前端管理权限"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.web_auth_id?[t._v("管理员")]:t._e(),0==e.row.web_auth_id?[t._v("普通用户")]:t._e(),2==e.row.web_auth_id?[t._v("员工")]:t._e()]}}])}),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.web_auth_id?[a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.open(e.row.id,0)}}},[t._v("设为普通用户")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.open(e.row.id,2)}}},[t._v("设为员工")])]:t._e(),0==e.row.web_auth_id?[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.open(e.row.id,1)}}},[t._v("设为管理员")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.open(e.row.id,2)}}},[t._v("设为员工")])]:t._e(),2==e.row.web_auth_id?[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.open(e.row.id,1)}}},[t._v("设为管理员")]),a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.open(e.row.id,0)}}},[t._v("设为普通用户")])]:t._e()]}}])}),a("strong")],1)]],2),a("el-pagination",{staticStyle:{"margin-top":"50px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.size},on:{"current-change":t.jump_page}})],1)],1)],1)],1)],1)},i=[],l=(a("2ca7"),a("a49b"),a("15fc")),s=a("71c2"),o={data:function(){return{activeNames:["1"],nickname:"",dialogImageUrl:"",oid:0,list:[],all:"",size:10,total:""}},components:{Header:s["a"],NavTo:l["a"]},mounted:function(){this._load()},methods:{_load:function(){var t=this;this.http.get("user/admin/get_all_user").then((function(e){t.list=e.data,t.all=e.data,t.total=e.data.length,t.list=e.data.slice(0,t.size)}))},open:function(t,e){var a=this,n=[{msg:"取消权限，恢复普通用户？",auth:0},{msg:"将该用户设置为管理员？",auth:1},{msg:"设置为员工，仅有验证权限？",auth:2}],i=n[e].msg,l=n[e].auth;this.$confirm(i,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.http.post_show("cms/admin/set_web_auth",{id:t,auth_id:l}).then((function(t){a.$message({type:"success",message:"操作成功!"}),a._load()}))}))},reset:function(){this._load()},search:function(t){var e=this;for(var a in e.list=[],e.all){var n=e.all[a];n.nickname.indexOf(t)>=0&&e.list.push(n)}e.total=this.list.length,e.list=e.list.slice(0,e.size),this.nickname=[]},handleChange:function(){},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},jump_page:function(t){var e=this,a=(t-1)*e.size,n=t*e.size;console.log(a,n),this.list=this.all.slice(a,n)},sub:function(){},del:function(t){this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){}))}}},c=o,r=(a("bf55"),a("623f")),u=Object(r["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},bf55:function(t,e,a){"use strict";var n=a("c72e"),i=a.n(n);i.a},c72e:function(t,e,a){}}]);