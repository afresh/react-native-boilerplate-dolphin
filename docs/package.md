# TAKE NOTES ON PACKAGE

### Flow

> Binary wrapper for Flow - A static type checker for JavaScript.

##### Installation

[flow-bin](https://github.com/flowtype/flow-bin)

`npm install --save-dev flow-bin`

### react-native-splash-screen

> A splash screen for react-native, hide when application loaded ,it works on iOS and Android.

##### Installation

[react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

`npm i react-native-splash-screen --save`

### mobx & mobx-react & eslint & prettier

> Simple, scalable state management. [http://mobx.js.org](http://mobx.js.org)  
> React bindings for MobX.  
> A fully pluggable tool for identifying and reporting on patterns in JavaScript. [https://eslint.org](https://eslint.org)  
> Prettier is an opinionated code formatter. [https://prettier.io](https://prettier.io)  

##### Installation

[mobx](https://github.com/mobxjs/mobx)
[mobx-react](https://github.com/mobxjs/mobx-react)
[eslint](https://github.com/eslint/eslint)
[prettier](https://github.com/prettier/prettier)

```
npm install --save mobx@4.4
npm install --save mobx-react@5.2.8
npm install --save-dev @babel/core
npm install --save-dev @babel/plugin-proposal-decorators
npm install --save-dev @babel/plugin-transform-runtime
npm install --save-dev @babel/runtime
npm install --save-dev eslint
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-flowtype
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-react
npm install --save-dev eslint-plugin-react-native
npm install --save-dev babel-eslint
npm install --save-dev metro-react-native-babel-preset
npm install --save-dev prettier
```

Add `.babelrc` file in `./`.

```
{
    "presets": ["module:metro-react-native-babel-preset"],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/transform-runtime", {
          "helpers": true,
          "regenerator": false
        }]
    ]
}
```

Add to `package.json` file in `./`.

```
  "prettier": {
    "singleQuote": true,
    "printWidth": 115
  },
```

##### Issues

1. Can't find variable:Symbol

```
npm install --save mobx@4.4
npm install --save mobx-react@5.2.8
```

### react-native-router-flux

> The first declarative React Native router.

##### Installation

[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)

`npm install --save react-native-router-flux`

### react-native-device-info

> Device Information for React Native iOS and Android.

##### Installation

[react-native-device-info](https://github.com/rebeccahughes/react-native-device-info)

`npm install --save react-native-device-info`

### react-native-fetch-blob

> A project committed to making file access and data transfer easier, efficient for React Native developers.  
> forked from [wkh237/react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)

##### Installation

[rn-fetch-blob](https://github.com/joltup/rn-fetch-blob)

`npm install --save rn-fetch-blob`
