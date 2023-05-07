import {extendTheme} from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools";


const fonts = {mono: `'Menlo', monospace`, heading: 'PalanquinDark', body: 'Fahkwang'}

// const breakpoints = {
//     xs: '20em',
//     sm: '40em',
//     md: '52em',
//     lg: '64em',
//     xl: '80em',
// }
const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const colors = {
    darkgreen: '#02715F',
    lightfont: '#6E8A99',
}

export const theme = extendTheme({
    initialColorMode: "light",
    // semanticTokens: {
    //     colors: {
    //         text: {
    //             default: '#16161D',
    //             _dark: '#ffffff',
    //         },
    //         primary: {
    //             default: '#FF0080',
    //             _dark: '#ffffff',
    //         },
    //         background: "red"
    //     },
    // },
    styles: {
        global: props => ({
            // Optionally set global CSS styles
            body: {
                // color: mode(
                //     colors.backBlack,
                //     "#ffffff")(props),
            },

        }),
    },
    colors,
    fonts,
    breakpoints,
})


