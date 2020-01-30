# micro-svelte
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Simple template for building full stack apps.

## The stack

- Backend: Uses [micro][micro] with [micro-fork][micro-fork] for the routing.
- Frontend: Use [Svelte][Svelte], this whole repo is based on svelte [template][template]
- Tests: Tests are made with [jest][jest]

## Usage

To use it clone the repo and delete de `.git` folder, or better yet, use [degit][degit]:

```bash
npx degit YerkoPalma/micro-svelte my-app
cd my-app
npm install
```

## The commands

There are availaible the following commands:

- start: Start the app in production mode.
- dev: Start for development.
- build: Build the app for releasing.
- test: Check [standard][standard], dependencies with [depcheck][depcheck] and run tests.
- link: Fix lint issues with `standard --fix`.

## License
[MIT](/license)

[micro]: https://github.com/zeit/micro
[micro-fork]: https://github.com/amio/micro-fork
[Svelte]: https://github.com/sveltejs/svelte
[template]: https://github.com/sveltejs/template
[jest]: https://github.com/facebook/jest
[degit]: https://github.com/Rich-Harris/degit
[standard]: https://github.com/standard/standard
[depcheck]: https://github.com/depcheck/depcheck