webpackJsonp([1],{"+J8q":function(t,n,a){"use strict";var s=a("QTnS"),e={stocks:[]},i={SET_STOCKS:function(t,n){t.stocks=n},RND_STOCKS:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.5))})}},o={buyStock:function(t,n){(0,t.commit)("BUY_STOCK",n)},initStocks:function(t){(0,t.commit)("SET_STOCKS",s.a)},randomizeStocks:function(t){(0,t.commit)("RND_STOCKS")}},r={stocks:function(t){return t.stocks}};n.a={state:e,mutations:i,actions:o,getters:r}},"+Vg5":function(t,n,a){"use strict";var s=a("vLb3"),e=a("1WNR"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports},"/nwk":function(t,n,a){"use strict";var s=a("Dd8w"),e=a.n(s),i=a("NYxO"),o=a("p2yS");n.a={components:{appStock:o.a},computed:e()({},a.i(i.c)({stocks:"stockPortfolio"}))}},0:function(t,n){},"0lz/":function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",t._l(t.stocks,function(t){return a("app-stock",{attrs:{stock:t}})}))},e=[],i={render:s,staticRenderFns:e};n.a=i},"1WNR":function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row"},t._l(t.stocks,function(t){return a("app-stock",{attrs:{stock:t}})}))},e=[],i={render:s,staticRenderFns:e};n.a=i},"2nXT":function(t,n,a){"use strict";function s(t){a("tS84")}var e=a("rdCy"),i=a("HuMq"),o=a("VU/8"),r=s,c=o(e.a,i.a,r,"data-v-08059816",null);n.a=c.exports},"3Z94":function(t,n){},ApaE:function(t,n,a){"use strict";function s(t){a("3Z94")}var e=a("SwRy"),i=a("N4Mu"),o=a("VU/8"),r=s,c=o(e.a,i.a,r,"data-v-24e56b89",null);n.a=c.exports},FH0x:function(t,n,a){"use strict";var s=a("Dd8w"),e=a.n(s),i=a("NYxO");n.a={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:e()({},a.i(i.a)({placeSellOrder:"sellStock"}),{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.placeSellOrder(t),this.quantity=0}})}},Fs8J:function(t,n,a){"use strict";n.a={computed:{funds:function(){return this.$store.getters.funds}}}},HCTz:function(t,n,a){"use strict";var s=a("Dd8w"),e=a.n(s),i=a("NYxO"),o=a("q6Ae"),r=a.n(o);n.a={data:function(){return{isDropdownOpen:!1}},computed:{funds:function(){return this.$store.getters.funds},isLogged:function(){return r.a.auth().currentUser}},methods:e()({},a.i(i.a)({randomizeStocks:"randomizeStocks",fetchData:"loadData"}),{endDay:function(){this.randomizeStocks()},saveData:function(){var t=r.a.auth().currentUser;if(null!=t){var n={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};this.$http.put("data"+t.uid+".json",n)}},loadData:function(){this.fetchData()},logout:function(){var t=this;r.a.auth().signOut().then(function(){t.$router.push({path:"login"})})}})}},HuMq:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.stock.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("(PRICE: "+t._s(t.stock.price)+")")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n                Some quick example text to build on the card title and make up the bulk of the card's content.")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-controll",class:{danger:t.insufficientFunds},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientFunds||t.quantity<=0},on:{click:t.buyStock}},[t._v("\n                "+t._s(t.insufficientFunds?"insufficient Funds":"Buy")+"\n            ")])])])])},e=[],i={render:s,staticRenderFns:e};n.a=i},IFtM:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.stock.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("(PRICE: "+t._s(t.stock.price)+" | Quantity : "+t._s(t.stock.quantity)+")")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n                Some quick example text to build on the card title and make up the bulk of the card's content.")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-controll",attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientQuantity||t.quantity<=0},on:{click:t.sellStock}},[t._v("\n                "+t._s(t.insufficientQuantity?"Not enough":"Sell")+"\n            ")])])])])},e=[],i={render:s,staticRenderFns:e};n.a=i},M93x:function(t,n,a){"use strict";function s(t){a("jmYv")}var e=a("xJD8"),i=a("n66I"),o=a("VU/8"),r=s,c=o(e.a,i.a,r,null,null);n.a=c.exports},N4Mu:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"sign-up"},[a("p",[t._v("\n        Let`s create a new account!\n    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}}),a("br"),t._v(" "),a("button",{on:{click:t.signUp}},[t._v("Sign Up")]),t._v(" "),a("span",[t._v(" Go back to "),a("router-link",{attrs:{to:"/login"}},[t._v(" login ")])],1)])},e=[],i={render:s,staticRenderFns:e};n.a=i},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=a("7+uW"),e=a("M93x"),i=a("YaEn"),o=a("wtEF"),r=a("ORbq"),c=a("q6Ae"),u=a.n(c);s.a.use(r.a),s.a.http.options.root="https://vue-stocks-3e87e.firebaseio.com/",s.a.config.productionTip=!1,s.a.filter("currency",function(t){return"$"+t.toLocaleString()});var l=void 0,d={apiKey:"AIzaSyAoxqJ-vQWfl3QJdPY8dwMDv41MXjKpx74",authDomain:"vue-stocks-3e87e.firebaseapp.com",databaseURL:"https://vue-stocks-3e87e.firebaseio.com",projectId:"vue-stocks-3e87e",storageBucket:"vue-stocks-3e87e.appspot.com",messagingSenderId:"1005054236818"};u.a.initializeApp(d),u.a.auth().onAuthStateChanged(function(t){l||(l=new s.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:e.a}}))})},QTnS:function(t,n,a){"use strict";n.a=[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:140},{id:3,name:"Apple",price:140},{id:4,name:"Twitter",price:140}]},SwRy:function(t,n,a){"use strict";var s=a("q6Ae"),e=a.n(s);n.a={name:"signUp",data:function(){return{email:"",password:""}},methods:{signUp:function(){var t=this;e.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(n){t.$router.push({path:"/stocks"})},function(t){alert("Ooops "+t.message)})}}}},UBQY:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"login"},[a("h3",[t._v("\n        Sign in\n    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("button",{on:{click:t.login}},[t._v("login")]),t._v(" "),a("p",[t._v("don`t have account?\n        "),a("router-link",{attrs:{to:"/sign-up"}},[t._v(" create one")])],1)])},e=[],i={render:s,staticRenderFns:e};n.a=i},YaEn:function(t,n,a){"use strict";var s=a("7+uW"),e=a("/ocq"),i=a("lO7g"),o=a("yheb"),r=a("+Vg5"),c=a("xJsL"),u=a("ApaE"),l=a("q6Ae"),d=a.n(l);s.a.use(e.a);var p=new e.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/login",name:"Login",component:c.a},{path:"/sign-up",name:"SignUp",component:u.a},{path:"/portfolio",name:"Portfolio",component:o.a,meta:{requiredAuth:!0}},{path:"/stocks",name:"Stocks",component:r.a,meta:{requiredAuth:!0}}],mode:"history"});p.beforeEach(function(t,n,a){var s=d.a.auth().currentUser,e=t.matched.some(function(t){return t.meta.requiredAuth});e&&!s?a({path:"/login",query:{redirect:t.fullPath}}):!e&&s?a({path:"/stocks"}):a()}),n.a=p},a46l:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v(" Trade or view your Portfolio")]),t._v(" "),a("h6",[t._v("You may Save & Load your Data")]),t._v(" "),a("h6",[t._v("Click on 'End Day' to begin a new day")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v(" Your Funds : "+t._s(t._f("currency")(t.funds)))])])},e=[],i={render:s,staticRenderFns:e};n.a=i},jmYv:function(t,n){},"lH/M":function(t,n,a){"use strict";var s={funds:1e4,stocks:[]},e={BUY_STOCK:function(t,n){var a=n.stockId,s=n.quantity,e=n.stockPrice,i=t.stocks.find(function(t){return t.id==a});i?i.quantity+=s:t.stocks.push({id:a,quantity:s}),t.funds-=e*s},SELL_STOCK:function(t,n){var a=n.stockId,s=n.quantity,e=n.stockPrice,i=t.stocks.find(function(t){return t.id==a});i.quantity>s?i.quantity-=s:t.stocks.splice(t.stocks.indexOf(i),1),t.funds+=e*s},SET_PORTFOLIO:function(t,n){t.funds=n.funds,t.stocks=n.stockPortfolio?n.stockPortfolio:[]}},i={sellStock:function(t,n){(0,t.commit)("SELL_STOCK",n)}},o={stockPortfolio:function(t,n){return t.stocks.map(function(t){var a=n.stocks.find(function(n){return n.id==t.id});return{id:t.id,quantity:t.quantity,price:a.price,name:a.name}})},funds:function(t){return t.funds}};n.a={state:s,mutations:e,getters:o,actions:i}},lO7g:function(t,n,a){"use strict";var s=a("Fs8J"),e=a("a46l"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports},mUbh:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),a.d(n,"loadData",function(){return o});var s=a("7+uW"),e=a("q6Ae"),i=a.n(e),o=function(t){var n=t.commit,a=i.a.auth().currentUser;s.a.http.get("data"+a.uid+".json").then(function(t){return t.json()}).then(function(t){if(t){var a=t.stocks,s=t.funds,e=t.stockPortfolio;n("SET_PORTFOLIO",{stockPortfolio:e,funds:s}),n("SET_STOCKS",a)}})}},n66I:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("app-header"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)])],1)},e=[],i={render:s,staticRenderFns:e};n.a=i},"nKb+":function(t,n,a){"use strict";var s=a("q6Ae"),e=a.n(s);n.a={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;e.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(n){t.$router.push({path:"/stocks"})},function(t){console.log("Ooops "+t.message)})}}}},nTIK:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Stock Trader ")]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/portfolio",activeClass:"active",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("portfolio")])]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/stocks",activeClass:"active",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("stocks")])])],1),t._v(" "),a("strong",{staticClass:"navbar-text"},[t._v("\n            Funds : "+t._s(t._f("currency")(t.funds))+"\n        ")]),t._v(" "),a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.endDay}},[t._v(" End Day")])]),t._v(" "),a("li",{staticClass:"nav-item dropdown",on:{click:function(n){n.preventDefault(),t.isDropdownOpen=!t.isDropdownOpen}}},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"http://example.com",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                    Save / Load\n                ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",class:{show:t.isDropdownOpen},attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.saveData}},[t._v("Save Data")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.loadData}},[t._v("Load Data")])])])]),t._v(" "),t.isLogged?t._e():a("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v("\n            Login\n        ")]),t._v(" "),t.isLogged?a("button",{staticClass:"btn",on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)},e=[],i={render:s,staticRenderFns:e};n.a=i},p2yS:function(t,n,a){"use strict";var s=a("FH0x"),e=a("IFtM"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports},rdCy:function(t,n,a){"use strict";n.a={props:["stock"],data:function(){return{quantity:0}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}}}},tS84:function(t,n){},teIl:function(t,n,a){"use strict";var s=a("HCTz"),e=a("nTIK"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports},vLb3:function(t,n,a){"use strict";var s=a("2nXT");n.a={components:{appStock:s.a},computed:{stocks:function(){return this.$store.getters.stocks}}}},wtEF:function(t,n,a){"use strict";var s=a("7+uW"),e=a("NYxO"),i=a("+J8q"),o=a("lH/M"),r=a("mUbh");s.a.use(e.b),n.a=new e.b.Store({actions:r,modules:{stocks:i.a,portfolio:o.a}})},xJD8:function(t,n,a){"use strict";var s=a("teIl");n.a={name:"app",components:{appHeader:s.a},created:function(){this.$store.dispatch("initStocks")}}},xJsL:function(t,n,a){"use strict";var s=a("nKb+"),e=a("UBQY"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports},yheb:function(t,n,a){"use strict";var s=a("/nwk"),e=a("0lz/"),i=a("VU/8"),o=i(s.a,e.a,null,null,null);n.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.c823d576a86577c93d3f.js.map