import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config({
  // 기본 ESLint 설정
  files: ['src/**/*.{ts,tsx}'],
  
  // TypeScript 관련 설정
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: __dirname,
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  
  // 플러그인 설정
  plugins: {
    react,
    '@typescript-eslint': tseslint.plugin
  },
  
  // React 설정
  settings: {
    react: {
      version: '18.3'
    }
  },
  
  // 규칙 설정
  rules: {
    // TypeScript 엄격한 타입 체크 규칙
    ...tseslint.configs.strictTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
    
    // React 권장 규칙
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    
    // 추가 커스텀 규칙
    'react/prop-types': 'off', // TypeScript를 사용하므로 prop-types는 불필요
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시 강제 해제
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 경고
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 불필요
  }
});
