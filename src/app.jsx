import React, { Component, PropTypes } from 'react'

import 'stylesheets/app'

class App extends Component {
	constructor(props) {
	    super(props)
	}
	render() {
		return (
			<div className="container">
				<h1>Pure React</h1>
				{ this.props.children }
			</div>
		)
	}
}

export default App

App.defaultProps = {
	show: true
}

App.propTypes = {
	show: PropTypes.any,
	children: PropTypes.any
}
