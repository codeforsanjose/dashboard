import React, { Component } from 'react';


class CardComponent extends Component {
    constructor(props){
        super(props)
}


render(){
	return(


		<div className="individualCard">
			<title>{this.props.title}</title>
			<h3>{this.props.title}</h3>

			<p>{this.props.materials}</p></div>


		)
	}
}

export default CardComponent;