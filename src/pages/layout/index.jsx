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
				
		return (
			<div className="app-container">
				<div className="left-panel">
					{Array.from('a'.repeat(5)).map((item,index)=>{
						return <p key={index}>{Math.random().toString(36).substr(2, 10)}</p>
					})}
				</div>
				<div className='content-container'>
					{
						getIndexData.slice().map((item,index)=>(
							<GridArticle article={item} key={index} />
						))
					}
				</div>
			</div>
		)
	}
}
 	
export default Layout