import React, { useState } from 'react';
import './style.scss';

function NameForm() {

	const [firstNames, setFirstNames] = useState(null);
	const [middleNames, setMiddleNames] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [results, setResults] = useState(null);

	const handleFirstNames = (event) => {
		let firstNames = event.target.value.split(/\n/)
		setFirstNames(firstNames)
	}

	const handleMiddleNames = (event) => {
		let middleNames = event.target.value.split(/\n/)
		setMiddleNames(middleNames)
	}

	const handleLastName = (event) => {
		let lastName = event.target.value.split(/\n/)
		setLastName(lastName)
	}

	const generateNames = (event) => {
		if(firstNames != null && middleNames != null && lastName != null) {
			let results = []
			firstNames.forEach(fn => {
				middleNames.forEach(mn => {
					results.push(`${fn} ${mn} ${lastName}\n`)
				})
			});
			setResults(results)
		} else {
			setResults("You must enter first names, middle names, and a last name then click GO")
		}
	}

	return (
		<section is-large section-padding>
			<div class="container has-text-centered">
				<div class="columns">
					<div class="column" is-one-third>
						<textarea class="textarea" id="first-names" placeholder="e.g. List of First Names" onChange={e => handleFirstNames(e)}></textarea>
					</div>
					<div class="column" is-one-third>
						<textarea class="textarea" id="middle-names" placeholder="e.g. List of Middle Names" onChange={e => handleMiddleNames(e)}></textarea>
					</div>
					<div class="column" is-one-third>
						<textarea class="textarea" id="last-name" placeholder="e.g. Last Name" onChange={e => handleLastName(e)}></textarea>
					</div>
				</div>
				<div class="columns">
					<div class="column" is-full>
						<textarea class="textarea" id="results" placeholder="Enter first names, middle names, and a last name then click GO" value={results}></textarea>
					</div>
				</div>
				<button class="button is-primary" id="go" onClick={e => generateNames(e)}>GO</button>
			</div>
		</section>
	)
};

export default NameForm;
