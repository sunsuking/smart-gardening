"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navigator.tsx




const Navigator = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-evenly items-center w-1/2 h-14 bg-white rounded-full shadow-2xl select-none cursor-pointer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: `${router.pathname.split("/")[1] === "" ? "scale-125" : ""} hover:scale-125`,
                    width: "33",
                    height: "33",
                    viewBox: "0 0 33 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M19.3444 26.4713V20.3625C19.3444 20.0925 19.2371 19.8335 19.0462 19.6426C18.8552 19.4517 18.5963 19.3444 18.3262 19.3444H14.2537C13.9837 19.3444 13.7248 19.4517 13.5338 19.6426C13.3429 19.8335 13.2356 20.0925 13.2356 20.3625V26.4713C13.2356 26.7413 13.1284 27.0003 12.9374 27.1912C12.7465 27.3821 12.4875 27.4894 12.2175 27.4894H6.10875C5.83872 27.4894 5.57976 27.3821 5.38882 27.1912C5.19789 27.0003 5.09062 26.7413 5.09062 26.4713V14.6992C5.0929 14.5583 5.12335 14.4193 5.18018 14.2903C5.23701 14.1614 5.31906 14.0451 5.42151 13.9483L15.6028 4.69613C15.7904 4.52443 16.0356 4.4292 16.29 4.4292C16.5444 4.4292 16.7895 4.52443 16.9772 4.69613L27.1585 13.9483C27.2609 14.0451 27.343 14.1614 27.3998 14.2903C27.4566 14.4193 27.4871 14.5583 27.4894 14.6992V26.4713C27.4894 26.7413 27.3821 27.0003 27.1912 27.1912C27.0002 27.3821 26.7413 27.4894 26.4712 27.4894H20.3625C20.0925 27.4894 19.8335 27.3821 19.6426 27.1912C19.4516 27.0003 19.3444 26.7413 19.3444 26.4713Z",
                        fill: `${router.pathname.split("/")[1] === "" ? "rgba(183,224,177,0.94)" : "#BABABA"}`,
                        // stroke="#BABABA"
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/lists",
                className: "cursor-pointer select-none",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: `${router.pathname.split("/")[1] === "lists" ? "scale-125" : ""} hover:scale-125`,
                    width: "33",
                    height: "33",
                    viewBox: "0 0 33 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M28.5075 5.02677C28.4898 4.77948 28.3835 4.54687 28.2082 4.37156C28.0329 4.19626 27.8003 4.09 27.553 4.07227C17.8426 3.49958 10.0667 6.42669 6.74508 11.9118C5.59538 13.7875 5.02843 15.9623 5.11608 18.1606C5.19244 20.1841 5.77786 22.2458 6.87234 24.2693L19.6371 11.4919C19.8349 11.3295 20.086 11.2465 20.3416 11.2591C20.5972 11.2716 20.839 11.3788 21.02 11.5598C21.201 11.7407 21.3081 11.9825 21.3207 12.2381C21.3332 12.4937 21.2503 12.7449 21.0879 12.9427L8.31045 25.7074C10.334 26.8019 12.3957 27.3873 14.4192 27.4637H14.8392C16.8957 27.4726 18.914 26.9085 20.6679 25.8347C26.1531 22.5131 29.0802 14.7371 28.5075 5.02677Z",
                            fill: `${router.pathname.split("/")[1] === "lists" ? "rgba(183,224,177,0.94)" : "#BABABA"}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M7.26687 24.9568C7.12687 24.7277 6.99961 24.4986 6.87234 24.2695L4.36521 26.7639C4.17403 26.957 4.06677 27.2177 4.06677 27.4894C4.06677 27.761 4.17403 28.0217 4.36521 28.2148C4.55981 28.4029 4.81992 28.5081 5.09062 28.5081C5.36133 28.5081 5.62143 28.4029 5.81604 28.2148L8.31044 25.7076L7.62321 25.3131C7.48023 25.2213 7.35869 25.0998 7.26687 24.9568Z",
                            fill: `${router.pathname.split("/")[1] === "lists" ? "rgba(183,224,177,0.94)" : "#BABABA"}`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/search",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: `${router.pathname.split("/")[1] === "search" ? "scale-125" : ""} hover:scale-125`,
                    width: "31",
                    height: "31",
                    viewBox: "0 0 31 31",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M13.9792 23.5276C19.4285 23.5276 23.846 19.11 23.846 13.6607C23.846 8.21146 19.4285 3.79395 13.9792 3.79395C8.52993 3.79395 4.11241 8.21146 4.11241 13.6607C4.11241 19.11 8.52993 23.5276 13.9792 23.5276Z",
                            fill: `${router.pathname.split("/")[1] === "search" ? "rgba(183,224,177,0.94)" : "#BABABA"}`,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M20.9565 20.6382L26.6651 26.3468",
                            fill: `${router.pathname.split("/")[1] === "search" ? "rgba(183,224,177,0.94)" : "#BABABA"}`,
                            stroke: `${router.pathname.split("/")[1] === "search" ? "rgba(183,224,177,0.94)" : "#BABABA"}`,
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_navigator = (Navigator);

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const { 0: queryClient  } = (0,external_react_.useState)(()=>new external_react_query_.QueryClient()
    );
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative w-full h-[100vh] overflow-x-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "-z-50 fixed -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-[#D3E5FF] opacity-70 blur-[120px]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "-z-50 fixed -bottom-28 -right-28 w-[500px] h-[500px] rounded-full bg-[#D5EEC9] opacity-70 blur-[120px]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed bottom-3 left-0 w-full flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_navigator, {})
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(3962)));
module.exports = __webpack_exports__;

})();