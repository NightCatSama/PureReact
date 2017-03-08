import React from 'react'
import { Router, browserHistory } from 'react-router'

import App from '../app'

const routes = (store) => {
	const rootRoute = {
		path: '/',
		component: App,
		getIndexRoute(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, {
					component: require('routes/Home').default
				})
			})
		}
	}
	
	return (
		<div>
			<Router history={browserHistory} routes={rootRoute} />
		</div>
	)
}

export default routes