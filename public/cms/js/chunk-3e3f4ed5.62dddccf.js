(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e3f4ed5"],{"1f49":function(t,e,o){},"5ae6":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jp_set"},[o("el-container",[o("el-aside",{attrs:{width:"200px"}},[o("NavTo")],1),o("el-container",[o("el-header",{staticStyle:{"border-bottom":"1px solid #d0d0d0","background-color":"#FFFFFF"}},[o("Header")],1),o("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[o("el-main",{staticStyle:{"background-color":"#F3F3F3"}},[o("div",{staticClass:"article"},[o("div",{staticStyle:{height:"20px"}},[t._v(" ")]),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"50px"}}),o("el-table-column",{attrs:{prop:"goods_name",label:"商品名称"}}),o("el-table-column",{attrs:{prop:"img.url",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.img?[o("img",{attrs:{src:e.row.img.url}})]:t._e(),!e.row.img&&e.row.img_url?[o("img",{attrs:{src:e.row.img_url[0]}})]:t._e()]}}])}),o("el-table-column",{attrs:{prop:"content",label:"商品内容"}}),o("el-table-column",{attrs:{prop:"points",label:"积分"}}),o("el-table-column",{attrs:{prop:"stock",label:"库存"}}),o("el-table-column",{attrs:{prop:"state",label:"能否兑换"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e.row.state?"是":"否")+"\n\t\t\t\t\t\t\t\t\t")]}}])}),o("el-table-column",{attrs:{prop:"operation",label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"success",size:"small"},on:{click:function(o){return t.edit(e.row.id,e.row.goods_name,e.row.content,e.row.img_id,e.row.stock,e.row.points)}}},[t._v("修改")]),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(o){return t.del(e.row.id)}},slot:"reference"},[t._v("删除")])]}}])}),o("strong")],1)]],2)])],1)],1)],1),o("el-dialog",{attrs:{title:"修改",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品名称"}},[o("el-input",{model:{value:t.form.goods_name,callback:function(e){t.$set(t.form,"goods_name",e)},expression:"form.goods_name"}})],1),o("el-form-item",{attrs:{label:"商品内容"}},[o("el-input",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),o("el-form-item",{attrs:{label:"库存"}},[o("el-input",{model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),o("el-form-item",{attrs:{label:"积分"}},[o("el-input",{model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})],1),o("el-form-item",{attrs:{label:"商品图片"}},[o("el-upload",{attrs:{action:"","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,limit:3}},[o("i",{staticClass:"el-icon-plus"})]),o("el-dialog",{attrs:{visible:t.dialogVisiblea},on:{"update:visible":function(e){t.dialogVisiblea=e}}},[o("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sub_edit()}}},[t._v("确\n\t\t\t\t定")])],1)],1),o("el-dialog",{attrs:{title:"添加商品",visible:t.dialogVisibleadd,width:"30%"},on:{"update:visible":function(e){t.dialogVisibleadd=e}}},[o("el-form",{ref:"form",attrs:{model:t.form_pro,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品名称"}},[o("el-input",{model:{value:t.form_pro.goods_name,callback:function(e){t.$set(t.form_pro,"goods_name",e)},expression:"form_pro.goods_name"}})],1),o("el-form-item",{attrs:{label:"商品内容"}},[o("el-input",{model:{value:t.form_pro.content,callback:function(e){t.$set(t.form_pro,"content",e)},expression:"form_pro.content"}})],1),o("el-form-item",{attrs:{label:"库存"}},[o("el-input",{model:{value:t.form_pro.stock,callback:function(e){t.$set(t.form_pro,"stock",e)},expression:"form_pro.stock"}})],1),o("el-form-item",{attrs:{label:"积分"}},[o("el-input",{model:{value:t.form_pro.points,callback:function(e){t.$set(t.form_pro,"points",e)},expression:"form_pro.points"}})],1),o("el-form-item",{attrs:{label:"商品图片"}},[o("el-upload",{attrs:{action:t.upfile_url,data:{use:"jp"},"on-success":t.res_banner_imgs,headers:t.upfile_head,limit:5,"file-list":t.upfile_banner_list,name:"upload-images","on-remove":t.handleRemove,"list-type":"picture-card"}},[o("i",{staticClass:"el-icon-plus"})]),o("el-dialog",{attrs:{visible:t.dialogVisiblea},on:{"update:visible":function(e){t.dialogVisiblea=e}}},[o("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisibleadd=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1)],1)},l=[],s=(o("2b45"),o("2ca7"),o("a49b")),a=o("15fc"),n=o("71c2"),r={data:function(){return{dialogImageUrl:"",dialogVisiblea:!1,tab_nav:!1,dialogVisible:!1,dialogVisibleadd:!1,dialogFormVisible:!1,oid:0,form:{id:"",goods_name:"",content:"",img_id:[],stock:"",points:""},form_pro:{goods_name:"",content:"",img_id:[],stock:"",points:""},formLabelWidth:"120px",list:[],all:"",size:10,total:"",options:[],value:"",typeList:[],upfile_banner_list:[],upfile_url:s["a"]+"com/up_img?back=id",upfile_head:{token:localStorage.getItem("token")},upfile_list:[]}},components:{Header:n["a"],NavTo:a["a"]},mounted:function(){},methods:{handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onSubmit:function(){var t=this;this.http.post_show("admin/add_goods",this.form_pro).then((function(){t.$message({type:"success",message:"添加成功!"}),t.form={},t.upfile_banner_list=[],t.form_pro={goods_name:"",content:"",img_id:[],stock:"",points:""},t.dialogVisibleadd=!1,t.getCompany()}))},res_banner_imgs:function(t){console.log("res:",t),this.form_pro.img_id.push(t),console.log("xx:",this.form_pro.img_id)},add_user:function(){this.dialogVisibleadd=!0},edit:function(t,e,o,i,l,s){this.form.id=t,this.form.goods_name=e,this.dialogVisible=!0,this.form.content=o,this.form.img_id=i,this.form.stock=l,this.form.points=s,console.log(this.form)},sub_edit:function(){var t=this;this.$confirm("确定修改?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.http.post_show("admin/edit_goods",t.form).then((function(){t.$message({type:"success",message:"修改成功!"}),t.dialogVisible=!1,t.clear_data(),t.getCompany()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})})),this.http.post_show("admin/edit_goods",this.form).then((function(){t.clear_data(),t.getCompany()}))},jump_page:function(t){var e=this,o=(t-1)*e.size,i=t*e.size;console.log(o,i),this.list=this.all.slice(o,i)},sub:function(){var t=this;this.http.post_show("/admin/add_article",t.form).then((function(){t.$message({showClose:!0,message:"添加成功",type:"success"}),t.clear_data(),t.getCompany()}))},getCompany:function(){var t=this;this.http.get_show("points/get_goods").then((function(e){loadingInstance.close();var o=e.status.toString();2==o.charAt(0)&&(t.all=e.data,t.list=e.data,console.log(t.list),t.list=e.data.slice(0,t.size))}))},del:function(t){var e=this,o=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.http.post_show("admin/del_goods",{id:t}).then((function(){o.$message({showClose:!0,message:"删除成功",type:"success"}),e.getCompany()}))}))},close_fun:function(t){this.clear_data(),t()},clear_data:function(){this.dialogFormVisible=!1}}},c=r,d=(o("687f"),o("623f")),m=Object(d["a"])(c,i,l,!1,null,null,null);e["default"]=m.exports},"687f":function(t,e,o){"use strict";var i=o("1f49"),l=o.n(i);l.a}}]);