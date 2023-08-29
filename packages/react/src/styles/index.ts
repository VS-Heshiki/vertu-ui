import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@vertu-ui/tokens'

export const { styled, theme, css, getCssText, globalCss, keyframes, createTheme, config } = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space
    }
})
