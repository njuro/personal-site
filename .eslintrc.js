module.exports = {
  extends: ["airbnb-typescript-prettier", "plugin:import/typescript"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "import/no-cycle": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "react/jsx-props-no-spreading": 0,
  },
};
