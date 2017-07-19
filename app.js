'use strict';
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const middleware = require('koa-webpack');
const router = require('./routes.js');
const path = require('path');
const app = module.exports = new koa();
const render = require('koa-art-template');
const config = require('./webpack.config.js');


// Logger
app.use(logger());

app.use(middleware({
    config: config
}))

render(app, {
    root: path.join(__dirname, 'dist/views/'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(router.routes());
app.use(router.allowedMethods());

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

if (!module.parent) {
    app.listen(3000);
    console.log('listening on port 3000');
}
