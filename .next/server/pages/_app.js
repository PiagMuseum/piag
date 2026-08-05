(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./src/theme/shadows.js

const shadows = (themeMode = "light")=>{
    const rgb = themeMode === "light" ? "#8c98a4" : "#000000";
    return [
        "none",
        `0 3px 6px 0 ${(0,styles_.alpha)(rgb, 0.25)}`,
        `0 12px 15px ${(0,styles_.alpha)(rgb, 0.1)}`,
        `0 6px 24px 0 ${(0,styles_.alpha)(rgb, 0.125)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`,
        `0 10px 40px 10px ${(0,styles_.alpha)(rgb, 0.175)}`
    ];
};
/* harmony default export */ const theme_shadows = (shadows);

;// CONCATENATED MODULE: ./src/theme/palette.js
const light = {
    alternate: {
        main: "#f7faff",
        dark: "#edf1f7"
    },
    cardShadow: "rgba(23, 70, 161, .11)",
    mode: "light",
    primary: {
        main: "#377dff",
        light: "#467de3",
        dark: "#2f6ad9",
        contrastText: "#fff"
    },
    secondary: {
        light: "#ffb74d",
        main: "#f9b934",
        dark: "#FF9800",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    text: {
        primary: "#1e2022",
        secondary: "#677788"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
        paper: "#ffffff",
        default: "#ffffff",
        level2: "#f5f5f5",
        level1: "#ffffff"
    }
};
const dark = {
    alternate: {
        main: "#1a2138",
        dark: "#151a30"
    },
    cardShadow: "rgba(0, 0, 0, .11)",
    common: {
        black: "#000",
        white: "#fff"
    },
    mode: "dark",
    primary: {
        main: "#1976d2",
        light: "#2196f3",
        dark: "#0d47a1",
        contrastText: "#fff"
    },
    secondary: {
        light: "#FFEA41",
        main: "#FFE102",
        dark: "#DBBE01",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    text: {
        primary: "#EEEEEF",
        secondary: "#AEB0B4"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
        paper: "#222B45",
        default: "#222B45",
        level2: "#333",
        level1: "#2D3748"
    }
};

;// CONCATENATED MODULE: ./src/theme/index.js




const getTheme = (mode, themeToggler)=>(0,material_.responsiveFontSizes)((0,styles_.createTheme)({
        palette: mode === "light" ? light : dark,
        shadows: theme_shadows(mode),
        typography: {
            fontFamily: '"Inter", sans-serif',
            button: {
                textTransform: "none",
                fontWeight: "medium"
            }
        },
        zIndex: {
            appBar: 1200,
            drawer: 1300
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 400,
                        borderRadius: 5,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    containedSecondary: mode === "light" ? {
                        color: "white"
                    } : {}
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        borderRadius: 5
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: 5
                    },
                    input: {
                        borderRadius: 5
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 8
                    }
                }
            }
        },
        themeToggler
    }));
/* harmony default export */ const theme = (getTheme);

;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Page.js








const useDarkMode = ()=>{
    const [themeMode, setTheme] = (0,external_react_.useState)("light");
    const [mountedComponent, setMountedComponent] = (0,external_react_.useState)(false);
    const setMode = (mode)=>{
        try {
            window.localStorage.setItem("themeMode", mode);
        } catch  {
        /* do nothing */ }
        setTheme(mode);
    };
    const themeToggler = ()=>{
        themeMode === "light" ? setMode("dark") : setMode("light");
    };
    (0,external_react_.useEffect)(()=>{
        try {
            const localTheme = window.localStorage.getItem("themeMode");
            localTheme ? setTheme(localTheme) : setMode("light");
        } catch  {
            setMode("light");
        }
        setMountedComponent(true);
    }, []);
    return [
        themeMode,
        themeToggler,
        mountedComponent
    ];
};
function Page({ children  }) {
    external_react_default().useEffect(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        external_aos_default().init({
            once: true,
            delay: 0,
            duration: 800,
            offset: 0,
            easing: "ease-in-out"
        });
    }, []);
    const [themeMode, themeToggler, mountedComponent] = useDarkMode();
    (0,external_react_.useEffect)(()=>{
        external_aos_default().refresh();
    }, [
        mountedComponent,
        themeMode
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.ThemeProvider, {
        theme: theme(themeMode, themeToggler),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime.jsx((Paper_default()), {
                elevation: 0,
                children: children
            })
        ]
    });
}
Page.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(598);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(759);
;// CONCATENATED MODULE: ./src/pages/_app.js








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime.jsx(Page, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 759:
/***/ (() => {



/***/ }),

/***/ 598:
/***/ (() => {



/***/ }),

/***/ 278:
/***/ (() => {



/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(394)));
module.exports = __webpack_exports__;

})();