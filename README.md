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

### how to use

* first: `npm install`
* second: `npm run build-dll`
* third:  `npm start` just starts your site

**note** : the `npm run build-dll` must be executed once before `npm run start` or `npm run build-assets` 

#### Tips: Maybe you can have a try with `lockdown` to lock versions

I once added `lockdown` to my project, but removed it now for that I can't stand this extra operation. I will go on to look for a better solution, and welcome you guys to discuss with me~



