import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 0,
			songs: []
		};
		this.player = React.createRef();
	}

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(songs => songs.json())
			.then(data => this.setState({ songs: data }));
	}

	playFunction = i => {
		this.setState({ current: i });
		this.player.current.src = "files/cartoons/songs/flintstones.mp3";
		this.player.current.play();
		// this.player.current.pause();
	};

	render() {
		console.log(this.state.songs);
		return (
			<div className="text-center mt-5">
				<ul>
					<li>
						<i
							className="fa fa-step-backward"
							aria-hidden="true"
							onClick={this.playFunction}
						/>
					</li>
					<li>
						<i
							className="fa fa-play"
							aria-hidden="true"
							onClick={this.playFunction}
						/>
					</li>
					<li>
						<i
							className="fa fa-pause"
							aria-hidden="true"
							onClick={this.playFunction}
						/>
					</li>
					<li>
						<i
							className="fa fa-step-forward"
							aria-hidden="true"
							onClick={this.playFunction}
						/>
					</li>
				</ul>
				<audio ref={this.player} />
			</div>
		);
	}
}
