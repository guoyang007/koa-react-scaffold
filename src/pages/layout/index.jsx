import React,{Component} from 'react'
import {observer,inject} from 'mobx-react';
require('./index.less') 
import GridArticle from '../../components/grid-article/index.js'

@inject("indexStore")
@inject("routing")
@observer
class Layout extends Component{
	constructor(props){
		super(props)
	}

	render(){
		let {getIndexData}=this.props.indexStore;
		let {history}=this.props.routing;


		let Lists=()=>{
			let arr=[]
			getIndexData.slice().map((item,index)=>{
				arr.push(<GridArticle article={item} key={index} />)	
				})
			return arr
		}
				
		console.log('lists',Lists())
		console.log('data',getIndexData.slice())
		return (
			<div className="app-container">
				<div className="content-left">
					left
				</div>
				<div className="content-middle">
					{Lists()}
				</div>
				<div className="content-right">
					right
				</div>
			</div>
		)
	}
}
 	
export default Layout