import React, { Component } from 'react';


class SideQuestsComponent extends Component {
    constructor(props){
        super(props)
}


render(){
	return(


		<div className="individualCard">
			<title>Main Quests</title>
			<h3>Main Quests</h3>

			<p>{this.props.materials}</p>


		</div>


		)
	}
}

export default SideQuestsComponent;