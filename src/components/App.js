import React, { useState } from "react";
import Nav from "./Nav";
import 'semantic-ui-css/semantic.min.css'

import hogs from "../porkers_data";
import HogsList from "./HogsList";
import MenuBar from "./MenuBar";
import { Card, Divider } from "semantic-ui-react";

function App() {
	const [greased, notGreased] = useState(false)
	const [sortText, setSort] = useState('')

	function handleGreased() {
		notGreased(!greased)
	}

	function filterQuery(txt) {
		setSort(txt)
	}
	const filteredHogs = hogs.filter(hog => greased ? hog.greased : true)
	.sort((hog1, hog2) => {
		if (sortText.toLocaleLowerCase() === 'name') {
			return hog1.name.localeCompare(hog2.name)
		} else if (sortText.toLocaleLowerCase() === 'weight') {
			return hog1.weight - hog2.weight
		} else {
			return true
		}
	})
	
	return (

		<div className="ui container App">
			<Nav />
			<MenuBar func={handleGreased} toggle={greased} sortTextFunc={filterQuery}/>
			{/* <HogsList hogs={hogs}/> */}
		
			<Card.Group>
			<Divider textAlign={'center'}>
				<HogsList hogs={filteredHogs} />	
				</Divider>
			</Card.Group>
		
		</div>
	);
}

export default App;
