import { SHA256 } from "crypto-js";
import merkle from "merkle";
import { BlockHeader } from "./blockHeader";

export class Block extends BlockHeader implements IBlock {
  public hash: string;
  public merkleRoot: string;
  public data: string[];

  constructor(_previousBlock: Block, _data: string[]) {
    const merkleroot = Block.getMerkleRoot(_previousBlock, _data);
    super(_previousBlock);
    this.hash = Block.createBlockHash(this);
    this.merkleRoot = merkleroot;
    this.data = _data;
  }

  public static getMerkleRoot(_previousBlock: Block, _data: string[]) {
    const merkleTree = merkle("sha256").sync(_data);
    const merkleRoot = merkleTree.root();
    return merkleRoot;
  }

  public static createBlockHash({ data, hash, ...rest }: Block) {
    const value = Object.values(rest);
    const getjoin = value.join("");
    return SHA256(getjoin).toString();
  }
}
