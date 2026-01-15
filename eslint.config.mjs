import nextConfig from 'eslint-config-next'
import gallop from 'eslint-plugin-gallop'

export default [
  ...nextConfig,
  {
    plugins: {
      gallop,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
      'gallop/no-client-blocks': 'warn',
      'gallop/no-container-in-section': 'warn',
      'gallop/prefer-component-props': 'warn',
    },
  },
]
