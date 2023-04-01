module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  // 开启插件
  plugins: [],
  // 继承别人写好的配置。
  // 继承了plugin:@typescript-eslint/recommended，这样就不用写plugins和parser了。
  extends: [
    // ESLint
    "eslint:recommended",
    // TypeScript
    "plugin:@typescript-eslint/recommended",
    // Jest
    "plugin:jest/recommended",
    // React Testing Library
    "plugin:testing-library/react",
    // 这个要放在最后
    "plugin:prettier/recommended",
  ],
  rules: {
    // 关闭规则
    "jest/expect-expect": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-explicit-any": "off",
    "no-var": "off",
    "@typescript-eslint/no-var-requires": "off",
    "testing-library/no-dom-import": "off",
    // 错误提示
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    // 告警提示
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
    "testing-library/no-debugging-utils": "warn",
  },
};
