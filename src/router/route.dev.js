import React from 'react'
import { Router, browserHistory } from 'react-router'

import App from '../app'
import Home from 'routes/Home'

const routes = (store) => {
	const rootRoute = {
		path: '/',
		component: App,
		indexRoute: {
			component: Home
		}
	}

	return (
		<div>
			<Router history={browserHistory} routes={rootRoute} />
		</div>
	)
}

export default routes