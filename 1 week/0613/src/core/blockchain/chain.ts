import { Block } from "@core/blockchain/block";
import { DIFFICULTY_ADJUSTMENT_INTERVAL } from "@core/config";

export class Chain {
  public blockchain: Block[];

  constructor() {
    this.blockchain = [Block.getGenesis()];
  }

  public getChain(): Block[] {
    return this.blockchain;
  }

  public getLength(): number {
    return this.blockchain.length;
  }

  public getLastestBlock(): Block {
    return this.blockchain[this.blockchain.length - 1];
  }

  public addBlcok(data: string[]): Failable<Block, string> {
    // TODO : 내가 앞으로 생성할 블록의 높이값을 가져올수있는가?
    // 현재높이값 - block interval(10) = 음수값 이때 음수값이 나오면 제네시스 블록으로 대체시킴
    // 난이도를 구해야함 .
    // 생성시간을 구해야함
    const previousBlock = this.getLastestBlock();
    const adjustmentBlock: Block = this.getAdjustmentBlock(); // -10짜리 Block 구함
    const newBlock = Block.generateBlock(previousBlock, data, adjustmentBlock);
    const isVaild = Block.isValidNewBlock(newBlock, previousBlock);

    if (isVaild.isError) return { isError: true, error: isVaild.error };
    this.blockchain.push(newBlock);
    return { isError: false, value: newBlock };
  }

  public getAdjustmentBlock() {
    const currentLength = this.getLength(); // 1
    const adjustmentBlock: Block =
      currentLength < DIFFICULTY_ADJUSTMENT_INTERVAL
        ? Block.getGenesis()
        : this.blockchain[currentLength - DIFFICULTY_ADJUSTMENT_INTERVAL] 

    return adjustmentBlock; // 블럭자체를 반환시켜줌
  }
}
