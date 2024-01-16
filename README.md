# Chrome Extension Starter Vue

![Chrome Extension Starter Logo](.github/images/logo.png)

Chrome Extension starter using Nx workspace and Vue.

## 📖 Table of Contents

- [Features](#✨-Features)
- [Prerequisites](#🎯-Prerequisites)
- [Getting Started](#🚀-Getting-Started)
- [Project Structure](#🏗-Project-Structure)
- [Commands](#🕹-Commands)
- [Release](#📦-Release)
- [License](#📜-License)

## ✨ Features

✅ Nx Workspace

✅ Vue

✅ Typescript

✅ Tailwind CSS

✅ Chrome Types

✅ Live Reload

✅ Very Fast Build

✅ All In One Command

✅ Support Manifest V3

✅ Popup Page

✅ Options Page

✅ Devtools Panel

✅ Background Script

✅ Content Script

## 🎯 Prerequisites

- [Node.js](https://nodejs.org) (>= 16 required)
- npm package manager (>= 8 required)
- [Chrome](https://www.google.com/chrome)

## 🚀 Getting Started

1. Install dependencies

```shell
npm i
```

2. Run development live reload

```shell
npm run serve:dev
```

3. Open Chrome browser
4. Go to this url: `chrome://extensions`
5. Click on `"Developer mode"`
6. Click on `"Load unpacked"`
7. Choose the `extension` directory from this root directory
8. Yay, you did it! 😏
9. Now update the code as you want! 😛

> ℹ️ More info about developing Chrome extension can be found [here](https://developer.chrome.com/docs/extensions/mv3)

## 🏗 Project Structure

So the purpose is to take the advantage of the type system of TypeScript and to use the power of Nx workspace to create multiple applications with the powerful framework Vue!

So we have 3 applications:

1. Popup (`apps/extension/popup`) - used for the upper popup
2. Options (`apps/extension/options`) - used for the options page
3. DevTools Panel (`apps/extension/devtools-panel`) - used for the devtools panel

In every Chrome extension we have background script that communicate with the content scripts, which can be found in `apps/extension/scripts/background/src/main.ts`.

We are also can inject content script which can be found in `apps/extension/scripts/content/src/main.ts`.

All the applications have already the Chrome types so can just use `chrome` and the editor will recognize it.

To integrate this app into an existing Nx repository, simply copy the extension folder from ./apps into the apps directory of your repository. Remember to update your .gitignore to include the extension's build files and verify that your dependencies are compatible.

## 🕹 Commands

Start with development configuration

```shell
npm run serve:dev
```

Start with production configuration.

```shell
npm run serve:prod
```

Build with development configuration.

```shell
npm run build:dev
```

Build with production configuration.

```shell
npm run build:prod
```

## 📦 Release

I recommend making the release automatic with GitHub actions or other ci service.

- Run `npm run build:prod`
- ~~Bump the version number in `manifest.json` & `package.json`~~ (this is done automatically with npm run build:prod)
- Create a git tag containing the version you are releasing using `git tag -a <version>`
- Create zip file from the extension directory
- Upload the zip to the Chrome developer dashboard

## 📜 License

[MIT](LICENSE)
