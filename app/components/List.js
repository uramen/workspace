import React from 'react'
import {connect} from 'react-redux'
import {compose, withState, withProps, withHandlers} from 'recompose'

const List = (props) => <div>
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

	withState('searchValue', 'setSearchValue', ''),

	withHandlers({
		handleSearchInput: props => e => props.setSearchValue(e.target.value),
	})
)(List)
