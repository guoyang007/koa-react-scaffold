import React,{Component} from 'react';
import './index.less'

class GridArticle extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let {id,content}= this.props.article
		return (
			<div className="grid-article">
				<div className="grid-article-body">
					{content}
				</div>
			</div>
		)
	}
}
export default GridArticle