// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
import { ModalProvider, light, dark } from '@pancakeswap/uikit'

export interface CustomTheme extends PancakeTheme {
    custom: boolean
}

light.colors.background = "#FFFEFF"
light.colors.primary = "#3C91E6"
light.colors.primaryBright = "#1F01B9"
light.colors.primaryDark = "#040303"
light.colors.secondary = "#1F01B9"
light.colors.input = "#3A4E48"
light.colors.text = "#040303"

export { ModalProvider, light, dark }

/*
light = {
    "siteWidth": 1200,
    "breakpoints": [
        "370px",
        "576px",
        "852px",
        "968px",
        "1080px",
        "1200px"
    ],
    "mediaQueries": {
        "xs": "@media screen and (min-width: 370px)",
        "sm": "@media screen and (min-width: 576px)",
        "md": "@media screen and (min-width: 852px)",
        "lg": "@media screen and (min-width: 968px)",
        "xl": "@media screen and (min-width: 1080px)",
        "xxl": "@media screen and (min-width: 1200px)",
        "nav": "@media screen and (min-width: 968px)"
    },
    "spacing": [
        0,
        4,
        8,
        16,
        24,
        32,
        48,
        64
    ],
    "shadows": {
        "level1": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
        "active": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
        "success": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
        "warning": "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
        "focus": "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
        "inset": "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
        "tooltip": "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)"
    },
    "radii": {
        "small": "4px",
        "default": "16px",
        "card": "24px",
        "circle": "50%"
    },
    "zIndices": {
        "dropdown": 10,
        "modal": 100
    },
    "isDark": false,
    "alert": {
        "background": "#FFFFFF"
    },
    "colors": {
        "failure": "#ED4B9E",
        "primary": "#1FC7D4",
        "primaryBright": "#53DEE9",
        "primaryDark": "#0098A1",
        "secondary": "#7645D9",
        "success": "#31D0AA",
        "warning": "#FFB237",
        "binance": "#F0B90B",
        "overlay": "#452a7a",
        "gold": "#FFC700",
        "silver": "#B2B2B2",
        "bronze": "#E7974D",
        "background": "#FAF9FA",
        "backgroundDisabled": "#E9EAEB",
        "backgroundAlt": "#FFFFFF",
        "backgroundAlt2": "rgba(255, 255, 255, 0.7)",
        "cardBorder": "#E7E3EB",
        "contrast": "#191326",
        "dropdown": "#F6F6F6",
        "dropdownDeep": "#EEEEEE",
        "invertedContrast": "#FFFFFF",
        "input": "#eeeaf4",
        "inputSecondary": "#d7caec",
        "tertiary": "#EFF4F5",
        "text": "#280D5F",
        "textDisabled": "#BDC2C4",
        "textSubtle": "#7A6EAA",
        "disabled": "#E9EAEB",
        "gradients": {
            "bubblegum": "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
            "inverseBubblegum": "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
            "cardHeader": "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
            "blue": "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
            "violet": "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
            "violetAlt": "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
            "gold": "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)"
        }
    },
    "card": {
        "background": "#FFFFFF",
        "boxShadow": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
        "boxShadowActive": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
        "boxShadowSuccess": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
        "boxShadowWarning": "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
        "cardHeaderBackground": {
            "default": "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
            "blue": "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
            "bubblegum": "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
            "violet": "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)"
        },
        "dropShadow": "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"
    },
    "toggle": {
        "handleBackground": "#FFFFFF"
    },
    "nav": {
        "background": "#FFFFFF"
    },
    "modal": {
        "background": "#FFFFFF"
    },
    "pancakeToggle": {
        "handleBackground": "#FFFFFF",
        "handleShadow": "#BDC2C4"
    },
    "radio": {
        "handleBackground": "#FFFFFF"
    },
    "tooltip": {
        "background": "#27262c",
        "text": "#F4EEFF",
        "boxShadow": "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)"
    }
}

dark = {
    "siteWidth": 1200,
    "breakpoints": [
        "370px",
        "576px",
        "852px",
        "968px",
        "1080px",
        "1200px"
    ],
    "mediaQueries": {
        "xs": "@media screen and (min-width: 370px)",
        "sm": "@media screen and (min-width: 576px)",
        "md": "@media screen and (min-width: 852px)",
        "lg": "@media screen and (min-width: 968px)",
        "xl": "@media screen and (min-width: 1080px)",
        "xxl": "@media screen and (min-width: 1200px)",
        "nav": "@media screen and (min-width: 968px)"
    },
    "spacing": [
        0,
        4,
        8,
        16,
        24,
        32,
        48,
        64
    ],
    "shadows": {
        "level1": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
        "active": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
        "success": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
        "warning": "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
        "focus": "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
        "inset": "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
        "tooltip": "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)"
    },
    "radii": {
        "small": "4px",
        "default": "16px",
        "card": "24px",
        "circle": "50%"
    },
    "zIndices": {
        "dropdown": 10,
        "modal": 100
    },
    "isDark": true,
    "alert": {
        "background": "#27262c"
    },
    "colors": {
        "failure": "#ED4B9E",
        "primary": "#1FC7D4",
        "primaryBright": "#53DEE9",
        "primaryDark": "#0098A1",
        "secondary": "#9A6AFF",
        "success": "#31D0AA",
        "warning": "#FFB237",
        "binance": "#F0B90B",
        "overlay": "#452a7a",
        "gold": "#FFC700",
        "silver": "#B2B2B2",
        "bronze": "#E7974D",
        "background": "#08060B",
        "backgroundDisabled": "#3c3742",
        "backgroundAlt": "#27262c",
        "backgroundAlt2": "rgba(39, 38, 44, 0.7)",
        "cardBorder": "#383241",
        "contrast": "#FFFFFF",
        "dropdown": "#1E1D20",
        "dropdownDeep": "#100C18",
        "invertedContrast": "#191326",
        "input": "#372F47",
        "inputSecondary": "#262130",
        "tertiary": "#353547",
        "text": "#F4EEFF",
        "textDisabled": "#666171",
        "textSubtle": "#B8ADD2",
        "disabled": "#524B63",
        "gradients": {
            "bubblegum": "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
            "inverseBubblegum": "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
            "cardHeader": "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
            "blue": "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
            "violet": "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
            "violetAlt": "linear-gradient(180deg, #434575 0%, #66578D 100%)",
            "gold": "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)"
        }
    },
    "card": {
        "background": "#27262c",
        "boxShadow": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
        "boxShadowActive": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
        "boxShadowSuccess": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
        "boxShadowWarning": "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
        "cardHeaderBackground": {
            "default": "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
            "blue": "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
            "bubblegum": "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
            "violet": "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)"
        },
        "dropShadow": "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"
    },
    "toggle": {
        "handleBackground": "#27262c"
    },
    "nav": {
        "background": "#27262c"
    },
    "modal": {
        "background": "#27262c"
    },
    "pancakeToggle": {
        "handleBackground": "#27262c",
        "handleShadow": "#666171"
    },
    "radio": {
        "handleBackground": "#27262c"
    },
    "tooltip": {
        "background": "#FFFFFF",
        "text": "#280D5F",
        "boxShadow": "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)"
    }
}
*/
