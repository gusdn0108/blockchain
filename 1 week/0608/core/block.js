const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// const block = {
//     version:"1.0.0",
//     Height:0,
//     timestamp:212313,
//     previousHash:"",
//     hash:"",
//     merkleRoot:"",
//     data :['asdf','asdf','asdf','asfda','asdfasf','asdfasfdsa'],
// };

class BlockHeader {
  constructor(_height, _previousHash) {
    // 매개변수로 받아야하는 값들  O / X
    /*-----------------------------------------------------*/
    this.version = BlockHeader.getVersion(); // X
    this.height = _height; // O
    this.timestamp = BlockHeader.getTimestamp(); // X
    this.previousHash = _previousHash || "0".repeat(64);
    console.log(_previousHash);
  }
  static getVersion() {
    return "1.0.0";
  }

  static getTimestamp() {
    return new Date().getTime();
  }
}

// new 라는 키워드를 사용해서 class 문법을 사용했을때 나오는 결과물의 객체를 = 인스턴스

// header.getVersion() // static 안붙음
// BlockHeader.getVersion() // static 붙음

// 결과론적으로 static 이뭐냐 ? = 인스턴스전에 사용할수있는 함수?

class Block {
  constructor(_header, _data) {
    const merkleroot = Block.getMerkleRoot(_data); 
    this.version = _header.version;
    this.height = _header.height;
    this.timestamp = _header.timestamp;
    this.previousHash = _header.previousHash;
    this.merkleRoot = merkleroot;
    this.hash = Block.createBlockHash(_header, merkleroot);
    this.data = _data;
    // this.a = 윗 블록 에있는 a 에 _a을 집어넣겟다
  }

  static getMerkleRoot(_data) {
    const merkleTree = merkle("sha256").sync(data);
    const merkleRoot = merkleTree.root();
    return merkleRoot;
  }

  static createBlockHash(_header, _merkleroot) {
      // header에 모든 정보를 string 으로 연결 ,\
      // TODO : 1. header 에 있는 객체안에있는 값을 스트링으로 연결
      const values = Object.values(_header);
      const data = values.join(['']) + _merkleroot;
      console.log(data)
      return SHA256(data).toString();
  }
}

// previustHash
// block 연결하는 애가 chain 배워
// block 에서 첫번째블록에는 이름이 붙음 . 제네시스 블록

const header = new BlockHeader(0, "asdfsafda");
console.log(header);
const data = [
  "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
];
const block = new Block(header, data);
console.log(block)

// 객체지향적인건 먼저 설계를하고 코드를 짜야함
// hash , timestap , merkleRoot 3개는 인자값을 안받아도됨
// () 매개변수 3개이상을 하지않도록,

// const block = new Block("result");
// console.log("block의 결과값 : ", block);

/*
_version,
_height,
_timestamp,
_previousHash,
_hash,
_merkleRoot,
_data
*/


// class 를 안쓰고 해보기 .
// Typescript으로 변환 할꺼임 
// hash , merkleroot , genesis block 