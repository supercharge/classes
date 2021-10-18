# Changelog


## [1.6.0](https://github.com/supercharge/classes/compare/v1.5.0...v1.6.0) - 2021-10-18

### Added
- refined TypeScript typings for classes checking for a specific constructor

### Updated
- bump dependencies


## [1.5.0](https://github.com/supercharge/classes/compare/v1.4.0...v1.5.0) - 2021-08-22

### Added
- refined TypeScript types narrowing the inputs

### Updated
- bump dependencies
- moved the code to the dedicated functions without the extra class handler


## [1.4.0](https://github.com/supercharge/classes/compare/v1.3.0...v1.4.0) - 2021-01-07

### Added
- `className(input)` method: returns the class name of the given input. Throws if the input is not a class constructor

### Updated
- bump dependencies
- change `main` entrypoint in `package.json` to `dist` folder
- move test runner from `@hapi/lab` to `jest`
- move assertions from `@hapi/code` to `jest`

### Removed
- remove `index.js` file which acted as a middleman to export from `dist` folder


## [1.3.0](https://github.com/supercharge/classes/compare/v1.2.0...v1.3.0) - 2020-06-09

### Added
- `isSubclassOf` method: determine whether a given class is subclassing (even in chain) a base class
  - Usage: `isSubclassOf(ClassToCheck, Base)`

### Updated
- bump dependencies


## [1.2.0](https://github.com/supercharge/classes/compare/v1.1.0...v1.2.0) - 2020-04-14

### Added
- link `types` in `package.json`


## [1.1.0](https://github.com/supercharge/classes/compare/v1.0.0...v1.1.0) - 2020-04-14

### Added
- `isFunction(input)` method determining whether the given `input` is a function

### Updated
- refine code examples in Readme
- move code base to TypeScript to ship this package with typings
- add API section in Readme outlining available methods


## 1.0.0 - 2020-02-15

### Added
- `1.0.0` release 🚀 🎉
