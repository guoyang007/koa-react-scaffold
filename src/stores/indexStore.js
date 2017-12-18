import {observable, action,runInAction, computed, reaction} from 'mobx';
import axios from 'axios'

class IndexStore {
	@observable data
	constructor() {
        this.data =[]
    }
    // you can not pass a parameter to Get function
	@computed 
	get getIndexData(){
		if(this.data.length===0){
			// if you want to pass a param, just can write in fetch()
			this.fetchData()
		}
		return this.data
	}
	async fetchData(){
		let articleId;
		// for example, `/:id`
		let id=window.location.pathname.split('/').slice(-1)[0];
		articleId= /^\d+$/.test(id) ? id :0;

		let {data} =await axios.get(`/api/get`,{
			params:{
				id:articleId
			}
		})
		let indexData= articleId==0? data.indexData :[data.indexData]
		if(indexData.length==0){
			indexData=[{
				id:0,
				content:'has no content...,please add content by yourself'
			},{
				id:1,
				content:'has no content...,please add content by yourself, repeat1'
			}]
		}
		runInAction("fetch data",()=>{
			this.data = indexData;
		})
	}
}
let indexStore=new IndexStore()
export default indexStore