### Typescript 설치 및 설정

1. 시간나면 데코레이터 함수한번 보면 좋음

# start

npm init -y
npm install -D typescript ts-node @types/node
npm install -D tsconfig-paths
npm install hex-to-binary
npm install crypto.js

# 확장자

파일이름.ts

# 자바스크립트로 바꿔야함

npx tsc 파일.ts 로 쓰게되면 자바스크립트 파일로 바꿔줌

너무 귀찮아 !! 번들/빌드 하기 싫엉.... 할때 쓰는것이 ts-node

# ts-node쓰는법 : ts-node 파일명

- 단 배포할때 쓰면안됨 테스트할때만 쓰면됨

npx ts-node 파일명

# tsconfig.json

index.js -> webpack.config.js -> /dist/app.js

```json
{
  "compilerOptions": {
    "outDir": "./dist/" // 파일을 어디다가 둘지 설정해두는곳
  }
}
```

옵션을 넣어주고

npx tsc --build을 하게되면

dist라는 폴더가 생성됨

- 절대경로

typescript
├── src @을 붙여서 절대경로로 만들어줌
│ └── main.ts
└── main.ts
└── main.ts
└── main.ts
└── main.ts
└── tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".", // tsconfig.json 파일 기준
    "paths": {
      // 절대경로 설정
      "@src/*": ["src/*"]
    }
  }
}
```

```json
─── [프로젝트]
├── src
└── /core
└────  index.js
└── utils.ts


{
    "compilerOptions":{
        "baseUrl": ".", // tsconfig.json 파일 기준
        "paths":{       // 절대경로 설정
            "@core/*":["src/core/*"]
        }
    }
}

import util from "@core/utils.ts";
```

**\*index.ts**

```javascript
import { a } from '@core/utils.ts'
```

**\*utils.ts**

```javascript
export const a: number = 10
```

# tsconfig-paths

npx ts-node -r tsconfig-paths/register [파일명]

귀찮으니깐 package.json start에

    "dev:ts":"npx ts-node -r tsconfig-paths/register" 등록해서 쓰기

    npm run dev:ts [파일명]만 해주면됨

# 타입스크립트 하면서 화나는 경우

`외부 라이브러리 가져올경우`

그냥 npm install을 하게될경우 ts모드가안됨

그래서 npm i --save-dev @types/express을 써주는게 좋음

- 또다른방법

유명하지 않은건 tpyes이런게없음.. 그래서 @types라는 디렉토리를 만들어주고 그 해당 라이브러리를 넣어주고 설정해주면됨

# eslint , prettier

코드 맞추려구씀 ㅎㅎ

npm install -D eslint prettier eslint-plugin-prettier eslint-config-prettier

설정할려면 프로젝트 폴더에 만들어주면됨

# .eslintrc

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

.prettierrc

```json
{
  "printWidth": 120, //120~160
  "tabWidth": 4,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

# 테스트 라이브러리

javascript -> jest
typescript -> jest

npm install -D ts-jest @types/jest babel-core
npm install -D @babel/preset-typescript @babel/preset-env

**babel.config.js**

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
      },
    ],
    '@bable/preset-typescript',
  ],
}
```

**jest.config.ts**

```js
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.test.(js|ts)'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
  },
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
}

export default config
```
