export const DIFFICULTY_ADJUSTMENT_INTERVAL: number = 10;
// 난이도 조정 블록 범위

export const BLOCK_GENERATION_INTERVAL: number = 10;
// 블럭 생성 시간 ( 단위 : 분 )

export const UNIT: number = 60;
//블록 한개당 생성되는 시간

// 블록 생성 시간 10 * 60 = 600

export const GENESIS: IBlock = {
  version: "1.0.0",
  height: 0,
  timestamp: 123321321,
  previousHash: "0".repeat(64),
  hash: "0".repeat(64),
  merkleRoot: "0".repeat(64),
  nonce: 0,
  difficulty: 0,
  data: ["Hello Block"],
};
