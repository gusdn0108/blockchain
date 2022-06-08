#  블로그 정리

https://velog.io/@hello_hyun/Blockchain-개념-및-코드


# 핵심 

블록의 형태를 알게됨 


# 작업순서 부분 

제일 어려웟던 부분 순서가 좀 햇깔렸음 어느부분을 먼저해야 다른것을 만들수있는지.. 이런것들이 햇깔림

1. BlockHeader에 보내고 그 안에 인자값을 뭘 받아야 될지 생각해야함 (인자값을 안받는 아이들은 메서드를 활용해서 만들어줄수있는 아이들이라던가 고정값 예를들어 version 라던가 timestamp 라던가 등등)
2. 또한 그 BlockHeader에서 인스턴스를 만들어서 인자값 애들을 바꿔줄수있도록 해줘야함 new BlockHeader(0,'') 이런식으로 
3. 그 헤더값을 block안에 넣어줘야하니 블록 인스턴스를 하나 만들어줌...
4. 그 인스턴스안에 내가 필요한 header값과 data 를 넣어줌 그러면 원하는 블록이 만들어짐 여기서 핵심인게 내가 넣었던 인자값들이 어떻게 움직이는지 잘 파악해야함 정신줄 놓고가면 햇깔리기 시작할꺼임 


# 햇깔렷던것들

1. merkleroot 
2. genesis block 

# 1 

솔직히 처음에 많이 했깔렸는데 .. 전에 연습했던 merkle파일을 보니 merkleroot가 어느값인지 알게되었음


# merkle 파일 

const merkle = require('merkle')

const data = ['asdf','asdf','asdf','asfda','asdfasf','asdfasfdsa'];

const merkleTree = merkle('sha256').sync(data);
console.log(merkleTree);

const merkleRoot = merkleTree.root();
console.log('merkleRoot의 값 :',merkleRoot)
// 5300C9CE0C7926908B91E9C66F5674D53D24930046DB235F2EDC3CEC541E2F98



# 2 

제네시스 블록이 뭔지 잘 몰랐어서 정리를 하지못하였는데 공식문서를보고 알게됨 ..





