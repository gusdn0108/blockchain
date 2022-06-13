import { Block } from "@core/blockchain/block";
import { GENESIS } from "@core/config";

describe("Block 검증", () => {
  let newBlock: Block;

  it("블록생성", () => {
    const data = ["somebody help me"];
    newBlock = Block.generateBlock(GENESIS, data,GENESIS);
  });

  it("블록검증 테스트", () => {
    const isValidBlock = Block.isValidNewBlock(newBlock, GENESIS);

    if (isValidBlock.isError) {
      console.log(isValidBlock.isError);
      return expect(true).toBe(false);
    }
    expect(isValidBlock.isError).toBe(false);
  });

  // it("1 to 1 ", () => {
  //   /**
  //    *
  //    */
  //   const a: number = 1;
  //   console.log(a == 2);
  //   expect(a).toEqual(2); // 해석  a값이 있는데 혹시 2니?
  // });
});
