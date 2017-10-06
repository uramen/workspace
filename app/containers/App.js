import React from 'react'
import {connect} from 'react-redux'
import {compose, withState, withProps, withHandlers} from 'recompose'
import List from '../components/List'

const
	App = props => <List list={props.list} />

export default compose(
	withProps({
		list: [
			{
				id  : 1,
				name: 'Stive Jobs',
			},

			{
				id  : 2,
				name: 'Mark Twan',
			},

			{
				id  : 3,
				name: 'Jagobo Jons',
			},

			{
				id  : 4,
				name: 'Michel Linesku',
			},
		],
	}),
)(App)
