# Calculator by HyperX

This is a calculator made by HyperX7777. This calculator can be used to solve Addition, Subtraction, Multiplication and Division operations.

## Use it directly

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to run the calculator directly.

```bash
npx calculator-hyperx
```

## Installation and Run

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install and run the calculator.

```bash
Install dependencies

1. npm i inquirer chalk gradient-string node-banner gradient-string

Install devDependencies

2. npm i @types/gradient-string @types/inquirer @types/node -D

Install calculator Files

3. npm i calculator-hyperx

Run the calculator

4. node node_modules/calculator-hyperx/public/app.js
```

## Usage

```typescript
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner"
import gradient from "gradient-string";
import {difference, divsion, product, sum} from "./functions.js"
```

The calculator can be used by entering values, navigating through arrow keys and pressing enter to proceed with each step.