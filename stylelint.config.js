module.exports = {
  customSyntax: 'postcss-html',

  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-vendor-prefix': true,
    'block-closing-brace-newline-after': [
      'always-single-line',
      {
        ignoreAtRules: [
          'else'
        ]
      }
    ],
    'block-no-empty': true,
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'comment-empty-line-before': [
      'always',
      {
        ignore: [
          'stylelint-commands',
          'after-comment'
        ]
      }
    ],
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'declaration-property-unit-disallowed-list': {
      'font-size': [
        'px',
        'rm'
      ],
      padding: [
        'rm',
        'rem'
      ],
      margin: [
        'rm',
        'rem'
      ]
    },
    'font-weight-notation': 'numeric',
    'function-comma-space-before': 'never',
    'function-comma-space-after': 'always-single-line',
    'function-calc-no-unspaced-operator': true,
    'function-parentheses-space-inside': 'never',
    indentation: 2,
    'max-empty-lines': 1,
    'selector-max-compound-selectors': [
      6,
      {
        severity: 'warning'
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'number-leading-zero': 'never',
    'no-descending-specificity': null,
    'no-duplicate-selectors': [
      true,
      {
        severity: 'warning'
      }
    ],
    'order/properties-order': [
      [],
      {
        severity: 'warning'
      }
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        {
          type: 'at-rule',
          name: 'extend'
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true
        },
        {
          type: 'rule',
          selector: '&::before'
        },
        {
          type: 'rule',
          selector: '&::after'
        }
      ],
      {
        unspecified: 'bottom'
      }
    ],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false
      }
    ],
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'first-nested'
        ],
        ignore: [
          'after-comment'
        ]
      }
    ],
    'scss/dollar-variable-colon-space-after': 'always',
    'selector-combinator-space-after': 'always',
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'shorthand-property-no-redundant-values': true,
    'string-quotes': [
      'single',
      {
        severity: 'warning'
      }
    ],
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-no-vendor-prefix': true
  }
}
