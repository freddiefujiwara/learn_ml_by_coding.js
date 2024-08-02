class DecisionTree {
  constructor(data,target){
    this.data = data
    this.target = target
    this.independent = Object.keys(data[0]).filter(key => key !== target);
  }
  predict(data) {
    return data.map(row => this.__flowDataThruTree(row));
  }

  __flowDataThruTree(row) {
    const targetCounts = this.data.reduce((counts, rowData) => {
      counts[rowData[this.target]] = (counts[rowData[this.target]] || 0) + 1;
      return counts;
    }, {});

    const total = this.data.length;
    return Object.values(targetCounts).map(count => count / total);
  }
}

module.exports = DecisionTree
