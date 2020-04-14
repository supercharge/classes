<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    <h3>Classes</h3>
  </p>
  <p>
    Class utilities for Node.js and JavaScript
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#api"><strong>API</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/@supercharge/classes"><img src="https://img.shields.io/npm/v/@supercharge/classes.svg" alt="Latest Version"></a>
    <a href="https://www.npmjs.com/package/@supercharge/classes"><img src="https://img.shields.io/npm/dm/@supercharge/classes.svg" alt="Monthly downloads"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Introduction
The `@supercharge/classes` package provides a handful methods around classes in Node.js and JavaScript. For example, determine whether a given input is a class using the `.isClass(input)` method.


## Installation

```
npm i @supercharge/classes
```


## Usage
Using `@supercharge/classes` is pretty straightforward. Install and import the package and use it right away:

```js
const { isClass } = require('@supercharge/classes')

isClass(class Rabbit {})
// true

isClass(function classLikeRabbitFunc () {})
// false
```


## API

#### `Cls.isClass(input)`
Determine whether the given `input` is a class.

```js
const { isClass } = require('@supercharge/classes')

isClass(class YourClass {})
// true
```


#### `Cls.isFunction(input)`
Determine whether the given `input` is a function.

```js
const { isFunction } = require('@supercharge/classes')

isFunction(function sum () {})
// true
```


## Contributing
Do you miss a class-related function? We very much appreciate your contribution! Please send in a pull request 😊

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License
MIT © [Supercharge](https://superchargejs.com)

---

> [superchargejs.com](https://superchargejs.com) &nbsp;&middot;&nbsp;
> GitHub [@superchargejs](https://github.com/superchargejs/) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)
