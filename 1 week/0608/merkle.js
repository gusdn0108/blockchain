const merkle = require('merkle')

const data = ['asdf','asdf','asdf','asfda','asdfasf','asdfasfdsa'];

const merkleTree = merkle('sha256').sync(data);
console.log(merkleTree);

const merkleRoot = merkleTree.root();
console.log('merkleRoot의 값 :',merkleRoot)
// 5300C9CE0C7926908B91E9C66F5674D53D24930046DB235F2EDC3CEC541E2F98