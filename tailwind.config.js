/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code': {
              'color': '#dcdcdc',
              'backgroundColor': '#1e1e1e',
              'padding': '0.25rem 0.5rem',
              'borderRadius': '0.25rem',
            },
            'pre': {
              'color': '#dcdcdc',
              'backgroundColor': '#1e1e1e',
              'borderRadius': '0.5rem',
              'padding': '1rem',
              'overflowX': 'auto',
            },
            'pre code': {
              'backgroundColor': 'transparent',
              'padding': 0,
              'color': 'inherit',
              'fontSize': 'inherit',
            },
            '.hljs-comment': {
              'color': '#6a9955',
            },
            '.hljs-quote': {
              'color': '#6a9955',
            },
            '.hljs-keyword': {
              'color': '#569cd6',
            },
            '.hljs-selector-tag': {
              'color': '#569cd6',
            },
            '.hljs-literal': {
              'color': '#569cd6',
            },
            '.hljs-section': {
              'color': '#569cd6',
            },
            '.hljs-link': {
              'color': '#9cdcfe',
            },
            '.hljs-built_in': {
              'color': '#4ec9b0',
            },
            '.hljs-type': {
              'color': '#4ec9b0',
            },
            '.hljs-string': {
              'color': '#ce9178',
            },
            '.hljs-title': {
              'color': '#dcdcdc',
            },
            '.hljs-name': {
              'color': '#dcdcdc',
            },
            '.hljs-meta': {
              'color': '#9cdcfe',
            },
            '.hljs-emphasis': {
              'fontStyle': 'italic',
            },
            '.hljs-strong': {
              'fontWeight': 'bold',
            },
          },
        },
        dark: {
          css: {
            'color': '#dcdcdc',
            'backgroundColor': '#1e1e1e',
            'code': {
              'color': '#ff9d00',
              'backgroundColor': '#2d2d2d',
              'padding': '0.25rem 0.5rem',
              'borderRadius': '0.25rem',
            },
            'pre': {
              'color': '#ffffff',
              'backgroundColor': '#2d2d2d',
              'borderRadius': '0.5rem',
              'padding': '1rem',
              'overflowX': 'auto',
            },
            'pre code': {
              'backgroundColor': 'transparent',
              'padding': 0,
              'color': 'inherit',
              'fontSize': 'inherit',
            },
            '.hljs-comment': {
              'color': '#6a9955',
            },
            '.hljs-quote': {
              'color': '#6a9955',
            },
            '.hljs-keyword': {
              'color': '#569cd6',
            },
            '.hljs-selector-tag': {
              'color': '#569cd6',
            },
            '.hljs-literal': {
              'color': '#569cd6',
            },
            '.hljs-section': {
              'color': '#569cd6',
            },
            '.hljs-link': {
              'color': '#9cdcfe',
            },
            '.hljs-built_in': {
              'color': '#4ec9b0',
            },
            '.hljs-type': {
              'color': '#4ec9b0',
            },
            '.hljs-string': {
              'color': '#ce9178',
            },
            '.hljs-title': {
              'color': '#dcdcdc',
            },
            '.hljs-name': {
              'color': '#dcdcdc',
            },
            '.hljs-meta': {
              'color': '#9cdcfe',
            },
            '.hljs-emphasis': {
              'fontStyle': 'italic',
            },
            '.hljs-strong': {
              'fontWeight': 'bold',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
