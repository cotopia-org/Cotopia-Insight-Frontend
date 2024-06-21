import { CSSProperties, ReactNode } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import resolveConfig from 'tailwindcss/resolveConfig'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import tailwindConfig from 'tailwind.config'

const config = resolveConfig(tailwindConfig)
const tailwindTheme: any = config.theme

declare module '@mui/material/styles' {
  interface TypographyVariants {
    medium64: CSSProperties
    regular64: CSSProperties
    medium56: CSSProperties
    regular56: CSSProperties
    medium48: CSSProperties
    medium32: CSSProperties
    bold24: CSSProperties
    medium24: CSSProperties
    regular24: CSSProperties
    bold20: CSSProperties
    medium20: CSSProperties
    regular20: CSSProperties
    light20: CSSProperties
    bold18: CSSProperties
    medium18: CSSProperties
    regular18: CSSProperties
    light18: CSSProperties
    bold16: CSSProperties
    medium16: CSSProperties
    regular16: CSSProperties
    light16: CSSProperties
    bold14: CSSProperties
    medium14: CSSProperties
    regular14: CSSProperties
    light14: CSSProperties
    bold12: CSSProperties
    medium12: CSSProperties
    regular12: CSSProperties
    light12: CSSProperties
    bold10: CSSProperties
    medium10: CSSProperties
    regular10: CSSProperties
    light10: CSSProperties
    medium9: CSSProperties
  }
  interface TypographyVariantsOptions {
    medium64?: CSSProperties
    regular64?: CSSProperties
    medium56?: CSSProperties
    regular56?: CSSProperties
    medium48?: CSSProperties
    medium32?: CSSProperties
    bold24?: CSSProperties
    medium24?: CSSProperties
    regular24?: CSSProperties
    bold20?: CSSProperties
    medium20?: CSSProperties
    regular20?: CSSProperties
    light20?: CSSProperties
    bold18?: CSSProperties
    medium18?: CSSProperties
    regular18?: CSSProperties
    light18?: CSSProperties
    bold16?: CSSProperties
    medium16?: CSSProperties
    regular16?: CSSProperties
    light16?: CSSProperties
    bold14?: CSSProperties
    medium14?: CSSProperties
    regular14?: CSSProperties
    light14?: CSSProperties
    bold12?: CSSProperties
    medium12?: CSSProperties
    regular12?: CSSProperties
    light12?: CSSProperties
    bold10?: CSSProperties
    medium10?: CSSProperties
    regular10?: CSSProperties
    light10?: CSSProperties
    medium9?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    medium64: true
    regular64: true
    medium56: true
    regular56: true
    medium48: true
    medium32: true
    bold24: true
    medium24: true
    regular24: true
    bold20: true
    medium20: true
    regular20: true
    light20: true
    bold18: true
    medium18: true
    regular18: true
    light18: true
    bold16: true
    medium16: true
    regular16: true
    light16: true
    bold14: true
    medium14: true
    regular14: true
    light14: true
    bold12: true
    medium12: true
    regular12: true
    light12: true
    bold10: true
    medium10: true
    regular10: true
    light10: true
    medium9: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindTheme.colors.primary.surface.DEFAULT,
      light: tailwindTheme.colors.primary.surface.light,
      dark: tailwindTheme.colors.primary.surface.dark,
      contrastText: tailwindTheme.colors.grayscale.text.negative,
    },
    secondary: {
      main: tailwindTheme.colors.secondary.surface.DEFAULT,
      light: tailwindTheme.colors.secondary.surface.light,
      dark: tailwindTheme.colors.secondary.surface.dark,
    },
    success: {
      main: tailwindTheme.colors.success.surface.DEFAULT,
      light: tailwindTheme.colors.success.surface.light,
      dark: tailwindTheme.colors.success.surface.dark,
    },
    error: {
      main: tailwindTheme.colors.error.surface.DEFAULT,
      light: tailwindTheme.colors.error.surface.light,
      dark: tailwindTheme.colors.error.surface.dark,
    },
    warning: {
      main: tailwindTheme.colors.warning.surface.DEFAULT,
      light: tailwindTheme.colors.warning.surface.light,
      dark: tailwindTheme.colors.warning.surface.dark,
    },
  },
  typography: () => ({
    fontFamily: {
      bold: 'SFUIDisplay-Semibold',
      medium: 'SFUIDisplay-Medium',
      regular: 'SFUIDisplay-Regular',
      light: 'SFUIDisplay-Light',
    } as any,
    fontWeight: {
      bold: 600,
      medium: 500,
      regular: 400,
      light: 300,
    },
    medium64: {
      fontSize: tailwindTheme.fontSize.medium64[0],
      fontWeight: tailwindTheme.fontSize.medium64[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium64[1].lineHeight,
    },
    regular64: {
      fontSize: tailwindTheme.fontSize.regular64[0],
      fontWeight: tailwindTheme.fontSize.regular64[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular64[1].lineHeight,
    },
    medium56: {
      fontSize: tailwindTheme.fontSize.medium56[0],
      fontWeight: tailwindTheme.fontSize.medium56[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium56[1].lineHeight,
    },
    regular56: {
      fontSize: tailwindTheme.fontSize.regular56[0],
      fontWeight: tailwindTheme.fontSize.regular56[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular56[1].lineHeight,
    },
    medium48: {
      fontSize: tailwindTheme.fontSize.medium48[0],
      fontWeight: tailwindTheme.fontSize.medium48[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium48[1].lineHeight,
    },
    medium32: {
      fontSize: tailwindTheme.fontSize.medium32[0],
      fontWeight: tailwindTheme.fontSize.medium32[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium32[1].lineHeight,
    },
    bold24: {
      fontSize: tailwindTheme.fontSize.bold24[0],
      fontWeight: tailwindTheme.fontSize.bold24[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold24[1].lineHeight,
    },
    medium24: {
      fontSize: tailwindTheme.fontSize.medium24[0],
      fontWeight: tailwindTheme.fontSize.medium24[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium24[1].lineHeight,
    },
    regular24: {
      fontSize: tailwindTheme.fontSize.regular24[0],
      fontWeight: tailwindTheme.fontSize.regular24[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular24[1].lineHeight,
    },
    bold20: {
      fontSize: tailwindTheme.fontSize.bold20[0],
      fontWeight: tailwindTheme.fontSize.bold20[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold20[1].lineHeight,
    },
    medium20: {
      fontSize: tailwindTheme.fontSize.medium20[0],
      fontWeight: tailwindTheme.fontSize.medium20[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium20[1].lineHeight,
    },
    regular20: {
      fontSize: tailwindTheme.fontSize.regular20[0],
      fontWeight: tailwindTheme.fontSize.regular20[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular20[1].lineHeight,
    },
    light20: {
      fontSize: tailwindTheme.fontSize.light20[0],
      fontWeight: tailwindTheme.fontSize.light20[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light20[1].lineHeight,
    },
    bold18: {
      fontSize: tailwindTheme.fontSize.bold18[0],
      fontWeight: tailwindTheme.fontSize.bold18[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold18[1].lineHeight,
    },
    medium18: {
      fontSize: tailwindTheme.fontSize.medium18[0],
      fontWeight: tailwindTheme.fontSize.medium18[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium18[1].lineHeight,
    },
    regular18: {
      fontSize: tailwindTheme.fontSize.regular18[0],
      fontWeight: tailwindTheme.fontSize.regular18[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular18[1].lineHeight,
    },
    light18: {
      fontSize: tailwindTheme.fontSize.light18[0],
      fontWeight: tailwindTheme.fontSize.light18[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light18[1].lineHeight,
    },
    bold16: {
      fontSize: tailwindTheme.fontSize.bold16[0],
      fontWeight: tailwindTheme.fontSize.bold16[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold16[1].lineHeight,
    },
    medium16: {
      fontSize: tailwindTheme.fontSize.medium16[0],
      fontWeight: tailwindTheme.fontSize.medium16[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium16[1].lineHeight,
    },
    regular16: {
      fontSize: tailwindTheme.fontSize.regular16[0],
      fontWeight: tailwindTheme.fontSize.regular16[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular16[1].lineHeight,
    },
    light16: {
      fontSize: tailwindTheme.fontSize.light16[0],
      fontWeight: tailwindTheme.fontSize.light16[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light16[1].lineHeight,
    },
    bold14: {
      fontSize: tailwindTheme.fontSize.bold14[0],
      fontWeight: tailwindTheme.fontSize.bold14[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold14[1].lineHeight,
    },
    medium14: {
      fontSize: tailwindTheme.fontSize.medium14[0],
      fontWeight: tailwindTheme.fontSize.medium14[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium14[1].lineHeight,
    },
    regular14: {
      fontSize: tailwindTheme.fontSize.regular14[0],
      fontWeight: tailwindTheme.fontSize.regular14[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular14[1].lineHeight,
    },
    light14: {
      fontSize: tailwindTheme.fontSize.light14[0],
      fontWeight: tailwindTheme.fontSize.light14[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light14[1].lineHeight,
    },
    bold12: {
      fontSize: tailwindTheme.fontSize.bold12[0],
      fontWeight: tailwindTheme.fontSize.bold12[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold12[1].lineHeight,
    },
    medium12: {
      fontSize: tailwindTheme.fontSize.medium12[0],
      fontWeight: tailwindTheme.fontSize.medium12[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium12[1].lineHeight,
    },
    regular12: {
      fontSize: tailwindTheme.fontSize.regular12[0],
      fontWeight: tailwindTheme.fontSize.regular12[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular12[1].lineHeight,
    },
    light12: {
      fontSize: tailwindTheme.fontSize.light12[0],
      fontWeight: tailwindTheme.fontSize.light12[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light12[1].lineHeight,
    },
    bold10: {
      fontSize: tailwindTheme.fontSize.bold10[0],
      fontWeight: tailwindTheme.fontSize.bold10[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold10[1].lineHeight,
    },
    medium10: {
      fontSize: tailwindTheme.fontSize.medium10[0],
      fontWeight: tailwindTheme.fontSize.medium10[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium10[1].lineHeight,
    },
    regular10: {
      fontSize: tailwindTheme.fontSize.regular10[0],
      fontWeight: tailwindTheme.fontSize.regular10[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular10[1].lineHeight,
    },
    light10: {
      fontSize: tailwindTheme.fontSize.light10[0],
      fontWeight: tailwindTheme.fontSize.light10[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light10[1].lineHeight,
    },
    medium9: {
      fontSize: tailwindTheme.fontSize.medium9[0],
      fontWeight: tailwindTheme.fontSize.medium9[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium9[1].lineHeight,
    },
  }),
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.MuiButtonBase-root': {
            boxShadow: 'none',
            borderRadius: 8,
          },
        },
        sizeLarge: {
          height: 56,
        },
        sizeSmall: {
          height: 32,
        },
        startIcon: {
          margin: 0,
        },
        endIcon: {
          margin: 0,
        },
        containedPrimary: {
          // '&:hover': {
          //   backgroundColor: tailwindTheme.colors.primary.surface.light,
          // },
          // '&:active': {
          //   backgroundColor: tailwindTheme.colors.primary.DEFAULT,
          // },
          '&:disabled': {
            backgroundColor: tailwindTheme.colors.primary.surface.DEFAULT,
            color: tailwindTheme.colors.grayscale.surface.subtle,
            opacity: '0.3',
          },
        },
        // outlinedPrimary: {
        //   borderColor: tailwindTheme.colors.secondary.DEFAULT,
        //   color: tailwindTheme.colors.text.dark,
        //   '&:disabled': {
        //     borderColor: tailwindTheme.colors.disabled.background,
        //     color: tailwindTheme.colors.disabled.text,
        //   },
        // },
        // textPrimary: {
        //   color: tailwindTheme.colors.info.DEFAULT,
        //   '&:hover': {
        //     backgroundColor: tailwindTheme.colors.primary.light,
        //     color: tailwindTheme.colors.info.dark,
        //   },
        //   '&:active': {
        //     backgroundColor: tailwindTheme.colors.primary.DEFAULT,
        //     color: tailwindTheme.colors.info.dark,
        //   },
        //   '&:disabled': {
        //     color: tailwindTheme.colors.disabled.text,
        //   },
        // },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          height: 48,
          backgroundColor: '#F9FAFB',
          borderRadius: 8,
          padding: 16,
          '&:hover': {
            backgroundColor: '#F9FAFB',
          },
          '&.Mui-focused': {
            backgroundColor: '#F9FAFB',
          },
          '& .MuiFilledInput-input': {
            padding: 0,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 12,
          '& .MuiOutlinedInput-input': {
            padding: '0px !important',
          },
        },
      },
    },
  },
})

const cacheMui = createCache({
  key: 'mui',
  stylisPlugins: [prefixer],
})

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cacheMui}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  )
}

export default ThemeProvider
