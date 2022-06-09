import { Block } from "@core/blockchain/block";

describe("Block 검증", () => {
  const genesisBlock: Block = {
    version: "1.0.0",
    height: 0,
    timestamp: 123321321,
    previousHash: "0".repeat(64),
    hash: "0".repeat(64),
    merkleRoot: "0".repeat(64),
    data: ["Hello Block"],
  };

  it("블록생성", () => {
    const data = ["somebody help me"];
    const newBlock = new Block(genesisBlock, data);
    const newBlock2 = new Block(newBlock, data);
    console.log(newBlock2);
  });
});
