## What is it?

This is a Single Page Application built with axios, json-server.
![demo](https://raw.githubusercontent.com/jongbochung/react-axio-json-server/master/src/demo/demo.gif)


## Libraries and tools
* create-react-app
* redux
* react-redux
* axios
* json-server
* lodash
* react-bootstrap-sweetalert

## branch

* axios-json-server branch : Use json-server as CRUD api server. You can read, crate and delete plyer data with react app.

* axios-json-server-regular-expression branch : Input values are checked by Regular Expression. Warning pops up with sweet alert.


## installation
All you need to do is clone or download this repository
```
git clone https://github.com/jongbochung/react-axio-json-server.git
```

## Running
To start this application run command bellow
```
yarn
```

To test your application,

```
you need to start both json sever and yarn start.

1. open 2 command prompts.
2. execute command bellow
   * json-server --watch db.json --port 3001
3. execute the below command on the other prompt.
   * yarn start
```

This is also watching for changes, so when you update some code, you don’t have to restart the server, it does that automatically
