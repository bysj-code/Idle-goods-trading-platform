(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{1750:function(e,t,r){"use strict";var i=r("463c"),n=r.n(i);n.a},2424:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-647248e9]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"463c":function(e,t,r){var i=r("2424");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("aa0e50ca",i,!0,{sourceMap:!1,shadowMode:!1})},"512b":function(e,t,r){"use strict";var i={"xia-editor":r("064f").default},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0 0 144rpx 0",position:"relative",background:"url(http://codegen.caihongy.cn/20221018/6b04e4b2331b4f3d85b1103feff37414.jpg)",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"none",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 8rpx 0",borderColor:"#e8e8e8",alignItems:"center",borderRadius:"16rpx",borderWidth:"0 0 2rpx 0",background:"-webkit-linear-gradient(top,#eee,#fff)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.title,placeholder:"标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 8rpx 0",borderColor:"#e8e8e8",alignItems:"center",borderRadius:"16rpx",borderWidth:"0 0 2rpx 0",background:"-webkit-linear-gradient(top,#eee,#fff)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pictureTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片")]),e.ruleForm.picture?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"4rpx 0",margin:"0 0 8rpx 0",borderColor:"#e8e8e8",alignItems:"center",borderRadius:"16rpx",borderWidth:"0 0 2rpx 0",background:"-webkit-linear-gradient(top,#eee,#fff)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("简介")]),r("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"简介"},model:{value:e.ruleForm.introduction,callback:function(t){e.$set(e.ruleForm,"introduction",t)},expression:"ruleForm.introduction"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[e._v("内容")]),r("xia-editor",{ref:"editor",style:{minHeight:"300rpx",border:"2rpx solid #efefef",width:"100%",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.contentChange.apply(void 0,arguments)}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"32rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"2rpx solid #ffaa33",padding:"0px",boxShadow:"2rpx 4rpx 8rpx #a86b15,inset 0px 0px 112rpx 0px #ffaa33",margin:"0 5% 0 0",color:"rgb(255, 255, 255)",borderRadius:"16rpx",background:"#ffe6c3",width:"28%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},"8ad2":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o=i(r("064f")),s={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("news",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(this.cross=t.cross,!t.cross){e.next=37;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=37;break}if(a=e.t1.value,"title"!=a){e.next=23;break}return this.ruleForm.title=n[a],this.ro.title=!0,e.abrupt("continue",17);case 23:if("introduction"!=a){e.next=27;break}return this.ruleForm.introduction=n[a],this.ro.introduction=!0,e.abrupt("continue",17);case 27:if("picture"!=a){e.next=31;break}return this.ruleForm.picture=n[a].split(",")[0],this.ro.picture=!0,e.abrupt("continue",17);case 31:if("content"!=a){e.next=35;break}return this.ruleForm.content=n[a],this.ro.content=!0,e.abrupt("continue",17);case 35:e.next=17;break;case 37:this.styleChange();case 38:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{contentChange:function(e){this.ruleForm.content=e},styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i,n,a,o,s,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.title){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.picture){e.next=6;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 6:if(this.ruleForm.content){e.next=9;break}return this.$utils.msg("内容不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=25;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=21;break}for(s in t)s==a&&(t[s]=o);return u=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(u),t);case 19:e.next=25;break;case 21:r=Number(uni.getStorageSync("userid")),i=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!r){e.next=47;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,c={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=31,this.$api.list("news",c);case 31:if(l=e.sent,!(l.data.total>=n)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("news",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("news",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("news",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("news",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},"9e70":function(e,t,r){"use strict";r.r(t);var i=r("512b"),n=r("e23c");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("1750");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"647248e9",null,!1,i["a"],o);t["default"]=u.exports},e23c:function(e,t,r){"use strict";r.r(t);var i=r("8ad2"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a}}]);