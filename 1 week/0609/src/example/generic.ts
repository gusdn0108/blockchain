// javascript

// console.log('result :' , asfd)

// log(1)

// console.log('result:' ,1)
// result : 1

// 제네릭

// function log<T>(n: T) {
//   console.log('result :', n)
// }

// log<number>(123)

// class 로 할때는 interface 안해도됨

export class Output {
  [address: string]: number
  constructor(_address: string, _amount: number) {
    this[_address] = _amount
  }
}

export class Input {
  public signature: string

  constructor(_output: Output) {
    this.signature = Input.sum(_output)
  }

  static sum(_output: Output): string {
    const value: string = Object.values(_output).join('')
    return value
  }
}
