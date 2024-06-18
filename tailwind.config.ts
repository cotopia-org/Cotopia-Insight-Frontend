import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      medium64: [
        '4rem',
        {
          fontWeight: '500',
          lineHeight: '76.38px',
        },
      ],
      regular64: [
        '4rem',
        {
          fontWeight: '400',
          lineHeight: '76.38px',
        },
      ],
      medium56: [
        '3.5rem',
        {
          fontWeight: '500',
          lineHeight: '66.83px',
        },
      ],
      regular56: [
        '3.5rem',
        {
          fontWeight: '400',
          lineHeight: '66.83px',
        },
      ],
      medium48: [
        '3rem',
        {
          fontWeight: '500',
          lineHeight: '57.28px',
        },
      ],
      medium32: [
        '2rem',
        {
          fontWeight: '500',
          lineHeight: '38.19px',
        },
      ],
      bold24: [
        '1.5rem',
        {
          fontWeight: '600',
          lineHeight: '28.64px',
        },
      ],
      medium24: [
        '1.5rem',
        {
          fontWeight: '500',
          lineHeight: '28.64px',
        },
      ],
      regular24: [
        '1.5rem',
        {
          fontWeight: '400',
          lineHeight: '28.64px',
        },
      ],
      bold20: [
        '1.25rem',
        {
          fontWeight: '600',
          lineHeight: '23.87px',
        },
      ],
      medium20: [
        '1.25rem',
        {
          fontWeight: '500',
          lineHeight: '23.87px',
        },
      ],
      regular20: [
        '1.25rem',
        {
          fontWeight: '400',
          lineHeight: '23.87px',
        },
      ],
      light20: [
        '1.25rem',
        {
          fontWeight: '300',
          lineHeight: '23.87px',
        },
      ],
      bold18: [
        '1.125rem',
        {
          fontWeight: '600',
          lineHeight: '21.48px',
        },
      ],
      medium18: [
        '1.125rem',
        {
          fontWeight: '500',
          lineHeight: '21.48px',
        },
      ],
      regular18: [
        '1.125rem',
        {
          fontWeight: '400',
          lineHeight: '21.48px',
        },
      ],
      light18: [
        '1.125rem',
        {
          fontWeight: '300',
          lineHeight: '21.48px',
        },
      ],
      bold16: [
        '1rem',
        {
          fontWeight: '600',
          lineHeight: '19.09px',
        },
      ],
      medium16: [
        '1rem',
        {
          fontWeight: '500',
          lineHeight: '19.09px',
        },
      ],
      regular16: [
        '1rem',
        {
          fontWeight: '400',
          lineHeight: '19.09px',
        },
      ],
      light16: [
        '1rem',
        {
          fontWeight: '300',
          lineHeight: '19.09px',
        },
      ],
      bold14: [
        '0.875rem',
        {
          fontWeight: '600',
          lineHeight: '16.71px',
        },
      ],
      medium14: [
        '0.875rem',
        {
          fontWeight: '500',
          lineHeight: '16.71px',
        },
      ],
      regular14: [
        '0.875rem',
        {
          fontWeight: '400',
          lineHeight: '16.71px',
        },
      ],
      light14: [
        '0.875rem',
        {
          fontWeight: '300',
          lineHeight: '16.71px',
        },
      ],
      bold12: [
        '0.75rem',
        {
          fontWeight: '600',
          lineHeight: '14.32px',
        },
      ],
      medium12: [
        '0.75rem',
        {
          fontWeight: '500',
          lineHeight: '14.32px',
        },
      ],
      regular12: [
        '0.75rem',
        {
          fontWeight: '400',
          lineHeight: '14.32px',
        },
      ],
      light12: [
        '0.75rem',
        {
          fontWeight: '300',
          lineHeight: '14.32px',
        },
      ],
      bold10: [
        '0.625rem',
        {
          fontWeight: '600',
          lineHeight: '11.93px',
        },
      ],
      medium10: [
        '0.625rem',
        {
          fontWeight: '500',
          lineHeight: '11.93px',
        },
      ],
      regular10: [
        '0.625rem',
        {
          fontWeight: '400',
          lineHeight: '11.93px',
        },
      ],
      light10: [
        '0.625rem',
        {
          fontWeight: '300',
          lineHeight: '11.93px',
        },
      ],
      medium9: [
        '0.563rem',
        {
          fontWeight: '500',
          lineHeight: '10.74px',
        },
      ],
    },
    colors: {
      grayscale: {
        surface: {
          DEFAULT: '#F2F2F2',
          subtle: '#FDFDFD',
          disabled: '#E6E6E6',
        },
        border: {
          DEFAULT: '#BABCD4',
          disabled: '#E6E6E6',
        },
        text: {
          title: '#191B29',
          paragraph: '#333652',
          subtitle: '#656B9F',
          caption: '#A4A7C6',
          negative: '#FDFDFD',
          disabled: '#B3B3B3',
        },
      },
      primary: {
        surface: {
          DEFAULT: '#1B5BFF',
          subtle: '#EBF0FF',
          light: '#D1DEFF',
          dark: '#0030A8',
        },
        border: {
          DEFAULT: '#1B5BFF',
          light: '#759CFF',
          dark: '#002070',
        },
        text: {
          link: '#0040E0',
          display: '#0030A8',
          body: '#1B5BFF',
        },
      },
      secondary: {
        surface: {
          DEFAULT: '#5D11FF',
          subtle: '#EEE5FF',
          light: '#E0D1FF',
          dark: '#0030A8',
        },
        border: {
          DEFAULT: '#5D11FF',
          light: '#9D70FF',
          dark: '#22006B',
        },
        text: {
          link: '#4500DB',
          display: '#3400A3',
          body: '#5D11FF',
        },
      },
      error: {
        surface: {
          DEFAULT: '#FFA3B9',
          subtle: '#FFEBEF',
          light: '#FFD1DC',
          dark: '#E00034',
        },
        border: {
          DEFAULT: '#FF1A51',
          light: '#FF7595',
          dark: '#70001A',
        },
        text: {
          link: '#A80027',
        },
      },
      warning: {
        surface: {
          DEFAULT: '#FFF6A3',
          subtle: '#FFFDEB',
          light: '#FFFAD1',
          dark: '#E6CF00',
        },
        border: {
          DEFAULT: '#FFE81E',
          light: '#FFF27A',
          dark: '#706500',
        },
        text: {
          link: '#AD9C00',
        },
      },
      success: {
        surface: {
          DEFAULT: '#A3FFB7',
          subtle: '#EBFFEF',
          light: '#D1FFDB',
          dark: '#00E632',
        },
        border: {
          DEFAULT: '#1EFF4F',
          light: '#7AFF97',
          dark: '#007018',
        },
        text: {
          link: '#00AD26',
        },
      },
    },
  },
  plugins: [],
}
export default config
