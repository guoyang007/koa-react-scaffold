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

#### Tips: lock versions by `lockdown`

##### One Time Project Setup

*1. npm install the version of lockdown you want: `npm install --save lockdown`
*2. add a line to your package.json file: "scripts": { "preinstall": "lockdown" }
*3. generate a lockdown.json: 
	
	```
	node_modules/.bin/lockdown-relock
	```

*4. commit: `git add package.json lockdown.json && git commit -m "be safe"`

##### Adding new modules

*1. npm install the specific dependencies of your app npm install --save foo@0.8.1
*2. re-generate your lockdown.json: 
	
	```
	node node_modules/.bin/lockdown-relock
	```
*3. commit: git add package.json lockdown.json && git commit -m "be safe"




