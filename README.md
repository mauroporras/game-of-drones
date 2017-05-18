# Game of Drones
---


Watch live at http://mauroporrasp.github.com

This a mobile-first app, and it also looks cool on any device.


## Setting up the dev env

This project is using the reduced syntactic style (without semicolons)
for ES2015: https://github.com/rse/es6-features#frequently-asked-questions-faq


### If you're using Yarn:

Yarn is [the recommended tool.](https://yarnpkg.com)

1. Go to the project root.
2. To install the dependencies, run `yarn install`
3. To start the project, run `yarn start`


### If you're not using Yarn:

1. Go to the project root.
2. To install the dependencies, run `npm install`
3. To start the project, run `npm start`


## Running unit tests

Run `yarn test` or `npm test`


## Running E2E tests

For brevity's sake, you don't need to install any driver, we're using Chrome.

While the project is up, run `yarn e2e` or `npm run e2e`


## Building for production

Run `yarn build` or `npm build`


## Tools used for development

- Database: [Apache CouchDB](http://couchdb.apache.org/)
- Architecture: Composite + State, using libraries such as React, Ramda and Axios.
- Editor: Vim + Emmet & tmux. It can be bootstrapped from here:
  https://github.com/mauroporrasp/dotfiles
- Dependency management: [Yarn](https://yarnpkg.com/)
- VCS: Git ([GitHub flow](https://guides.github.com/introduction/flow/))
- Scripting: ES2015
- Styles: Modular CSS


## I would have used...

- If the exercise was more extense, I would have used Redux. After all,
  [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
