import dbFn from './dbFn'

for(let i=1;i<10;i++){
	let data={
		id:i+'',
		content:`this is the ${i} page`
	}
	dbFn.add(data).then(data=>{
		console.log(data)
	}).catch(err=>{
		console.log(err)
	})
}



