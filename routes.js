const router = require('koa-router')();  
import dbFn from './model/dbFn.js'

router.get('/',async (ctx,next)=>{
	ctx.render('index.html',{})
	await next()
})

router.get('/api/articles/:id',async(ctx,next)=>{
	const {id}=ctx.params;
	let response={}
	await dbFn.get(id)
	.then(data=>{
		response.indexData=data
	}).catch(err=>{
		response.msg=err
	})
	ctx.body=response
	await next()
})

router.post('/api/articles',async(ctx,next)=>{
	// ctx.request.body
})


module.exports = router;  