import React, { Component } from 'react';


class SideQuestsComponent extends Component {
    constructor(props){
        super(props)
}


render(){
	return(


		<div className="individualCard">
			<title>Main Quests</title>
			<h3>Side Quests</h3>

			<p>These are more general items that will come in handy</p>
			<ul>
				<li>Bug Bounties, particularly NASA related. This helps scope out to see what I'll be walking into</li>
				<li>Replicate Marinus and scrape every single public-facing endpoint</li>
				<li>Scout out the web's "cantinas". It's so prevalent that it's an easy target.</li>
				<li>Basic Reconnaissance</li>
				<li>Container Security</li>
				<li></li>

			</ul>


		</div>


		)
	}
}

export default SideQuestsComponent;