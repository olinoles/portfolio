(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5,7,8,9,11,12,13,14],{276:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},277:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("32400742",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("0f4356b3",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);var r={props:{label:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{showTitle:!1}}},o=(n(283),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative mx-auto my-auto",on:{mouseover:function(e){t.showTitle=!0},focus:function(e){t.showTitle=!0},blur:function(e){t.showTitle=!1},mouseleave:function(e){t.showTitle=!1}}},[n("img",{staticClass:"h-14 w-auto mx-4 my-4 transform duration-75 hover:scale-110",attrs:{src:"/icons/"+t.icon,alt:t.label}}),t._v(" "),n("div",{staticClass:"opacity-0 pointer-events-none absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs",class:t.showTitle?"is-active":null},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("02866c1c",content,!0,{sourceMap:!1})},282:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("0307c494",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n(277)},284:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tooltip{\n  transform:scale(0);\n  transform-origin:top center\n}\n.is-active{\n  -webkit-animation:pulse .2s cubic-bezier(0,0,.2,1) forwards;\n  animation:pulse .2s cubic-bezier(0,0,.2,1) forwards\n}\n@-webkit-keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}\n@keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},285:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("cab46934",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("443017af",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(278)},288:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.item[data-v-8227f0b8]{\n  color:#cfe2f3\n}\n.item[data-v-8227f0b8]:hover{\n  background-color:#254268\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},289:function(t,e,n){t.exports=n.p+"videos/turret.4134af9.webm"},290:function(t,e,n){t.exports=n.p+"img/fpvdrone.3c81a2d.jpg"},291:function(t,e,n){t.exports=n.p+"img/CAD.26a0012.jpg"},292:function(t,e,n){t.exports=n.p+"img/arcade.a82254b.jpg"},293:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},cta:{type:String,required:!1,default:null},ctaLink:{type:String,required:!1,default:null},image:{type:String,required:!0}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-start"},[n("nuxt-link",{attrs:{to:"projects/"+t.link}},[n("div",{staticClass:"flex flex-col sm:flex-row bg-white w-auto hover:shadow-md shadow-sm rounded-lg overflow-hidden mb-12 cursor-pointer"},[n("img",{staticClass:"w-auto sm:h-auto sm:w-72",attrs:{alt:t.image,src:"/projects/"+t.image}}),t._v(" "),n("div",{staticClass:"flex flex-col ml-10"},[n("div",{staticClass:"text-xl my-4"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-sm mb-4 mr-10 max-w-prose"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),t.cta?n("div",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto"},[n("a",{attrs:{target:"_blank",rel:"noreferrer",href:t.ctaLink},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.cta)+"\n          ")])]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var r={props:{label:{type:String,required:!0},icon:{type:String,required:!0}}},o=(n(287),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-2 pr-14 py-2 my-2 rounded-lg item cursor-pointer"},[n("img",{staticClass:"h-8 w-auto inline-block",attrs:{src:"/icons/interests/"+t.icon,alt:t.label}}),t._v(" "),n("div",{staticClass:"inline-block ml-3"},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,"8227f0b8",null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col lg:flex-row"},[r("p",{staticClass:"mr-5 mb-5"},[t._v("\n    Since I was young I've always enjoyed pulling apart devices and seeing how they worked. This prompted me to pursue a career an as Electronics Technician in the NZ Navy, where I worked and gained qualifications in the Electrical Engineering field. I still regularly tinker with electronics such as Arduinos and Raspberry Pis, now combined with 3D printing I can build some really cool projects! "),r("br"),r("br"),t._v("Here is an Arduino controlled 3D turret I built using stepper motors in action. This project is clearly still a WIP!\n  ")]),t._v(" "),r("video",{staticClass:"w-60 rounded-md",attrs:{playsinline:"",autoplay:"",loop:""}},[r("source",{attrs:{src:n(289),type:"video/webm"}}),t._v(" "),r("video")])])}],o={},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col lg:flex-row"},[r("p",{staticClass:"mr-5 mb-5"},[t._v("\n    In 2017 I purchased my first racing drone - A 'Wizard X220', capable of flying at up to 130kmh! This became an obsession which lead to me opening my own dedicated racing drone parts business in 2018. KiwiQuads is now NZ's largest FPV drone specialist store."),r("br"),r("br"),t._v("Racing Drone technology moves extremely quickly. New products are released every month which allows the drones to fly faster and with more precision for racing.\n  ")]),t._v(" "),r("img",{staticClass:"w-64 max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"Racing Drone",src:n(290)}})])}],o={},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col lg:flex-row"},[r("p",{staticClass:"mr-5 mb-5"},[t._v("\n    I began using Solidworks CAD during my studies at Auckland University of Technology (AUT). I continued my learning beyond the basics so that I could build complex designs and use them within my projects. "),r("br"),r("br"),t._v("My most complex projects so far have been the 3D printed electronic turret, and the 3D drone customiser for KiwiQuads. I designed all models within these projects with reference to real life objects.\n  ")]),t._v(" "),r("img",{staticClass:"w-64  max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"CAD Drawing",src:n(291)}})])}],o={},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col md:flex-row"},[r("p",{staticClass:"mr-5 mb-5"},[t._v("\n    In my spare time, I enjoy playing classic arcade games - the really old ones from the arcades back in the 80s and 90s. For my dad's birthday one year I built him a full-size arcade machine running some custom UI software I wrote with over 3000 MAME games.\n    "),r("br"),r("br"),t._v("\n    The picture to the right is the final product. I sketched and designed the machine in CAD software prior to building. The control panel was laser cut and features graphics I designed, which are inspired from the SNK Neo Geo.\n  ")]),t._v(" "),r("img",{staticClass:"w-64 max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"Arcade machine",src:n(292)}})])}],o={},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},299:function(t,e,n){t.exports=n.p+"img/profile.8b6b69f.jpg"},300:function(t,e,n){"use strict";n(281)},301:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.bg-darkblue[data-v-2963d380]{\n  background-color:#14213d\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},302:function(t,e,n){"use strict";n(282)},303:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.bg-light-blue[data-v-a0776d48]{\n  background-color:#f2f9ff\n}\n.title[data-v-a0776d48]{\n  color:#49638a;\n  font-weight:700\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},304:function(t,e,n){"use strict";n(285)},305:function(t,e,n){var r=n(45),o=n(276),l=n(306),c=r((function(i){return i[1]})),d=o(l);c.push([t.i,"/*purgecss start ignore*/\n.med-blue[data-v-68db9040]{\n  background-color:#335480\n}\n.bg-image[data-v-68db9040]{\n  background-image:url("+d+");\n  background-size:100%\n}\n@media (min-width:640px){\n.bg-image[data-v-68db9040]{\n    background-size:20%\n}\n}\n.title[data-v-68db9040]{\n  color:#353f4b;\n  font-weight:700\n}\n.subtitle[data-v-68db9040]{\n  margin-bottom:14px\n}\n.exp-list li[data-v-68db9040],.subtitle[data-v-68db9040]{\n  color:#243453\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},306:function(t,e,n){t.exports=n.p+"img/circuit-board.8b78ce0.svg"},307:function(t,e,n){"use strict";n(286)},308:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.bg-light-blue[data-v-7c20be92]{\n  background-color:#f2f9ff\n}\n.title[data-v-7c20be92]{\n  color:#49638a;\n  font-weight:700\n}\n.interest-menu[data-v-7c20be92]{\n  background-color:#335480\n}\n.active-menu-item[data-v-7c20be92]{\n  background-color:#254268;\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},309:function(t,e,n){"use strict";n.r(e);var r={components:{ChevronDownIcon:n(19).b},data:function(){return{isReadMoreOpen:!1}},methods:{slideDown:function(){var element=this.$refs.readmore;this.isReadMoreOpen?element.style.height=0:element.style.height="".concat(element.scrollHeight,"px"),this.isReadMoreOpen=!this.isReadMoreOpen}}},o=(n(300),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-4 lg:pb-10 bg-darkblue"},[t._m(0),t._v(" "),r("div",{staticClass:"flex justify-center flex-col md:flex-row mx-auto lg:flex-row"},[r("div",{staticClass:"inline-block max-w-xl lg:pt-20 pb-16 px-4 py-8 sm:px-6 lg:px-8"},[r("h2",{staticClass:"text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl",attrs:{id:"about"}},[t._v("\n        Hi, I'm Oliver\n      ")]),t._v(" "),t._m(1),t._v(" "),r("div",{ref:"readmore",staticClass:"transition-height duration-300 ease-out overflow-hidden h-0"},[t._m(2)]),t._v(" "),r("div",{staticClass:"mt-3 text-xl text-gray-300 underline cursor-pointer",on:{click:function(e){return t.slideDown()}}},[t._v("\n        "+t._s(t.isReadMoreOpen?"Read less":"Read more")+"\n      ")])]),t._v(" "),r("img",{staticClass:"mt-8 lg:mt-24 lg:h-80 lg:w-80 w-52 h-52 mx-auto lg:mx-20  rounded-full ring-4 ring-gray-600 ring-opacity-50",attrs:{src:n(299),alt:""}})]),t._v(" "),r("a",{staticClass:"pointer-cursor w-10 mx-auto block",attrs:{href:"#skills"}},[r("ChevronDownIcon",{staticClass:"text-white text-xl mx-auto h-8 w-8 mt-8"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 right-4 space-x-3 hidden sm:inline absolute"},[n("a",{attrs:{rel:"noreferrer",href:"https://github.com/olinoles",target:"_blank"}},[n("img",{staticClass:"inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100",attrs:{alt:"Github",src:"/icons/github.svg"}})]),t._v(" "),n("a",{attrs:{rel:"noreferrer",href:"https://www.linkedin.com/in/oliver-noles-2390a8178/",target:"_blank"}},[n("img",{staticClass:"inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100",attrs:{alt:"LinkedIn",src:"/icons/linkedin.svg"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n        I'm an Auckland-based tech enthusiast experienced in web technologies, creative projects, and UI design.\n        "),n("br"),n("br"),t._v("\n        Currently I am a Front-end Engineer at "),n("a",{attrs:{rel:"noreferrer",href:"https://www.themarket.com",target:"_blank"}},[t._v("TheMarket NZ")]),n("br"),n("br"),t._v("\n        I am most interested in full-stack development and enjoy working with both front-end and back-end tools. Outside of webdev, I enjoy hobbies that involve robotics and electronics, including 3D printing, building FPV Drones and CAD design.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n          My favourite projects currently involve developing clean and functional front-end software, but I'm not afraid of working on back-end applications either. My philosophy towards coding is "),n("i",[t._v("the right tool for the job")]),t._v(". Having a strong passion for learning new tools allows me to solve problems efficiently."),n("br"),n("br"),t._v("When I'm not working on projects I love to socialise with board games, try new craft beers, and travel.\n        ")])}],!1,null,"2963d380",null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var r={components:{ProjectSummary:n(293).default}},o=(n(302),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-10 bg-light-blue lg:pt-20 bg-image mx-auto p-5 w-full"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl",attrs:{id:"projects"}},[t._v("\n        Featured Projects\n      ")]),t._v(" "),n("ProjectSummary",{attrs:{title:"ASColour Colourmatic Critic",cta:"Watch Video","cta-link":"https://vimeo.com/312834441",description:"This creative project for ASColour used a camera and visuals to recommend t-shirts to customers. The display was featured outside the Customs Street store in Auckland CBD.",link:"ascolour/",image:"ascolour.jpg"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads 3D Drone Customiser",cta:"Live Site","cta-link":"https://kiwiquads.co.nz/customiser",description:"A 3D drone customiser tool built for KiwiQuads allows real-time customisation of a drone to visualise different components and colours.\nBuilt using Babylon.js framework and React.",link:"customiser/",image:"customiser.jpg"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads Order Dispatch System",description:"KiwiQuads needed a dispatching system to handle a large quantity of orders efficiently. I built this web application to combine order picking with the NZ Post API for shipping.",link:"dispatch/",image:"dispatch.jpg"}})],1)])}),[],!1,null,"a0776d48",null);e.default=component.exports},314:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("bad8e090",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";n.r(e);var r={components:{ToolIcon:n(280).default}},o=(n(304),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-12 lg:pb-24 med-blue lg:pt-20 bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative"},[n("div",{staticClass:"bg-white shadow-xl rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:px-6"},[n("h2",{staticClass:"title mb-4 text-2xl lg:text-4xl",attrs:{id:"skills"}},[t._v("\n          Skills & Experience\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"flex-grow max-w-lg"},[n("h3",{staticClass:"subtitle text-xl lg:text-3xl"},[t._v("\n              Technologies and tools I use\n            ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 sm:grid-cols-4 mr-10"},[n("ToolIcon",{attrs:{label:"HTML5",icon:"html.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Javascript ES6",icon:"js.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"CSS",icon:"css.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Typescript",icon:"ts.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"GraphQL",icon:"graphql.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Nuxt JS",icon:"nuxt.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Node JS",icon:"node.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Visual Studio C#",icon:"visualstudio.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Wordpress",icon:"wordpress.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Git",icon:"git.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Vue JS",icon:"vuejs.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Illustrator",icon:"illustrator.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Photoshop",icon:"photoshop.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Figma",icon:"figma.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Docker",icon:"docker.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Amazon Web Services",icon:"aws.png"}})],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow lg:border-l lg:pl-10 max-w-xl"},[n("h3",{staticClass:"subtitle mt-10 lg:mt-0 text-xl lg:text-3xl"},[t._v("\n              I am experienced in\n            ")]),t._v(" "),n("ul",{staticClass:"list-disc list-outside ml-5 leading-6 exp-list space-y-3"},[n("li",[t._v("\n                Developing "),n("b",[t._v("full-stack applications")]),t._v(" using modern\n                javascript frameworks\n              ")]),t._v(" "),n("li",[t._v("\n                Developing with "),n("b",[t._v("Wordpress")]),t._v(" CMS and "),n("b",[t._v("WooCommerce")])]),t._v(" "),n("li",[t._v("Building "),n("b",[t._v("Visual Studio C#")]),t._v(" desktop applications")]),t._v(" "),n("li",[t._v("\n                Integrating web & desktop applications with\n                "),n("b",[t._v("RESTful API services")])]),t._v(" "),n("li",[t._v("Vector creation in "),n("b",[t._v("Adobe Illustrator")])]),t._v(" "),n("li",[t._v("\n                Photo manipulation & colour correction in\n                "),n("b",[t._v("Adobe Photoshop")])]),t._v(" "),n("li",[t._v("Code & project management using "),n("b",[t._v("Git")])]),t._v(" "),n("li",[t._v("\n                Website performance analysis using "),n("b",[t._v("Google Analytics")])]),t._v(" "),n("li",[t._v("\n                Marketing automation in "),n("b",[t._v("Klaviyo")]),t._v(" &\n                "),n("b",[t._v("Facebook Ads Manager")])]),t._v(" "),n("ul")])])}],!1,null,"68db9040",null);e.default=component.exports;installComponents(component,{ToolIcon:n(280).default})},316:function(t,e,n){"use strict";n.r(e);var r=n(19),o={components:{ChevronLeftIcon:r.c,ChevronRightIcon:r.d},data:function(){return{selectedID:0,interests:[{id:0,label:"3D Printing",icon:"3dprinter.svg"},{id:1,label:"Electronics",icon:"electronics.svg"},{id:2,label:"FPV Racing Drones",icon:"drone.svg"},{id:3,label:"CAD Modelling",icon:"cad.svg"},{id:4,label:"Arcade Machines",icon:"joystick.svg"}]}},methods:{selectInterest:function(t){this.selectedID=t},cycleInterests:function(t){this.selectedID+=t,this.selectedID<0?this.selectedID=this.interests.length-1:this.selectedID>this.interests.length-1&&(this.selectedID=0)}}},l=(n(307),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light-blue pb-52 bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl",attrs:{id:"interests"}},[t._v("\n      Interests\n    ")]),t._v(" "),n("div",{staticClass:"bg-white w-auto shadow-sm rounded-lg mb-8"},[n("div",{staticClass:"flex flex-col sm:flex-row"},[n("div",{staticClass:"interest-menu rounded-b-none sm:rounded-r-none rounded-lg sm:rounded-lg last sm:pb-24 flex-shrink-0"},[n("div",{staticClass:"text-white p-2 pr-2"},t._l(t.interests,(function(e){return n("InterestsMenuItem",{key:"item-"+e.id,class:t.selectedID===e.id?"active-menu-item":null,attrs:{label:e.label,icon:e.icon},nativeOn:{click:function(n){return t.selectInterest(e.id)}}})})),1)]),t._v(" "),n("div",{staticClass:"p-5"},[n("h3",{staticClass:"text-3xl mb-4"},[t._v("\n            "+t._s(t.interests[t.selectedID].label)+"\n          ")]),t._v(" "),0==t.selectedID?n("Interests3DPrinting"):t._e(),t._v(" "),1==t.selectedID?n("InterestsElectronics"):t._e(),t._v(" "),2==t.selectedID?n("InterestsFPVRacingDrones"):t._e(),t._v(" "),3==t.selectedID?n("InterestsCAD"):t._e(),t._v(" "),4==t.selectedID?n("InterestsArcadeMachines"):t._e()],1)])]),t._v(" "),n("div",{staticClass:"m-3 mt-6 cursor-pointer sm:hidden",attrs:{id:"interests-nav"}},[n("ChevronLeftIcon",{staticClass:"inline-block w-10 mr-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md",on:{click:function(e){return t.cycleInterests(-1)}}}),t._v(" "),n("ChevronRightIcon",{staticClass:"inline-block w-10 ml-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md",on:{click:function(e){return t.cycleInterests(1)}}})],1)])])}),[],!1,null,"7c20be92",null);e.default=component.exports;installComponents(component,{InterestsMenuItem:n(294).default,InterestsElectronics:n(295).default,InterestsFPVRacingDrones:n(296).default,InterestsCAD:n(297).default,InterestsArcadeMachines:n(298).default})},329:function(t,e,n){"use strict";n(314)},330:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\nh2:before{\n  display:block;\n  content:" ";\n  margin-top:-150px;\n  height:150px;\n  visibility:hidden;\n  pointer-events:none\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},335:function(t,e,n){"use strict";n.r(e);var r=n(309),o=n(194),l=n(310),c={components:{About:r.default,Projects:l.default,Contact:o.default},head:function(){return{title:"Oliver Noles",description:"Oliver Noles Portfolio. Full-stack web developer."}}},d=(n(329),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("about"),t._v(" "),n("skills"),t._v(" "),n("projects"),t._v(" "),n("interests"),t._v(" "),n("contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{About:n(309).default,Skills:n(315).default,Projects:n(310).default,Interests:n(316).default,Contact:n(194).default})}}]);