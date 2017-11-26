# restassured-cucumber-protractor
## This is a basic project developed using cucumber, rest-assured and protractor covering functional and web-service automation.

### Open one terminal session and run following commands
```sh
$ git clone https://github.com/iamgautamjangra/restassured-cucumber-protractor.git
$ cd restassured-cucumber-protractor
$ npm install
$ npm start
```
### Open another terminal session and run following command
```sh
$ webdriver-manager update && webdriver-manager start
```

### Again open one more terminal session and execute below commands
```sh
$ cd restassured-cucumber-protractor
$ npm run e2etest or protractor conf.js
```
### Run test cases on basis of tags
```sh
protractor conf.js --cucumberOpts.tags=@test2,@test1
```