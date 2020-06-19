module.exports = {
  extends: "react-app",
  rules: {
    semi: "error",
    "no-array-constructor": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-undef": 1,
    "no-underscore-dangle": 1,
    "no-use-before-define": 2,
    curly: [2, "all"],
    "default-case": 2,
    eqeqeq: 2,
    "max-lines": ["error", { max: 320, skipComments: true }]
  }
};
