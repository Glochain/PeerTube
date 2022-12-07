# async.js (yes, another one!)
This is a light-weight approximate implementation of
[ES7's async-await](https://github.com/tc39/ecmascript-asyncawait) pattern.

## Install it
You can npm install it.

```bash
npm install marcosc-async --save
```

## Play with it!
You can [play with the async API](http://marcoscaceres.github.io/async/example) through gh-pages.

## API
Once you import it (using either a script tag or require), there will be
an "async" function you can use on the global object.

The async function takes generator, and returns a function that you can call as needed.
It returns a promise.
```js
const doAsyncThing = async(function*(args) {
  var result = yield Promise.resolve(1);
  return result;
});

doAsyncThing()
  .then(value => console.log(value)); // 1
```

## Examples
You can create simple async functions like so:

```js
const async = require("marcosc-async");
var doSomethingAsync = async(function*(){
  return yield Promise.resolve("hi")
});
doSomethingAsync()
  .then(value => console.log(value)); // "hi"
```

Simple example for downloading a list of URLs.
```js
const urls = ["/a", "/b"];
const doAsyncThing = async(function*(listOfURLs) {
  let responses = [];
  for (let url of listOfURLs) {
    responses.push(yield fetch(url));
  }
  return yield Promise.all(responses.map(res => res.toJSON()));
});

doAsyncThing(urls)
  .then(doSomethingElse)
  .catch(err => console.error(error));
```

It allows for simple creation of async function and "tasks". For example:

```js
const async = require("marcosc-async");
const myThinger = {
  doAsynThing: async(function*(url) {
    const response = yield fetch(url);
    const text = yield response.text();
    return process(result);
  }),
};
```

And task-like things can be created as follows:

```js
const async = require("marcosc-async");
// Run immediately
const myTask = async.task(function*(url) {
  const response = yield fetch(url);
  const text = yield response.text();
  return process(result);
}).then(doSomethingElse);
```

### Binding `this`
You can also correctly bind `this` like so:

```js
const async = require("marcosc-async");
const myThinger = {
  someValue: "value",
  asyncTaskA(...args) {
    return async(function*() {
      return yield this.asyncTaskB(...args)
    }, this);
  },
  asyncTaskB(...args) {
    async(function*() {
      return this.value;
    }, this);
  },
};
```
