# Travis Builder for Lambda

Build thorough the API of the Travis CI from Lambda on AWS.

## Getting started

```
$ git clone git@github.com:miya0001/lambda-kick-travis.git
$ cd lambda-kick-travis
$ npm install
```

### Create config for Travis CI.

```
$ cp config/travis-config.js.sample config/travis-config.js
$ vi config/travis-config.js
```

### Create config for Lambda.

```
$ cp config/lambda-config.js.sample config/lambda-config.js
$ vi config/lambda-config.js
```

### Then deploy to Lambda.

```
$ npm run deploy
```

![](https://www.evernote.com/l/ABUZ59lbVhpJsZIwZS7eiNCazUBAlkGzg2QB/image.png?v1)

![](https://www.evernote.com/l/ABWI0D8cP-VG25hJm5kygYYh-fgeqM58itkB/image.png?v1)

![](https://www.evernote.com/l/ABU6V6lpzrBDiZnkc1NkxI3H9_YGMCdLMCUB/image.png?v1)

## How to get token

```
$ travis token
```
