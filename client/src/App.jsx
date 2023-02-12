import { useState } from 'react'
import React from 'react'

import { Route, Routes } from "react-router-dom"

import Menu from './components/Menu'
import Traits from './components/Traits'
import Levels from './components/Levels'

function App() {

	// TODO Char constructor

  return (
	<div className="App">
			<Menu />
		<div className="main-container">
			<div className="main-column-left">
				<Traits />
				<Levels />
			</div>
			<div className="main-column-right">
				<div className="main-right-upper">
					<div className="Stats-container">
						{/* Stats component*/}
					</div>
					<div className="Conditions-container">
						{/* Conditions component */}
					</div>
				</div>
				<div className="main-right-lower">
					<div className="Skills-container">
						{/* Skills component */}
					</div>
					<div className="Inventory-container">
						{/* Inventory component */}
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default App