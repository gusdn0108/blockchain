import { Block } from '@core/blockchain/block'

describe('Block 검증', () => {
  /**
   * 어차피 제네시스 블럭은 하드코딩한 값이야.....!!!!!!!
   *
   * */
  const genesisBlock: Block = {
    version: '1.0.0',
    height: 0,
    hash: 'WTF?',
    timestamp: 1231006506,
    previousHash: '0'.repeat(64),
    merkleRoot: '0'.repeat(64),
    data: ['Hello Block'],
  }

  it('블록생성', () => {
    const data = ['Block #2']
    const newBlock = new Block(genesisBlock)
    console.log(newBlock)
  })
})
