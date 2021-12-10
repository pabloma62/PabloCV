"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 285:
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
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./public/images/logotipo.png
/* harmony default export */ const logotipo = ({"src":"/_next/static/media/logotipo.0b9e07a7.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnklEQVR42mOAAR9rV8a0oCjmpIBSlnjfYmYGFMDCwMiABgw1beBiMIZIiItrVHpIXXFyQEU3SMDXPo6JoTmtkQXEaUhqiKxLKfqVEpR5JSO4bBoDGIgzMpSGNYEVVES0ByR75P5vzah7+//5bz6Q2LH525iAlBfMCrZ4x7LYSXmzTUGcBJdymDgmqIprwZQ0F4tmTHQpYenJnsiELA4AX4cpf0lnWOIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/logo.js






const LogoBox = (styled_default()).span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`;
const Logo = ()=>{
    const PabloMaImg = `/public/images/logotipo${(0,react_.useColorModeValue)('', '-dark')}.png`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: logotipo,
                        width: 80,
                        height: 80,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
                        fontFamily: "M PLUS Rounded 1c",
                        fontWeight: "bold",
                        ml: 3,
                        children: "Pablo Ma\xf1as Izquierdo"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./components/theme-toggle-button.js



const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
        "aria-label": "Toggle theme",
        colorScheme: (0,react_.useColorModeValue)('purple', 'orange'),
        icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.MoonIcon, {
        }), /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.SunIcon, {
        })),
        onClick: toggleColorMode
    }));
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/navbar.js






const LinkItem = ({ href , path , children  })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)('gray200', 'whiteAlpha.900');
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            p: 2,
            bg: active ? 'glassTeal' : undefined,
            color: active ? '#202023' : inactiveColor,
            children: children
        })
    }));
};
const Navbar = (props)=>{
    const { path  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)('#ffffff40', '#20202380'),
        style: {
            backdropFilter: 'blur(10px'
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: "tighter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: 'column',
                        md: 'row'
                    },
                    display: {
                        base: 'none',
                        md: 'flex'
                    },
                    width: {
                        base: 'full',
                        md: 'auto'
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        nmd: 0
                    },
                    pb: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/works",
                            path: path,
                            children: "Trabajos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/posts",
                            path: path,
                            children: "Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: 'inline-block',
                                md: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {
                                        }),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        children: "About"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/works",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        children: "Trabajos"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/posts",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        children: "Posts"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.linkedin.com/in/pablo-m-i/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        children: "Ver mi perfil"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/layouts/main.js




const Main = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pablo Ma\xf1as Izquierdo - Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.md",
                pt: 14,
                children: children
            })
        ]
    }));
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(985);
;// CONCATENATED MODULE: external "@emotion/react"
const external_emotion_react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
        styles: {
            fontFamily: 'arial'
        }
    })
;
/* harmony default export */ const fonts = (Fonts);

;// CONCATENATED MODULE: ./pages/_app.js






const Website = ({ Component , pageProps , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fonts, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                router: router,
                children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                    ...pageProps,
                    key: router.route
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,985], () => (__webpack_exec__(285)));
module.exports = __webpack_exports__;

})();