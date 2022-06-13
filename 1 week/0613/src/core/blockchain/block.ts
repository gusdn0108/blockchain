import {
  BLOCK_GENERATION_INTERVAL,
  DIFFICULTY_ADJUSTMENT_INTERVAL,
  GENESIS,
  UNIT,
} from "@core/config";
import { SHA256 } from "crypto-js";
import merkle from "merkle";
import { BlockHeader } from "./blockHeader";
import hexToBinary from "hex-to-binary";


export class Block extends BlockHeader implements IBlock {
  public hash: string;
  public merkleRoot: string;
  public data: string[];
  public nonce: number;
  public difficulty: number;

  constructor(
    _previousBlock: Block,
    _data: string[],
    _adjustmentBlock: Block = _previousBlock
  ) {
    super(_previousBlock);
    const merkleRoot = Block.getMerkleRoot(_data);
    this.merkleRoot = merkleRoot;
    this.hash = Block.createBlockHash(this);
    this.nonce = 0;
    this.difficulty = Block.getDiffficulty(
      this,
      _adjustmentBlock,
      _previousBlock
    );
    this.data = _data;
  }

  public static getGenesis() {
    return GENESIS;
  }

  public static getMerkleRoot<T>(_data: T[]): string {
    const merkleTree = merkle("sha256").sync(_data);
    return merkleTree.root() || "0".repeat(64);
  }

  public static createBlockHash(_block: Block): string {
    const { version, timestamp, merkleRoot, previousHash, height,difficulty,nonce } = _block;
    const values: string = `${version}${timestamp}${merkleRoot}${previousHash}${height}${difficulty}${nonce}`;
    return SHA256(values).toString();
  }

  public static generateBlock(
    _previousBlock: Block, // 얘랑
    _data: string[],
    _adjustmentBlock: Block // 얘가지고 난이도만들어야함
  ): Block {
    const generateBlock = new Block(_previousBlock, _data, _adjustmentBlock);
    const _newBlock = Block.findBlock(generateBlock);
    return generateBlock;
  }

  public static findBlock(_generateBlock: Block): Block {
    // TODO : 마이닝 작업 코드를 넣어야함.
    // _generateBlock Blcok 이 담김
    // hash
    let hash :string
    let nonce :number = 0
    while (true) {

      nonce++;
      console.log(_generateBlock)
      _generateBlock.nonce = nonce;
      hash = Block.createBlockHash(_generateBlock)
      // 16 -> 2진수
      const binary:string = hexToBinary(hash) // 01010101000101
      const result:boolean = binary.startsWith('0'.repeat(_generateBlock.difficulty))
      if(result){
        _generateBlock.hash = hash
        return _generateBlock;
        
      }
    }
    
  }

  public static getDiffficulty(
    _newBlock: Block,
    _adjustmentBlock: Block,
    _previousBlock: Block
  ): number {
    if (_newBlock.height < 9) return 0;
    if (_newBlock.height < 19) return 1;

    // 시간을 구할 때 10번째 배수의 블록일때만 검사하기를 원함
    // 예) for 1~10 3의 배수일때만 "짝"을 console.log쳐라
    if (_newBlock.height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0)
      return _previousBlock.difficulty;

    const timeTaken: number = _newBlock.timestamp - _adjustmentBlock.timestamp; // 6000
    const timeExpected: number =
      UNIT * BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;

    if (0 < timeExpected / 2) return _adjustmentBlock.difficulty + 1;
    else if (timeTaken > timeExpected * 2)
      return _adjustmentBlock.difficulty - 1;

    return _adjustmentBlock.difficulty;
  }

  public static isValidNewBlock(
    _newBlock: Block,
    _previousBlock: Block
  ): Failable<Block, string> {
    if (_previousBlock.height + 1 !== _newBlock.height)
      return { isError: true, error: "블록 높이가 맞지않습니다." };
    if (_previousBlock.hash !== _newBlock.previousHash)
      return { isError: true, error: "이전 블록 해시가 맞지않습니다" };
    if (Block.createBlockHash(_newBlock) !== _newBlock.hash)
      return { isError: true, error: "블록해시가 올바르지 않습니다" };
    return { isError: false, value: _newBlock };
  }
}
