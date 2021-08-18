# 📦 react-libraries

Libraries of react component and hooks monorepos

## Summary

**react-components**

- [react-image](packages/react-components/react-image)
- [react-video-player](packages/react-components/react-video-player)
- [react-transition](packages/react-components/react-transition)

**react-hooks**

- [use-bounding-client-rect](packages/react-hooks/use-bounding-client-rect)
- [use-did-update](packages/react-hooks/use-did-update)
- [use-document-scroll-top](packages/react-hooks/use-document-scroll-top)
- [use-window-size](packages/react-hooks/use-window-size)

## How to use

### Install specific module

Each modules can be imported separately like this:

```shell script
$ npm install -s @wbe/react-image
```

```tsx
import { Image } from "@wbe/react-image";
```

## Contribute

For all those who wish to contribute, feel free to submit a pull request. You can submit a new module with the scaffolder tool.
Clone the repos and move to repos folder:

```shell script
$ git clone git@github.com:willybrauner/react-library.git react-library && cd react-library
```

Install all dependencies:

```shell script
$ npm i && lerna bootstrap
```

Scaffold a new module (will prepare a ready-made module file structure):

```shell script
$ npm run scaffold
```

## Credits

Libraries is developed and maintained by [Willy Brauner](https://willybrauner.com)

## Licence

MIT
