import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends('next', 'prettier'),
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      curly: 'error',
      'no-var': 'error',
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'keyword-spacing': ['error', { before: true, after: true }],
    },
  },
];

export default eslintConfig;
