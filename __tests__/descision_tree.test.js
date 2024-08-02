const DecisionTree = require('../src/decision_tree')

test('Constructor Test',() => {
  const data = [
    { feature1: 1, feature2: 2, target: 0 },
    { feature1: 3, feature2: 4, target: 1 },
    { feature1: 5, feature2: 6, target: 0 },
  ]
  let dt = new DecisionTree(data,'target')
  expect(dt.constructor.name).toBe('DecisionTree')
  expect(dt.target).toBe('target')
  expect(dt.independent).toStrictEqual(['feature1','feature2'])
})
