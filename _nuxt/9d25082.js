(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{236:function(t,e,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("32400742",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";n.r(e);var o={props:{label:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{showTitle:!1}}},l=(n(240),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative mx-auto my-auto",on:{mouseover:function(e){t.showTitle=!0},focus:function(e){t.showTitle=!0},blur:function(e){t.showTitle=!1},mouseleave:function(e){t.showTitle=!1}}},[n("img",{staticClass:"h-14 w-auto mx-4 my-4",attrs:{src:"/portfolio/icons/"+t.icon,alt:""}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs"},[t._v("\n      "+t._s(t.label)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){var content=n(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("cc0ecf24",content,!0,{sourceMap:!1})},239:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("4d1b62d2",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n(236)},241:function(t,e,n){var o=n(50)((function(i){return i[1]}));o.push([t.i,".fade-enter-active{\n  -webkit-animation:fade .1s;\n          animation:fade .1s\n}\n.fade-leave-active{\n  animation:fade .1s reverse\n}\n@-webkit-keyframes fade{\n0%{\n    opacity:0\n}\nto{\n    opacity:1%\n}\n}\n@keyframes fade{\n0%{\n    opacity:0\n}\nto{\n    opacity:1%\n}\n}",""]),t.exports=o},242:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("3fbe8974",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},cta:{type:String,required:!1,default:null},ctaLink:{type:String,required:!1,default:null},image:{type:String,required:!0}}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-start"},[n("nuxt-link",{attrs:{to:"projects/"+t.link}},[n("div",{staticClass:"flex flex-col sm:flex-row bg-white w-auto hover:shadow-md shadow-sm rounded-lg overflow-hidden mb-12 cursor-pointer"},[n("img",{staticClass:"w-auto sm:h-auto sm:w-72",attrs:{src:"/portfolio/projects/"+t.image}}),t._v(" "),n("div",{staticClass:"flex flex-col ml-10"},[n("div",{staticClass:"text-xl my-4"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-sm mb-4 mr-10 max-w-prose"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),t.cta?n("div",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto"},[n("a",{attrs:{target:"_blank",href:t.ctaLink},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.cta)+"\n          ")])]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){t.exports=n.p+"img/profile.8091eec.jpg"},245:function(t,e,n){"use strict";n(238)},246:function(t,e,n){var o=n(50)((function(i){return i[1]}));o.push([t.i,".bg-darkblue[data-v-1351c972]{\n  background-color:#14213d\n}",""]),t.exports=o},247:function(t,e,n){"use strict";n(239)},248:function(t,e,n){var o=n(50)((function(i){return i[1]}));o.push([t.i,".bg-light-blue[data-v-9fda7172]{\n  background-color:#f2f9ff\n}\n.title[data-v-9fda7172]{\n  color:#49638a;\n  font-weight:700\n}",""]),t.exports=o},249:function(t,e,n){"use strict";n(242)},250:function(t,e,n){var o=n(50),l=n(251),r=n(252),c=o((function(i){return i[1]})),d=l(r);c.push([t.i,".med-blue[data-v-2b353f40]{\n  background-color:#335480\n}\n.bg-image[data-v-2b353f40]{\n  background-image:url("+d+");\n  background-size:100%\n}\n@media (min-width:640px){\n.bg-image[data-v-2b353f40]{\n    background-size:20%\n}\n}\n.title[data-v-2b353f40]{\n  color:#353f4b;\n  font-weight:700\n}\n.subtitle[data-v-2b353f40]{\n  margin-bottom:14px\n}\n.exp-list li[data-v-2b353f40],.subtitle[data-v-2b353f40]{\n  color:#243453\n}",""]),t.exports=c},251:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},252:function(t,e,n){t.exports=n.p+"img/circuit-board.8b78ce0.svg"},253:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center flex-col md:flex-row mx-auto lg:flex-row"},[o("div",{staticClass:"inline-block max-w-xl lg:py-20 px-4 py-8 sm:px-6 lg:px-8"},[o("h1",{staticClass:"text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"},[t._v("\n        Hi, I'm Oliver\n      ")]),t._v(" "),o("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n        I'm an Auckland-based tech enthusiast experienced in web technologies, creative projects, and UI design.\n      ")]),o("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n        I am most interested in full-stack development and enjoy working with both front-end and back-end tools. Outside of webdev, I enjoy hobbies that involve robotics and electronics, including 3D printing, building FPV Drones and CAD design.\n      ")])]),t._v(" "),o("img",{staticClass:"mt-8 lg:mt-24 lg:h-80 lg:w-80 w-52 h-52 mx-auto lg:mx-20  rounded-full ring-4 ring-gray-600 ring-opacity-50",attrs:{src:n(244),alt:""}})])}],l={components:{ChevronDownIcon:n(29).b}},r=(n(245),n(9)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-4 lg:pb-10 bg-darkblue"},[t._m(0),t._v(" "),n("ChevronDownIcon",{staticClass:"text-white text-xl mx-auto h-8 w-8 mt-8"})],1)}),o,!1,null,"1351c972",null);e.default=component.exports},254:function(t,e,n){"use strict";n.r(e);var o={components:{ProjectSummary:n(243).default}},l=(n(247),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-32 bg-light-blue lg:pt-20 bg-image mx-auto p-5 w-full",attrs:{id:"skills"}},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl"},[t._v("\n        Featured Projects\n      ")]),t._v(" "),n("ProjectSummary",{attrs:{title:"ASColour Colourmatic Critic",cta:"Watch Video","cta-link":"https://vimeo.com/312834441",description:"This creative project for ASColour used a camera and visuals to recommend t-shirts to customers. The display was featured outside the Customs Street store in Auckland CBD.",link:"ascolour",image:"ascolour.png"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads 3D Drone Customiser",cta:"Live Site","cta-link":"https://kiwiquads.co.nz/customiser",description:"A 3D drone customiser tool built for KiwiQuads allows real-time customisation of a drone to visualise different components and colours.\nBuilt using Babylon.js framework and React.",link:"customiser",image:"customiser.jpg"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads Order Dispatch System",description:"KiwiQuads needed a dispatching system to handle a large quantity of orders efficiently. I built this web application to combine order picking with NZ Posts API for shipping.",link:"dispatch",image:"dispatch.jpg"}})],1)])}),[],!1,null,"9fda7172",null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var o={components:{ToolIcon:n(237).default}},l=(n(249),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-12 lg:pb-24 med-blue lg:pt-20 bg-image mx-auto p-5 w-full",attrs:{id:"skills"}},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative"},[n("div",{staticClass:"bg-white shadow-xl rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:px-6"},[n("h2",{staticClass:"title mb-4 text-2xl lg:text-4xl"},[t._v("\n          Skills & Experience\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"flex-grow max-w-lg"},[n("h3",{staticClass:"subtitle text-xl lg:text-3xl"},[t._v("\n              Technologies and tools I use\n            ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 md:grid-cols-4 mr-10"},[n("ToolIcon",{attrs:{label:"HTML5",icon:"html.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Javascript ES6",icon:"js.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"CSS",icon:"css.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"GraphQL",icon:"graphql.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Nuxt JS",icon:"nuxt.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Visual Studio C#",icon:"visualstudio.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Wordpress",icon:"wordpress.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Git",icon:"git.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Vue JS",icon:"vuejs.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Illustrator",icon:"illustrator.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Photoshop",icon:"photoshop.png"}})],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow lg:border-l lg:pl-10 max-w-xl"},[n("h3",{staticClass:"subtitle mt-10 lg:mt-0 text-xl lg:text-3xl"},[t._v("\n              I am experienced in\n            ")]),t._v(" "),n("p",[n("ul",{staticClass:"list-disc list-outside ml-5 leading-6 exp-list space-y-3"},[n("li",[t._v("Developing "),n("b",[t._v("full-stack applications")]),t._v(" using modern javascript frameworks")]),t._v(" "),n("li",[t._v("Developing with "),n("b",[t._v("Wordpress")]),t._v(" CMS and "),n("b",[t._v("WooCommerce")])]),t._v(" "),n("li",[t._v("Building "),n("b",[t._v("Visual Studio C#")]),t._v(" desktop applications")]),t._v(" "),n("li",[t._v("Integrating web & desktop applications with "),n("b",[t._v("RESTful API services")])]),t._v(" "),n("li",[t._v("Vector creation in "),n("b",[t._v("Adobe Illustrator")])]),t._v(" "),n("li",[t._v("Photo manipulation & colour correction in "),n("b",[t._v("Adobe Photoshop")])]),t._v(" "),n("li",[t._v("Code & project management using "),n("b",[t._v("Git")])]),t._v(" "),n("li",[t._v("Website performance analysis using "),n("b",[t._v("Google Analytics")])]),t._v(" "),n("li",[t._v("Marketing automation in "),n("b",[t._v("Klaviyo")]),t._v(" & "),n("b",[t._v("Facebook Ads Manager")])]),t._v(" "),n("ul")])])])}],!1,null,"2b353f40",null);e.default=component.exports;installComponents(component,{ToolIcon:n(237).default})},256:function(t,e,n){"use strict";n.r(e);var o=n(253),l=n(254),r={components:{About:o.default,Projects:l.default}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("about"),t._v(" "),n("skills"),t._v(" "),n("projects")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{About:n(253).default,Skills:n(255).default,Projects:n(254).default})}}]);