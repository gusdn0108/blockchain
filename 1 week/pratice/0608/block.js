const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");



class BlockHeader{
    constructor(_height,_previousHash){
        this.version = BlockHeader.getVersion();
        this.height =  _height //_height.length + 1 ?? 이런식으로 만들어지는건가 ??
        this.timestamp = BlockHeader.getTimestamp();
        this.previousHash = _previousHash || "0".repeat(64)
    }
    static getVersion(){
        return "1.0.0"
    }

    static getTimestamp(){
        return new Date().getTime()
    }
}






class Block {
    constructor(_header, _data){
        const merkleroot = Block.getMerkleRoot(_data)
        this.version = _header.version; 
        this.height = _header.height;
        this.timestamp = _header.timestamp;
        this.previousHash = _header.previousHash;
        // 여기까진 _header = BlockHeader에서 만들어준애들을쓰면됨 
        this.hash = Block.createBlockHash(_header,merkleroot)
        this.merkleRoot = merkleroot
        this.data = _data;
      }

      static getMerkleRoot(_data){
          const merkleTree = merkle("sha256").sync(data)
          const merkleRoot = merkleTree.root();
          return merkleRoot;

      }

      static createBlockHash(_header,_merkleroot){
        // header에 있는 모든 정보들을 string으로 연결해야함 
        const values = Object.values(_header)
        const data = values.join(['']) + _merkleroot
        return SHA256(data).toString();
        
      }
    }

const header = new BlockHeader(0,'')
const data = ["hmm? "]
const block = new Block(header,data)

console.log(block)

// hash = header + merkleroot 
//merkleroot = body data 내용인건가??
