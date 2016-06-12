# Travis Builder for Lambda

Build thorough the API of the Travis CI from Lambda on AWS.

```
$ git clone git@github.com:miya0001/lambda-kick-travis.git
$ cd lambda-kick-travis
$ npm install
$ cp config/default.json.sample config/default.json
$ vi config/default.json
$ zip -r lambda.zip index.js config node_modules
```

![](https://www.evernote.com/l/ABUZ59lbVhpJsZIwZS7eiNCazUBAlkGzg2QB/image.png?v1)

![](https://www.evernote.com/l/ABWI0D8cP-VG25hJm5kygYYh-fgeqM58itkB/image.png?v1)

![](https://www.evernote.com/l/ABU6V6lpzrBDiZnkc1NkxI3H9_YGMCdLMCUB/image.png?v1)

## How to get token

```
$ travis token
```
