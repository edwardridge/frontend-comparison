module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.ts'
    ],

    tests: [
      'tests/**/*.spec.ts'
    ]
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};