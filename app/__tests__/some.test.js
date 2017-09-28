import React from 'react';
import {mount} from 'enzyme'
import List from '../components/List'
import {Provider} from 'react-redux'
import configureStore from '../configureStore'

describe('List', () => {
  test('List mast have input', () => {
    const component = mount(
      <Provider store={configureStore()}>
        <List list={
          [
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
        }/>
      </Provider>
    )

  })
})
