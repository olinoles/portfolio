(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{244:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},282:function(e,t,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("5457d317",content,!0,{sourceMap:!1})},299:function(e,t,n){e.exports=n.p+"img/dispatch-full.1f72e0b.jpg"},300:function(e,t,n){e.exports=n.p+"img/invoice-generator.5498f99.jpg"},301:function(e,t,n){e.exports=n.p+"img/invoice.dd3f862.jpg"},302:function(e,t,n){"use strict";n(282)},303:function(e,t,n){var o=n(41),r=n(244),c=n(304),d=o((function(i){return i[1]})),l=r(c);d.push([e.i,"#header-bg[data-v-23bb36e9]{\n  background-image:linear-gradient(180deg,rgba(0,0,0,.768),hsla(0,0%,49.4%,.494)),url("+l+");\n  background-size:100%;\n  background-position:50%;\n  background-repeat:no-repeat\n}\n#content p[data-v-23bb36e9],#summary p[data-v-23bb36e9]{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n#content h3[data-v-23bb36e9],#summary h3[data-v-23bb36e9]{\n  font-size:1.24rem;\n  line-height:1.75rem;\n  font-weight:600;\n  margin-top:1.25rem;\n  margin-bottom:.75rem\n}\n#summary h3[data-v-23bb36e9]{\n  text-transform:uppercase\n}\n.iframe-container[data-v-23bb36e9]{\n  overflow:hidden;\n  padding-top:56.25%;\n  position:relative\n}\n.iframe-container iframe[data-v-23bb36e9]{\n  border:0;\n  height:100%;\n  left:0;\n  position:absolute;\n  top:0;\n  width:100%\n}\np a[data-v-23bb36e9]{\n  color:#ff4500\n}",""]),d.locals={},e.exports=d},304:function(e,t,n){e.exports=n.p+"img/dispatch-1.1ecd74c.jpg"},309:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"select-none max-w-5xl mx-auto h-32 sm:h-56 object-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-4xl sm:text-5xl font-semibold pl-10 flex items-center",attrs:{id:"header-bg"}},[e._v("\n    ORDER DISPATCH SYSTEM\n  ")]),e._v(" "),o("div",{staticClass:"flex flex-col sm:flex-row mx-auto my-5 max-w-5xl relative"},[o("div",{staticClass:"flex-shrink-0 border-b-2 mx-5 sm:mx-0 sm:border-b-0 sm:border-r-2 border-gray-300 pr-10 pl-5 sm:pl-10 pb-5 sm:py-5",attrs:{id:"summary"}},[o("h3",[e._v("\n        Case Study\n      ")]),e._v(" "),o("p",[e._v("Order Dispatch System")]),e._v(" "),o("p",[e._v("KiwiQuads, Auckland")]),e._v(" "),o("h3",[e._v("\n        Type\n      ")]),e._v(" "),o("p",[e._v("Ecommerce Web Tool")]),e._v(" "),o("h3",[e._v("\n        Tools used\n      ")]),e._v(" "),o("p",[e._v("Nuxt JS")]),e._v(" "),o("p",[e._v("Vue")]),e._v(" "),o("p",[e._v("Visual Studio C#")]),e._v(" "),o("p",[e._v("PDFSharp .NET")])]),e._v(" "),o("article",{staticClass:"px-10 pb-5",attrs:{id:"content"}},[o("h3",[e._v("\n        Goal\n      ")]),e._v(" "),o("p",[e._v("\n        To build a web app which makes the order packing process for KiwiQuads efficient, simple, and functional.\n      ")]),e._v(" "),o("h3",[e._v("\n        What does an order dispatch system do?\n      ")]),e._v(" "),o("p",[e._v("\n        This project used a JAMstack architecture to combine the WooCommerce Orders API, NZPost Shipping API, and a local invoice generator app to simplify the process of packing orders, generating shipping labels, and printing invoices. The system is accessible at any location and secured using access keys.\n      ")]),e._v(" "),o("img",{staticClass:"block w-full h-auto py-5",attrs:{src:n(299)}}),e._v(" "),o("p",{staticClass:"text-center mb-5 italic",staticStyle:{"font-size":"1rem"}},[e._v("\n        The dispatch app is split into 3 sections for each part of the shipping process\n      ")]),e._v(" "),o("h3",[e._v("\n        The Problem\n      ")]),e._v(" "),o("p",[e._v("\n        As KiwiQuads continued to grow and ship more orders each day, we needed to simplify the packing process into an efficient system which could be easily taught to new staff members. The previous system was prone to picking errors, and took much longer than needed to ship each order as three different systems needed to be used to print each order. My primary goal was to eliminate picking error and reduce packing time. My secondary goal was to create an easier way to generate invoices.\n        "),o("br"),o("br")]),e._v(" "),o("h3",[e._v("\n        My Solution\n      ")]),e._v(" "),o("p",[e._v("\n        I opted to build this tool as a web app so that it could be accessible by any staff when required. I began by mapping out the inputs, outputs, and functions that app needed on paper. Once I understood the flow of the page, I drafted some UI concepts in Figma and began a new Nuxt/Vue project. "),o("br"),o("br"),e._v("Once the first prototype was finished, I presented it to our picking team whom provided valuable feedback on the flow and layout of the application. After the web app had been through several revisions, the picking team began to use it as part of their daily workflow. I then started work on my secondary goal of building a invoice generation tool."),o("br"),o("br"),e._v("As the invoices only needed to be generated on one machine for printing, I decided to build this tool in Visual Studio .NET which had much better libraries for generating documents, PDFs, and automated printing. I wanted the whole process to be a one button click for the packer so that no additional dialogs would appear.\n      ")]),e._v(" "),o("img",{staticClass:"w-80 mx-auto h-auto py-5 px-5 inline-block",attrs:{src:n(300)}}),e._v(" "),o("img",{staticClass:"w-80 mx-auto h-auto py-5 px-5 inline-block shadow-md",attrs:{src:n(301)}}),e._v(" "),o("p",{staticClass:"text-center my-5 italic",staticStyle:{"font-size":"1rem"}},[e._v("\n        The backend invoice generator and an invoice generated by it\n      ")]),e._v(" "),o("p",[e._v("\n        The application opens a local websocket which accepts JSON data. Orders can be sent to the tool from the Dispatch web app via the websocket. The tool then generates the invoice, prints it, and logs the event. I later added support for printing various labels depending if the customer wanted to pickup their order locally.\n      ")]),e._v(" "),o("h3",[e._v("\n        Challenges\n      ")]),e._v(" "),o("p",[e._v("\n        This was the biggest web app I have worked on so far. It really tested my skills in working with a complex project. There are many supporting functions which manipulate the data between the two integrations. My biggest challenge was finding a way to efficiently store the large amount of data from the WooCommerce API then building the communication between the web app and the invoice generation tool. I thought the websocket was a really elegant solution to this and works incredibly well.\n      ")]),e._v(" "),o("h3",[e._v("\n        Conclusion\n      ")]),e._v(" "),o("p",[e._v("\n        This was one of the best tools I have built for KiwiQuads. It saves many hours of time every week and has eliminated picking error almost completely. I am proud to say I achieved both my two goals of reducing picking error and automating the invoice generation process. Since the project was completed, I have continued to add additional functionality such as built-in barcode scanning, and 2D barcodes printed on the invoices for integration with future warehouse systems we may use.\n      ")])])])])}],r={layout:"project",head:function(){return{title:"Oliver Noles - 3D Drone Customiser Project",description:"Oliver Noles Portfolio. 3D Drone Customiser Project"}}},c=(n(302),n(6)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o,!1,null,"23bb36e9",null);t.default=component.exports}}]);