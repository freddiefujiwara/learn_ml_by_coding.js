const DecisionTree = require('../src/decision_tree')

test('Constructor Test',() => {
  let dt = new DecisionTree();
  expect(dt.constructor.name).toBe('DecisionTree');
})
