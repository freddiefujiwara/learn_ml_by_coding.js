#!/bin/env node
const DecisionTree = require('../src/decision_tree')
const fs = require('fs')
const LineByLine = require('n-readlines');

const test_preprocessed_csv = new LineByLine('data/test_preprocessed.csv')
const test_preprocessed = [];
const train_preprocessed_csv = new LineByLine('data/train_preprocessed.csv')
const train_preprocessed = [];

let line;
let first_line = undefined;
while(line = test_preprocessed_csv.next()){
  if(!first_line){
    first_line = line.toString('ascii').split(',');
  }
  const obj = {};
  let i = 0;
  line.toString('ascii').split(',').forEach((l)=>{
    obj[first_line[i]] = Number(l);
    i++;
  });
  test_preprocessed.push(obj);
}
while(line = train_preprocessed_csv.next()){
  if(!first_line){
    first_line = line.toString('ascii').split(',');
  }
  const obj = {};
  let i = 0;
  line.toString('ascii').split(',').forEach((l)=>{
    obj[first_line[i]] = Number(l);
    i++;
  });
  train_preprocessed.push(obj);
}
let dt = new DecisionTree(train_preprocessed,'Survived')
console.log(dt.predict(test_preprocessed))
