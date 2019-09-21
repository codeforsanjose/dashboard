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
			<ul>
				<li>Bug Bounties, particularly NASA related</li>
				<li>Replicate Marinus and scrape every single public-facing endpoint</li>
				<li>Scout out the web's "cantinas"</li>
				<li>Reconnaissance</li>
				<li>Container Security</li>
				<li></li>

			</ul>


		</div>


		)
	}
}

export default SideQuestsComponent;