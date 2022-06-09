// Typescript
// OOP

// interface

const board = [
  {
    idx: 1, // number
    subject: '글제목입니다', // string
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
  {
    idx: 2,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
]

// Javascript
// array object
// 하나의 변수에 여러가지 데이터를 넣을수있다.

interface IBoard {
  idx: number
  subject: string
  content: string
  writer: string
  hit: number
}

// const data: IBoard = {
//   idx: 0, // number
//   subject: '글제목입니다', // string
//   content: '내용입니다',
//   writer: '작성자입니다',
//   hit: 0,
// }

let a: number[] = [1, 2, 3, 4]
// let a = [1,'hello world',3,{name:'ingoo'}]

const example: number[] = [1, 2, 3, 4]

const board2: IBoard[] = [
  {
    idx: 0,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
  {
    idx: 0,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
  {
    idx: 0,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
  {
    idx: 0,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
  {
    idx: 0,
    subject: '글제목입니다',
    content: '내용입니다',
    writer: '작성자입니다',
    hit: 0,
  },
]

/*

declare type Result<R> = { isError: false; value: R }
declare type Failure<E> = { isError: true; value: E }
declare type Failable<R, E> = Result<R> | Failure<E>


*/

function isSome(num: number): Failable<string, string> {
  if (num !== 5) return { isError: true, error: `${num}은 틀렸습니다.` }
  return { isError: false, value: `${num}이 맞습니다.` }
}

const result = isSome(1)

if (result.isError) console.log(result.error)
