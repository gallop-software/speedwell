import nextConfig from 'eslint-config-next'
import gallop from 'eslint-plugin-gallop'

export default [
  ...nextConfig,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
      // Disable overly strict React 19 rules that flag common valid patterns
      'react-hooks/set-state-in-effect': 'off', // setMounted(true) in useEffect is valid
      'react-hooks/refs': 'off', // Common ref patterns are valid
      'react-hooks/immutability': 'off', // Function hoisting is fine in components
    },
  },
  {
    // Gallop governance rules - only for blocks and components
    files: ['src/blocks/**/*.tsx', 'src/components/**/*.tsx'],
    plugins: {
      gallop,
    },
    rules: {
      'gallop/no-client-blocks': 'warn',
      'gallop/no-container-in-section': 'warn',
      'gallop/prefer-component-props': 'warn',
    },
  },
]
