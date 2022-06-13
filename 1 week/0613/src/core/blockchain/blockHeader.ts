export class BlockHeader implements IBlockHeader {
  public version: string
  public height: number
  public timestamp: number
  public previousHash: string
  constructor(_previousHash: IBlock) {
    this.version = BlockHeader.getVersion()
    this.height = _previousHash.height + 1
    this.timestamp = BlockHeader.getTimestamp()
    this.previousHash = _previousHash.hash
  }
  public static getVersion() {
    return '1.0.0'
  }

  public static getTimestamp() {
    return new Date().getDate()
  }
}
