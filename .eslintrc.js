module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "lines-between-class-members": "off",
    "max-len": ["error", {"code": 120, "ignorePattern": "^import |^export {(.*?)}"}],
    "no-restricted-imports": ["error", {"paths": ["rxjs"]}],
    "sort-imports": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_", "varsIgnorePattern": "^ignored?$"}]
  },
  overrides: [
    {
      files: ["*.spec.ts"],
      rules: {
        "@typescript-eslint/no-use-before-define": "off"
      }
    }
  ],
  env: {
    "browser": true,
    "node": true,
    "mocha": true
  }
};
