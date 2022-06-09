declare interface IBlock extends IBlockHeader {
  hash: string
  merkleRoot: string
  data: string[]
}

declare interface IBlockHeader {
  version: string
  height: number
  timestamp: number
  previousHash: string
}
