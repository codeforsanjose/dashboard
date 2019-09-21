import React, { Component } from 'react';


class MainComponent extends Component {
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
				<li> 
					Network Topology Visualization --> "Ariadne"
				</li>
				<li>
					Compile Organizational Know-How --> "Workshop Assistant"

				</li>

			</ul>

			</div>


		)
	}
}

export default MainComponent;