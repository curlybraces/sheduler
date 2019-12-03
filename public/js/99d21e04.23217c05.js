(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["99d21e04"],{"78d5":function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header-wrapper"},["board"===t.$route.name?e("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/",expression:" '/' "}],attrs:{color:"secondary",icon:"arrow_left",outline:"",dense:"",label:t.$t("back")}}):t._e(),e("div",{staticClass:"header-title"},[t._v(t._s(t.text))])],1)},n=[],i={name:"HeadTitle",props:["text"]},o=i,a=(e("fa5a"),e("2877")),l=e("fe09"),u=Object(a["a"])(o,r,n,!1,null,"04a0354d",null);s["a"]=u.exports;u.options.components=Object.assign({QBtn:l["d"]},u.options.components||{}),u.options.directives=Object.assign({GoBack:l["b"]},u.options.directives||{})},7953:function(t,s,e){},"9a16":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("HeaderTitle",{attrs:{text:t.$t("registerNewAccount")}}),e("q-card-section",[e("div",{staticClass:"q-pa-md"},[e("form",{staticClass:"q-gutter-md",on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),t.onSubmit(t.user)},reset:function(s){return s.preventDefault(),s.stopPropagation(),t.onReset(s)}}},[e("q-input",{ref:"email",attrs:{"bottom-slots":"",filled:"",label:t.$t("enterEmail"),type:"email","lazy-rules":"",rules:[t.rules.required,t.rules.email]},scopedSlots:t._u([t.user.email?{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(s){t.user.email=""}}})]},proxy:!0}:null],null,!0),model:{value:t.user.email,callback:function(s){t.$set(t.user,"email","string"===typeof s?s.trim():s)},expression:"user.email"}}),e("q-input",{ref:"password",attrs:{filled:"",type:t.isPwd?"password":"text",label:t.$t("enterPassword"),counter:"",rules:t.rules.length,"lazy-rules":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.user.password,callback:function(s){t.$set(t.user,"password","string"===typeof s?s.trim():s)},expression:"user.password"}}),e("q-input",{ref:"passwordConfirm",attrs:{filled:"",type:t.isConfirmPwd?"password":"text",label:t.$t("confirmPassword"),counter:"",rules:t.rules.length,"lazy-rules":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isConfirmPwd?"visibility_off":"visibility"},on:{click:function(s){t.isConfirmPwd=!t.isConfirmPwd}}})]},proxy:!0}]),model:{value:t.user.passwordConfirm,callback:function(s){t.$set(t.user,"passwordConfirm","string"===typeof s?s.trim():s)},expression:"user.passwordConfirm"}}),e("div",{staticClass:"q-mt-xl",staticStyle:{display:"flex","justify-content":"space-between"}},[e("q-btn",{attrs:{label:t.$t("register"),type:"submit",color:"primary",outline:""}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{label:t.$t("reset"),type:"reset",color:"primary",flat:""}})],1)],1)])])],1)},n=[],i=(e("4917"),e("78d5")),o={name:"RegistrationIndex",components:{HeaderTitle:i["a"]},data:function(){var t=this;return{hasError:!1,dense:!1,isPwd:!0,isConfirmPwd:!0,formHasError:null,user:{email:null,password:null,passwordConfirm:null},rules:{email:function(s){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(s)||t.$t("emailError")},length:[function(s){return!!s||"".concat(t.$t("notEmptyField"))},function(s){return s.length>5||"".concat(t.$t("passwordChar"))}],password:function(s){return(s||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||t.$t("passwordError")},required:function(s){return!!s||t.$t("notEmptyField")}}}},methods:{onSubmit:function(t){var s=this;this.$refs.email.validate(),this.$refs.password.validate(),this.user.password===this.user.passwordConfirm?this.$refs.email.hasError||this.$refs.password.hasError?this.formHasError=!0:(this.$q.loading.show(),this.$store.dispatch("account/registration",t).then((function(t){s.$q.notify({icon:"done",color:"positive",message:s.$t("loginSuccess")}),s.$q.notify({icon:"done",color:"positive",message:s.$t("registerSuccess")}),s.$q.loading.hide(),s.$router.push("/")})).catch((function(){s.$q.loading.hide(),s.$q.notify({color:"warning",message:s.$t("unknownError")})}))):this.$q.notify({color:"warning",message:this.$t("passwordConfirmError")})},onReset:function(){this.user.email=null,this.user.password=null,this.user.passwordConfirm=null,this.$refs.email.resetValidation(),this.$refs.password.resetValidation(),this.$refs.passwordConfirm.resetValidation()}}},a=o,l=e("2877"),u=e("fe09"),c=Object(l["a"])(a,r,n,!1,null,null,null);s["default"]=c.exports;c.options.components=Object.assign({QPage:u["t"],QCardSection:u["g"],QInput:u["n"],QIcon:u["l"],QBtn:u["d"]},c.options.components||{})},fa5a:function(t,s,e){"use strict";var r=e("7953"),n=e.n(r);n.a}}]);