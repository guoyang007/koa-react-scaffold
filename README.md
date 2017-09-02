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

#### a thorough NPM scripts

* `npm run start` for development
* `npm run build-assets` for front-end assets building
* `npm run serve` for production




