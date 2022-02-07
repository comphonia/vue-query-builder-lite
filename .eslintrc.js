module.exports = {
  root: true,

  parserOptions: {
    parser: `babel-eslint`,
    sourceType: `module`,
  },

  env: {
    browser: true,
    node: true,
  },

  extends: [`eslint:recommended`, `plugin:vue/recommended`],

  rules: {
    'generator-star-spacing': `off`,
    'arrow-parens': `off`,
    'comma-dangle': [`error`, `only-multiline`, { functions: `never` }],
    curly: [`error`, `multi-or-nest`, `consistent`],
    indent: [
      `error`,
      2,
      {
        ArrayExpression: `first`,
        FunctionExpression: { body: 1, parameters: `first` },
        ImportDeclaration: `off`,
        MemberExpression: `off`,
        SwitchCase: 1,
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        ignoreComments: true,
      },
    ],
    'key-spacing': [
      `error`,
      {
        align: { beforeColon: false, afterColon: true, on: `value` },
        multiLine: { beforeColon: false, afterColon: true },
        singleLine: { beforeColon: false, afterColon: true },
      },
    ],
    'linebreak-style': `off`,
    'no-fallthrough': `off`,
    'no-multi-spaces': [
      `error`,
      {
        ignoreEOLComments: true,
        exceptions: {
          ExportNamedDeclaration: true,
          FunctionExpression: true,
          ImportDeclaration: true,
          ObjectExpression: true,
          Property: true,
          VariableDeclarator: true,
        },
      },
    ],
    'no-unused-vars': `off`,
    'no-var': `error`,
    'no-void': `off`,
    'prefer-const': `error`,
    'prefer-destructuring': [`error`, { object: true, array: false }],
    'prefer-promise-reject-errors': `off`,
    'quote-props': [`error`, `consistent-as-needed`],
    quotes: [`error`, `backtick`],
    semi: [`error`, `never`],
    'template-curly-spacing': `off`,

    // Vue-specific rules
    'vue/max-attributes-per-line': [
      `error`,
      {
        singleline: 3,
        multiline: { max: 1, allowFirstLine: false },
      },
    ],
    'vue/no-unused-components': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'vue/no-unused-vars': `off`,
    'vue/singleline-html-element-content-newline': `off`,
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
}
