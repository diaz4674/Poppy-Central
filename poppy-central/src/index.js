import React from "react"
import { reducer } from "./reducer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.Fragment>,
	document.getElementById("root")
)
serviceWorker.unregister()
