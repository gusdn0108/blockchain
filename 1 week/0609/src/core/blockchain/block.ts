import { SHA256 } from 'crypto-js'
import merkle from 'merkle'
import { BlockHeader } from './blockHeader'
export class Block extends BlockHeader implements IBlock {
  public hash: string
  public merkleRoot: string
  public data: string[]

  constructor(_previousBlock: Block) {
    const merkleroot = Block.getMerkleRoot(_previousBlock)
    super(_previousBlock)
    this.hash = Block.createBlockHash(_previousBlock)
    this.merkleRoot = merkleroot
    this.data = data
  }
  public static getMerkleRoot(_previousBlock: Block) {
    const merkleTree = merkle('sha256').sync(data)
    const merkleRoot = merkleTree.root()
    return merkleRoot
  }

  public static createBlockHash(_previousBlock: Block) {
    const value = Object.values(_previousBlock)
    const data = value.join('') + _previousBlock.merkleRoot
    return SHA256(data).toString()
  }
}

const data = ['asdfasdf']
