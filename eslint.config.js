import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import js from '@eslint/js'


/**
 * ESLint configuration for the BeX platform React project.
 * @module eslintConfig
 * @docs [ESLint Configuration]{@link https://eslint.org/docs/latest/use/configure/configuration-files}
 */
export default [
  js.configs.recommended,
  // reactPlugin.configs.flat.recommended, //  Uncomment this line to enable ALL of the recommended React rules
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals['node'],
        "window": true,
        "WebSocket": true,
        // temporary fix for undefined global variables
        "document": true,
        "localStorage": true,
        "sessionStorage": true,
        "fetch": true,
        "Headers": true,
        "FormData": true,
        "Storage": true,
        "Blob": true,
        "URL": true,
        "URLSearchParams": true,
        "navigator": true,
        "location": true,
      },
    },
    rules: {
      // Add custom rules here - see https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
      "max-lines": ["error", {"max": 250, "skipComments": true}], // Enforce a maximum number of lines per file
      // "max-lines-per-function": ["error", { "max": 100 }],  // Enforce a maximum number of lines per function 
      "react/jsx-indent": ["error", 4], // Enforce consistent indentation of 4 spaces
      "react/no-unused-state": "error",
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error" 
    }
  }
]