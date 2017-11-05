### Scaffold for a node & react application

* **supports ES6 in all files, whether the webpack config file or node files**


#### a complete application

* server: 
	
	* koa + koa-router

* database:

	* mongoose

* front-end

	* react+react-router+mobx


#### following the best practice to organize webpack configration files for building a production site:

* writing separating webpack configurations for each environment
* use `webpack-merge` to merge these configurations together

#### use DLL to pack third packages

using webpack.dll to precompile third packages can decrease the compilation time efficiently.

#### a thorough NPM scripts

recommend to use `yarn`, because of faster speed and dependencies version management.

migrating from `npm` to `yarn` is easy, just replacing `npm` with `yarn` is OK.

* `yarn run start` for development
* `yarn run build` for front-end assets building
* `yarn run serve` for production

### how to use

* first: `yarn install`
* second: `yarn run build-dll`
* third: 
	
	* `development` mode: `yarn start` just starts your site
	* `production` mode: `yarn run build-assets` to build the assets, and then run `npm run serve` to run your site

**note** : the `yarn run build-dll` must be executed once before `yarn run start` or `yarn run build-assets` 




