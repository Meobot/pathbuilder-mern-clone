import React from "react";

//final version will fetch data from database and render accordingly.
export default function Levels(props) {
	return (
		<div className="Levels-container">
			<div className="level-one-container">
				<div className="boosts-container">
					<div className="boost-block">
						<img src="" alt="" />
						<p>Set Abilities</p>
					</div>
					<div className="boost-block">
						<img src="" alt="" />
						<p>Skill Training</p>
					</div>
					<div className="boost-block">
						<img src="" alt="" />
						<p>Skill Training</p>
					</div>
				</div>
				<div className="feats-select-container">
					<div className="class-feat-container">
						<img src="" alt="" />
						<h3>Class Feat</h3>
						<p>Selected feat</p>
					</div>
					<div className="skill-feat-container">
						<img src="" alt="" />
						<h3>Skill Feat</h3>
						<p>Selected feat</p>
					</div>
				</div>
				<div className="feats-granted-container">
					<p>Selected Feat</p>
					<p>Selected Feat</p>
					<p>Selected Feat</p>
				</div>
			</div>
		</div>
	)
}