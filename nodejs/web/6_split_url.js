// https://www.w3schools.com/nodejs/nodejs_url.asp
//
var url = require('url');

var adr = 'http://localhost:8088/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query;   //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month)  //returns 'february'''
console.log(qdata.year)  //returns 'february'''

// execute node 6_split_url.js