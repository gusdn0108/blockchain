import { Chain } from "@core/blockchain/chain";

describe("Chain 함수 체크 ", () => {
  let node: Chain = new Chain(); // [GENESIS]

  it("getChain() 함수 체크", () => {
    console.log(node.getChain());
  });

  it("getLength() 함수 체크", () => {
    console.log(node.getLength());
  });

  it("getLastestBlock() 함수 체크", () => {
    console.log(node.getLastestBlock());
  });

  it("addBlock 함수체크", () => {
    for (let i = 1; i <= 50; i++) {
      node.addBlcok([`Block#${i}`]);
    }
    console.log(node.getChain());
  });
});
