import React from 'react'
import {connect} from 'react-redux'
import {compose, withState, withProps, withHandlers} from 'recompose'

const App = (props) => <div>
	<input type="text" value={props.searchValue} onChange={props.handleSearchInput}/>
	{console.log(props.searchValue)}
	<x-header>some</x-header>
	<ul>
		{props.list
			.filter(I => I.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1)
			.map(I => <li key={I.id}>{I.name}</li>)}
	</ul>
</div>

export default compose(
	connect(
		state => ({
			info: console.log(state)
		})
	),

	withProps({
		list: [
			{
				id: 1,
				name: "Stive Jobs"
			},
			{
				id: 2,
				name: "Mark Twan"
			},
			{
				id: 3,
				name: "Jagobo Jons"
			},
			{
				id: 4,
				name: "Michel Linesku"
			},
		]
	}),

	withState('searchValue', 'setSearchValue', ''),

	withHandlers({
		handleSearchInput: props => e => props.setSearchValue(e.target.value),
	})
)(App)
