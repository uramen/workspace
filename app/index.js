import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import './index.css'

import App from './containers/App'

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}
