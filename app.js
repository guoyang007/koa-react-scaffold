'use strict';
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const render = require('koa-ejs');

const historyFallback = require('koa2-history-api-fallback')
const router = require('./routes.js');
const path = require('path');
const app = module.exports = new koa();

// router to front-end
app.use(historyFallback())
// Logger
app.use(logger());


if (process.env.NODE_ENV!=='production') {
	const middleware = require('koa-webpack');
	const Webpack=require('webpack')
	const config = require('./cfg/webpack.dev.js');

	let compiler=Webpack(config)
	app.use(middleware({
		compiler:compiler
	}))
}

render(app, {
    root: process.env.NODE_ENV==='production'? path.join(__dirname, './public') :path.join(__dirname, './src'),
    extname: '.html'
});

app.use(serve(path.join(__dirname, 'public'),{
	maxage:100 * 24 * 60 * 60
}));

app.use(router.routes());
app.use(router.allowedMethods());


if (!module.parent) {
    app.listen(3000);
    console.log('listening on port 3000');
}
