import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import 'babel-polyfill'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  firebase  from './redux/firebase'

const keeper = combineReducers({
  firebase
})
//const reducer = require('./redux/modules/reducer')

let store = createStore(keeper, applyMiddleware(thunk));
render(
  <Provider store={store} key='provider'>
    <App/>
  </Provider>,
document.getElementById('container')
)


console.log("yo!")
