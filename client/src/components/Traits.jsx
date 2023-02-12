import React from "react";

export default function Traits(props) {
	return (
		<div className="Traits-container">
			<div className="ancestry-trait-container">
				<img src="" alt="" />
				<div className="ancestry-text-container">
					<h3 className="trait-headers">Ancestry</h3>
					<p id="ancestry-select">Select ancestry</p>
				</div>
			</div>
			<div className="background-trait-container">
				<img src="" alt="" />
				<div className="background-text-container">
					<h3 className="trait-headers">Background</h3>
					<p id="background-select">Select background</p>
				</div>
			</div>
			<div className="class-trait-container">
				<img src="" alt="" />
				<div className="class-text-container">
					<h3 className="trait-headers">Class</h3>
					<p id="class-select">Select class</p>
				</div>
			</div>
			<div className="dual-class-trait-container">
				<img src="" alt="" />
				<div className="dual-class-text-container">
					<h3 className="trait-headers">Dual Class</h3>
					<p id="dual-class-select">Select dual class</p>
				</div>
			</div>
		</div>
	)
}