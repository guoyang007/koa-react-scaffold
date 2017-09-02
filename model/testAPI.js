import dbFn from './dbFn'

let data={
	id:'1111',
	content:'this is the first page'
}
dbFn.add(data).then(data=>{
	console.log(data)
}).catch(err=>{
	console.log(err)
})
let data2={
	id:'2222',
	content:'this is the second page'
}
dbFn.add(data2).then(data=>{
	console.log(data)
}).catch(err=>{
	console.log(err)
})