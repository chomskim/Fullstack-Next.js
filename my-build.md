# Build command for the book The Complete Developer_Master the Full Stack

## rename listings txt file to js(or ts) or json file without Listing Header

```
node rename.js
```

## ch01

```
cd listings

cp 1-4.json package.json
npm i
node 1-5.js
```

### localhost:3000/hello

## ch02

```
cp 2-21.json package.json
npm i
node 2-23.js
```

### localhost:3000/api/names

## ch03

### rename .txt to .ts

```
npm install --save-dev typescript
npx tsc -init

tsc 3-7.ts
node 3-7.js

tsc 3-14.ts
node 3-14.js
2
11

tsc 3-16.ts
node 3-16.js
{ weather: 'sunny', zipcode: '00000', temp: 30 }

mkdir sample-express
cp 3-19.ts 3-20.ts 3-21.ts sample-express
cp package.json
npm i -D @types/express
make tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "noImplicitAny": true
  }
}
=== end of file ===

npx tsc

```

### http://localhost:3000/api/weather/12345

```
{"zipcode":"12345","weather":"sunny","temp":35}
```

## ch05

```
mkdir 05-next
cd 05-next
npx create-next-app@latest --typescript --use-npm .
npm run dev

```

### http://localhost:3000/hello

### Server-Side Rendering http://localhost:3000/names-ssr

### Static Site Generation(Incremental Static Regeneration) http://localhost:3000/names-ssg

### Client-Side Rendering http://localhost:3000/names-csr

## ch06

```
cd 06-graphql
npx create-next-app@latest --typescript --use-npm .
npm install @apollo/server @as-integrations/next graphql graphql-tag
[add graphql folder and some files]
npm run dev

```

### Apollo Server http://localhost:3000/api/graphql

```
[Operation]
query Weather($zip: String) {
  weather(zip:$zip) {
    zip
    weather
  }
}
[Variables]
{
  "zip":"96826"
}
[Response]
{
  "data": {
    "weather": [
      {
        "zip": "96826",
        "weather": "sunny"
      }
    ]
  }
}
```
