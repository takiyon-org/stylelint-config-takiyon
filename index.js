import customSyntax from 'postcss-scss';

export default {
    extends: 'stylelint-config-recess-order',
    customSyntax,
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless'],
                ignore: ['after-comment', 'first-nested'],
            },
        ],
        'block-no-empty': true,
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands'],
            },
        ],
        'comment-whitespace-inside': 'always',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-single-line-max-declarations': 0,
        'declaration-no-important': true,
        'declaration-property-unit-disallowed-list': {
            '/^border/': ['none'],
            transition: ['all'],
        },
        'function-calc-no-unspaced-operator': true,
        'function-name-case': 'lower',
        'function-url-quotes': 'always',
        'length-zero-no-unit': true,
        'max-nesting-depth': 3,
        'no-duplicate-selectors': true,
        'order/order': [
            {
                type: 'at-rule',
                name: 'extend',
            },
            {
                type: 'at-rule',
                name: 'include',
            },
            'declarations',
            'rules',
            {
                type: 'at-rule',
                name: 'media',
            },
        ],
        'property-no-unknown': true,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-max-id': 0,
        'selector-max-type': 3,
        'selector-no-qualifying-type': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'shorthand-property-no-redundant-values': true,
        'unit-no-unknown': true,
        'value-keyword-case': 'lower',

        // SCSS-specific rules
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-import-partial-extension': 'never',
        'scss/comment-no-loud': true,
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/load-no-partial-leading-underscore': true,
        'scss/selector-no-redundant-nesting-selector': true,

        // No vendor prefixes
        'at-rule-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,

        // Use kebab-case
        'keyframes-name-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'selector-id-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/at-function-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/at-mixin-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/percent-placeholder-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    },
};
