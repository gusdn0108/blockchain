import {a} from "@core/utils/utils"
import hexToBianry from "hex-to-binary"
import SHA256 from "crypto-js/sha256"

// hash hex -> 16진수 -> 2진수
// 16진수로 보이는 그저 string임

const hash: string = SHA256("ingoo").toString();
const binary:string = hexToBianry(hash);

console.log(binary)