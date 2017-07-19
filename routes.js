const router = require('koa-router')();  
router.get('/',(ctx,next)=>{
	ctx.render('index.html',{})
})
router.get('/articles',(ctx,next)=>{
	ctx.render('article/')
})

module.exports = router;  